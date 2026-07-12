// ============================================================
// COPPER ISLAND COLLECTABLES — Main Application Logic
// ============================================================

// ---- CART ----
const CART_KEY = 'cic_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1, variant = '') {
  const cart = getCart();
  const product = getProductById(productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId && i.variant === variant);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      brand: product.brand,
      price: product.wholesalePrice,
      image: product.image,
      qty,
      variant: variant || (product.variants && product.variants[0]) || ''
    });
  }
  saveCart(cart);
  showToast(`"${product.name}" added to cart`, 'success');
}

function removeFromCart(productId, variant) {
  const cart = getCart().filter(i => !(i.id === productId && i.variant === variant));
  saveCart(cart);
}

function updateCartQty(productId, variant, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.variant === variant);
  if (item) {
    item.qty = Math.max(1, parseInt(qty) || 1);
    saveCart(cart);
  }
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ---- WISHLIST ----
const WISH_KEY = 'cic_wishlist';

function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; }
  catch { return []; }
}

function toggleWishlist(productId) {
  let list = getWishlist();
  if (list.includes(productId)) {
    list = list.filter(id => id !== productId);
    showToast('Removed from wishlist', 'info');
  } else {
    list.push(productId);
    showToast('Added to wishlist ❤️', 'success');
  }
  localStorage.setItem(WISH_KEY, JSON.stringify(list));
  document.querySelectorAll(`[data-wish="${productId}"]`).forEach(btn => {
    btn.style.color = list.includes(productId) ? '#F97316' : '';
  });
}

// ---- TOAST ----
function showToast(msg, type = 'info', duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ'}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(10px)'; toast.style.transition = '0.3s'; setTimeout(() => toast.remove(), 300); }, duration);
}

// ---- MODAL (LOGIN) ----
function openModal() {
  const overlay = document.getElementById('login-modal');
  if (overlay) { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeModal() {
  const overlay = document.getElementById('login-modal');
  if (overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }
}

function switchModalTab(tab) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.modal-form').forEach(f => f.style.display = 'none');
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');
  const form = document.getElementById(`form-${tab}`);
  if (form) form.style.display = 'block';
}

// ---- RENDER: PRODUCT CARD ----
function renderProductCard(product) {
  const affiliateUrl = getProductAffiliateUrl(product);
  const wish = getWishlist().includes(product.id);
  return `
    <a href="product.html?id=${product.id}" class="product-card">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/${product.id}/600/450'">
        ${product.isNew ? '<div class="product-card-badge"><span class="badge badge-orange">New</span></div>' : ''}
        <button class="product-card-wishlist" data-wish="${product.id}"
          onclick="event.preventDefault(); toggleWishlist(${product.id})"
          style="${wish ? 'color:#F97316;opacity:1' : ''}">
          ${wish ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-card-body">
        <div class="product-card-brand">${product.brand}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-count">(${product.reviewCount})</span>
        </div>
        <div class="product-card-pricing">
          <span class="price-wholesale">${formatPrice(product.wholesalePrice)}</span>
          <span class="price-retail">${formatPrice(product.retailPrice)}</span>
        </div>
      </div>
      <div class="product-card-footer">
        <span class="min-order">${product.retailer || 'Copper Island'}</span>
        <div style="display:flex;gap:8px;align-items:center">
          <button class="btn-add-cart" onclick="event.preventDefault(); addToCart(${product.id}, 1)">+ Add</button>
          <a class="btn-add-cart" href="${affiliateUrl}" target="_blank" rel="sponsored noopener" onclick="event.preventDefault(); event.stopPropagation(); window.open('${affiliateUrl}', '_blank', 'noopener');">Amazon ↗</a>
        </div>
      </div>
    </a>
  `;
}

function getProductAffiliateUrl(product) {
  if (product?.amazonUrl) return product.amazonUrl;
  if (!product?.name) return '#';
  return buildAmazonAffiliateUrl(`${product.name} 3d printing`);
}

// ---- RENDER: BRAND CARD ----
function renderBrandCard(brand) {
  return `
    <a href="brand.html?id=${brand.id}" class="brand-card">
      <div class="brand-card-cover">
        <img src="${brand.cover}" alt="${brand.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/brand${brand.id}/800/300'">
      </div>
      <div class="brand-card-body">
        <div class="brand-card-logo">${brand.name.charAt(0)}</div>
        <div class="brand-card-name">${brand.name}</div>
        <div class="brand-card-cat">${brand.category}</div>
        <div class="brand-card-loc">📍 ${brand.location}</div>
      </div>
    </a>
  `;
}

// ---- RENDER: CATEGORY CARD ----
function renderCategoryCard(cat) {
  return `
    <a href="category.html?cat=${cat.id}" class="category-card">
      <div class="category-card-img">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/cat${cat.id}/600/400'">
        <div class="category-card-overlay"></div>
      </div>
      <div class="category-card-body">
        <div class="category-card-icon">${cat.icon}</div>
        <div class="category-card-name">${cat.name}</div>
        <div class="category-card-count">${cat.count} products</div>
      </div>
    </a>
  `;
}

// ---- HEADER HTML ----
function getHeaderHTML(activePage) {
  const navLinks = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'category.html', label: 'Shop', id: 'shop', children: CATEGORIES.map(c => ({ href: `category.html?cat=${c.id}`, label: `${c.icon} ${c.name}` })) },
    { href: 'brands.html', label: 'Brands', id: 'brands' },
    { href: 'about.html', label: 'About', id: 'about' },
    { href: 'about.html#faq', label: 'FAQ', id: 'faq' },
  ];

  const navHTML = navLinks.map(link => {
    const isActive = activePage === link.id;
    const dropdown = link.children ? `
      <div class="nav-dropdown">
        ${link.children.map(c => `<a href="${c.href}">${c.label}</a>`).join('')}
        <a href="category.html" style="border-top:1px solid #e2e8f0;margin-top:4px;padding-top:12px;font-weight:700;color:#1A3A5C;">View All Categories →</a>
      </div>
    ` : '';
    return `
      <li class="nav-item">
        <a href="${link.href}" class="nav-link${isActive ? ' active' : ''}">
          ${link.label} ${link.children ? '▾' : ''}
        </a>
        ${dropdown}
      </li>
    `;
  }).join('');

  return `
    <header class="site-header" id="site-header">
      <div class="header-top">
        <a href="index.html" class="header-logo">
          <div class="logo-icon">🏝️</div>
          <div>
            <div class="logo-text">Copper Island</div>
            <div class="logo-sub">Collectables</div>
          </div>
        </a>
        <form class="header-search" onsubmit="handleSearch(event)">
          <input type="text" id="header-search-input" placeholder="Search printers, filaments, miniatures…" autocomplete="off">
          <button type="submit">🔍</button>
        </form>
        <div class="header-actions">
          <button class="header-btn header-btn-ghost" onclick="openModal()">Log In</button>
          <button class="header-btn header-btn-primary" onclick="openModal()">Sign Up Free</button>
          <a href="cart.html" class="cart-btn">
            🛒 <span class="cart-count" style="display:none">0</span>
          </a>
        </div>
      </div>
      <nav class="header-nav" aria-label="Main navigation">
        <ul class="nav-list">${navHTML}</ul>
      </nav>
    </header>
  `;
}

// ---- FOOTER HTML ----
function getFooterHTML() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="header-logo footer-logo" style="margin-bottom:16px;display:inline-flex">
              <div class="logo-icon">🏝️</div>
              <div>
                <div class="logo-text">Copper Island</div>
                <div class="logo-sub">Collectables</div>
              </div>
            </a>
            <p class="footer-tagline">The wholesale marketplace for 3D printing supplies, miniatures, and maker essentials. Connecting creators across Canada and beyond.</p>
            <div class="footer-social">
              <a href="#" class="social-btn" title="Instagram">📷</a>
              <a href="#" class="social-btn" title="Facebook">📘</a>
              <a href="#" class="social-btn" title="Twitter / X">🐦</a>
              <a href="#" class="social-btn" title="YouTube">▶️</a>
              <a href="#" class="social-btn" title="Pinterest">📌</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              ${CATEGORIES.map(c => `<li><a href="category.html?cat=${c.id}">${c.name}</a></li>`).join('')}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Brands</h4>
            <ul>
              ${BRANDS.slice(0,6).map(b => `<li><a href="brand.html?id=${b.id}">${b.name}</a></li>`).join('')}
              <li><a href="brands.html">All Brands →</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Sellers</h4>
            <ul>
              <li><a href="#">Become a Seller</a></li>
              <li><a href="#">Seller Dashboard</a></li>
              <li><a href="#">Seller Resources</a></li>
              <li><a href="#">Pricing & Fees</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="about.html#faq">FAQ</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="footer-copy">© ${new Date().getFullYear()} Copper Island Collectables. All rights reserved.</span>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ---- LOGIN MODAL HTML ----
function getModalHTML() {
  return `
    <div class="modal-overlay" id="login-modal" onclick="handleModalOverlayClick(event)">
      <div class="modal">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <div class="modal-logo" style="font-size:2rem">🏝️</div>
        <h2 style="text-align:center">Copper Island</h2>
        <p style="text-align:center">Wholesale pricing for serious makers</p>
        <div class="modal-tabs">
          <button class="modal-tab active" data-tab="login" onclick="switchModalTab('login')">Log In</button>
          <button class="modal-tab" data-tab="signup" onclick="switchModalTab('signup')">Sign Up</button>
        </div>
        <div id="form-login" class="modal-form">
          <div class="form-group">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••">
          </div>
          <button class="btn btn-primary btn-full" onclick="fakeLogin()">Log In</button>
          <p style="text-align:center;font-size:0.8rem;margin-top:12px"><a href="#" style="color:var(--blue-mid)">Forgot password?</a></p>
          <div class="modal-divider"><span>or continue with</span></div>
          <button class="btn btn-outline btn-full" onclick="fakeLogin()">🔷 Continue with Google</button>
        </div>
        <div id="form-signup" class="modal-form" style="display:none">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="form-group"><label>First Name</label><input type="text" placeholder="Jane"></div>
            <div class="form-group"><label>Last Name</label><input type="text" placeholder="Doe"></div>
          </div>
          <div class="form-group"><label>Email address</label><input type="email" placeholder="you@example.com"></div>
          <div class="form-group"><label>Business Name</label><input type="text" placeholder="My Maker Studio"></div>
          <div class="form-group"><label>Password</label><input type="password" placeholder="Min. 8 characters"></div>
          <button class="btn btn-copper btn-full" onclick="fakeLogin()">Create Free Account</button>
          <p style="text-align:center;font-size:0.75rem;color:var(--gray-400);margin-top:12px">By signing up, you agree to our <a href="#" style="color:var(--blue-mid)">Terms</a> and <a href="#" style="color:var(--blue-mid)">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  `;
}

function handleModalOverlayClick(e) {
  if (e.target === e.currentTarget) closeModal();
}

function fakeLogin() {
  closeModal();
  showToast('Welcome to Copper Island Collectables! 🏝️', 'success');
}

// ---- SEARCH ----
function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('header-search-input')?.value.trim();
  if (q) window.location.href = `category.html?search=${encodeURIComponent(q)}`;
}

// ---- FAQ TOGGLE ----
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ---- INIT (runs on every page) ----
function initPage(activePage) {
  // Inject header
  const headerEl = document.getElementById('header-mount');
  if (headerEl) headerEl.innerHTML = getHeaderHTML(activePage);

  // Inject footer
  const footerEl = document.getElementById('footer-mount');
  if (footerEl) footerEl.innerHTML = getFooterHTML();

  // Inject modal
  const modalEl = document.getElementById('modal-mount');
  if (modalEl) modalEl.innerHTML = getModalHTML();

  // Update cart badge
  updateCartBadge();

  // ESC to close modal
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ---- URL PARAMS ----
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
