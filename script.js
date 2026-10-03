/* =========================================
   LUXÉRA FASHION STORE
   MAIN STYLES
========================================= */

:root {
    --black: #111111;
    --dark: #1a1a1a;
    --cream: #f5f2ec;
    --warm: #ebe5db;
    --white: #ffffff;
    --grey: #777777;
    --light-grey: #e5e2dc;
    --border: #dedbd4;
    --serif: "Playfair Display", serif;
    --sans: "DM Sans", sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--sans);
    color: var(--black);
    background: var(--white);
    overflow-x: hidden;
}

body.no-scroll {
    overflow: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input {
    font-family: inherit;
}

button {
    cursor: pointer;
}

img {
    width: 100%;
    display: block;
}

.section {
    padding: 110px 6vw;
}

.small-title,
.eyebrow {
    font-size: 11px;
    letter-spacing: 2px;
    font-weight: 600;
}

em {
    font-family: var(--serif);
    font-weight: 400;
}


/* =========================================
   TOP BAR
========================================= */

.top-bar {
    height: 34px;
    background: var(--black);
    color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;
}

.top-bar p {
    font-size: 10px;
    letter-spacing: 1.8px;
}


/* =========================================
   NAVBAR
========================================= */

.navbar {
    height: 78px;
    padding: 0 5vw;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;

    background: rgba(255,255,255,0.97);

    position: sticky;
    top: 0;
    z-index: 1000;

    transition: 0.3s ease;

    border-bottom: 1px solid transparent;
}

.navbar.scrolled {
    height: 68px;
    border-color: var(--border);
    box-shadow: 0 8px 30px rgba(0,0,0,0.04);
}

.nav-left {
    display: flex;
    align-items: center;
    gap: 30px;
}

.desktop-nav {
    display: flex;
    gap: 26px;
}

.desktop-nav a {
    font-size: 12px;
    font-weight: 500;
    position: relative;
}

.desktop-nav a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    background: var(--black);
    left: 0;
    bottom: -5px;
    transition: 0.3s;
}

.desktop-nav a:hover::after {
    width: 100%;
}

.logo {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 4px;
}

.nav-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 18px;
}

.icon-btn,
.menu-btn {
    border: 0;
    background: transparent;
    position: relative;
    font-size: 15px;
}

.counter {
    position: absolute;
    top: -9px;
    right: -10px;

    min-width: 16px;
    height: 16px;

    border-radius: 50%;
    background: var(--black);
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 8px;
}

.menu-btn {
    display: none;
}


/* =========================================
   MOBILE MENU
========================================= */

.mobile-menu {
    position: fixed;
    inset: 0;

    background: var(--cream);

    z-index: 1500;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 28px;

    transform: translateX(100%);
    transition: 0.5s ease;
}

.mobile-menu.open {
    transform: translateX(0);
}

.mobile-menu a {
    font-family: var(--serif);
    font-size: 34px;
}

.close-mobile {
    position: absolute;
    top: 30px;
    right: 30px;

    background: none;
    border: 0;

    font-size: 25px;
}


/* =========================================
   SEARCH
========================================= */

.search-overlay {
    position: fixed;
    inset: 0;

    background: rgba(245,242,236,0.98);

    z-index: 2000;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    visibility: hidden;

    transition: 0.4s;
}

.search-overlay.open {
    opacity: 1;
    visibility: visible;
}

.close-search {
    position: absolute;
    top: 35px;
    right: 5vw;

    background: none;
    border: 0;

    font-size: 25px;
}

.search-box {
    width: min(700px, 85%);
}

.search-box > span {
    font-size: 11px;
    letter-spacing: 2px;
}

.search-input-wrap {
    margin-top: 20px;

    border-bottom: 1px solid var(--black);

    display: flex;
    align-items: center;
}

.search-input-wrap input {
    width: 100%;

    border: 0;
    outline: 0;
    background: transparent;

    padding: 20px 0;

    font-size: 30px;

    font-family: var(--serif);
}

.search-input-wrap button {
    border: 0;
    background: transparent;
    font-size: 20px;
}

#searchMessage {
    color: var(--grey);
    margin-top: 18px;
    font-size: 13px;
}


/* =========================================
   HERO
========================================= */

.hero {
    height: calc(100vh - 112px);
    min-height: 650px;

    position: relative;

    color: white;

    overflow: hidden;
}

.hero-image {
    position: absolute;
    inset: 0;

    background:
        url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90")
        center 30% / cover no-repeat;

    transform: scale(1.03);
    animation: heroZoom 10s ease-out forwards;
}

@keyframes heroZoom {
    from {
        transform: scale(1.08);
    }

    to {
        transform: scale(1);
    }
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(0,0,0,0.68),
            rgba(0,0,0,0.2),
            rgba(0,0,0,0.1)
        );
}

.hero-content {
    position: relative;
    z-index: 2;

    max-width: 650px;

    padding: 0 6vw;

    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.hero-content h1 {
    font-size: clamp(55px, 7vw, 105px);
    line-height: 0.95;
    font-weight: 500;

    margin: 18px 0 25px;

    letter-spacing: -3px;
}

.hero-description {
    max-width: 470px;

    line-height: 1.8;
    font-size: 14px;

    color: rgba(255,255,255,0.84);

    margin-bottom: 35px;
}

.hero-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn {
    min-height: 52px;

    padding: 0 27px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;

    transition: 0.3s;
}

.btn-light {
    background: white;
    color: black;
}

.btn-light:hover {
    background: #e9e9e9;
}

.btn-outline-light {
    border: 1px solid rgba(255,255,255,0.7);
}

.btn-outline-light:hover {
    background: white;
    color: black;
}

.hero-scroll {
    position: absolute;
    z-index: 3;

    bottom: 35px;
    right: 6vw;

    display: flex;
    align-items: center;
    gap: 15px;

    font-size: 9px;
    letter-spacing: 2px;
}

.hero-scroll div {
    width: 60px;
    height: 1px;
    background: white;
}


/* =========================================
   INTRO
========================================= */

.intro {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 80px;
    align-items: start;
}

.section-label {
    font-size: 11px;
    letter-spacing: 2px;

    display: flex;
    gap: 15px;
}

.section-label span {
    color: var(--grey);
}

.intro-content {
    max-width: 800px;
}

.intro-content h2 {
    font-family: var(--sans);
    font-weight: 400;
    font-size: clamp(40px, 5vw, 72px);
    line-height: 1.05;

    letter-spacing: -2px;
}

.intro-content p {
    max-width: 540px;

    margin: 30px 0;

    color: var(--grey);

    font-size: 15px;
    line-height: 1.8;
}

.text-link {
    font-size: 11px;
    letter-spacing: 1.5px;
    font-weight: 600;

    display: inline-flex;
    align-items: center;
    gap: 15px;

    border-bottom: 1px solid var(--black);
    padding-bottom: 8px;
}


/* =========================================
   CATEGORIES
========================================= */

.categories {
    background: var(--cream);
}

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 45px;
}

.section-heading h2,
.products-header h2 {
    font-size: clamp(40px, 5vw, 64px);
    font-weight: 400;
    line-height: 1;

    margin-top: 12px;

    letter-spacing: -2px;
}

.section-heading > p {
    max-width: 250px;
    color: var(--grey);
    font-size: 13px;
    line-height: 1.7;
}

.category-grid {
    display: grid;
    grid-template-columns: 1.35fr 1fr 1fr;
    gap: 15px;
}

.category-card {
    height: 560px;
    position: relative;
    overflow: hidden;
    color: white;
}

.category-card.large {
    height: 620px;
}

.category-card img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
}

.category-card:hover img {
    transform: scale(1.06);
}

.category-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(0,0,0,0.62),
            transparent 55%
        );
}

.category-content {
    position: absolute;

    bottom: 30px;
    left: 30px;
}

.category-content span {
    font-size: 10px;
    letter-spacing: 2px;
}

.category-content h3 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: 40px;
    margin: 5px 0;
}

.category-content p {
    font-size: 10px;
    letter-spacing: 1px;
}


/* =========================================
   PRODUCTS
========================================= */

.products-section {
    background: white;
}

.products-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 45px;
}

.filters {
    display: flex;
    gap: 25px;
}

.filter-btn {
    border: 0;
    border-bottom: 1px solid transparent;

    background: transparent;

    padding-bottom: 7px;

    font-size: 11px;
    letter-spacing: 1px;

    color: var(--grey);
}

.filter-btn.active {
    color: var(--black);
    border-color: var(--black);
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px 15px;
}

.product-card {
    min-width: 0;
}

.product-card.hidden {
    display: none;
}

.product-image {
    height: 520px;
    background: #eee;

    position: relative;
    overflow: hidden;
}

.product-image img {
    height: 100%;
    object-fit: cover;

    transition: transform 0.6s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.045);
}

.product-tag {
    position: absolute;

    top: 15px;
    left: 15px;

    background: white;

    padding: 7px 10px;

    font-size: 8px;
    letter-spacing: 1px;
}

.wishlist-product {
    position: absolute;

    top: 13px;
    right: 13px;

    width: 38px;
    height: 38px;

    border: 0;
    border-radius: 50%;

    background: rgba(255,255,255,0.9);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;
}

.wishlist-product.active {
    background: var(--black);
    color: white;
}

.quick-view {
    position: absolute;

    bottom: 0;
    left: 0;
    right: 0;

    height: 48px;

    border: 0;

    background: rgba(255,255,255,0.95);

    transform: translateY(100%);

    transition: 0.35s;

    font-size: 10px;
    letter-spacing: 1.5px;
    font-weight: 600;
}

.product-card:hover .quick-view {
    transform: translateY(0);
}

.product-info {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    padding-top: 17px;
}

.product-info h3 {
    font-size: 13px;
    font-weight: 500;
}

.product-info p {
    color: var(--grey);
    font-size: 11px;

    margin-top: 5px;
}

.product-info strong {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
}


/* =========================================
   EDITORIAL
========================================= */

.editorial {
    display: grid;
    grid-template-columns: 1.3fr 1fr;

    min-height: 700px;

    background: var(--cream);
}

.editorial-image {
    overflow: hidden;
}

.editorial-image img {
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.editorial-content {
    padding: 10vw 8vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.editorial-content h2 {
    font-size: clamp(48px, 5vw, 75px);

    line-height: 1;

    font-weight: 400;

    margin: 20px 0;
}

.editorial-content p {
    max-width: 380px;

    color: var(--grey);

    line-height: 1.8;

    font-size: 14px;

    margin-bottom: 30px;
}

.btn-dark {
    background: var(--black);
    color: white;
}

.btn-dark:hover {
    background: #333;
}


/* =========================================
   FEATURES
========================================= */

.features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    border-bottom: 1px solid var(--border);
}

.feature {
    padding: 15px 30px;

    text-align: center;

    border-right: 1px solid var(--border);
}

.feature:last-child {
    border-right: 0;
}

.feature i {
    font-size: 20px;
    margin-bottom: 20px;
}

.feature h3 {
    font-size: 13px;
    font-weight: 600;

    margin-bottom: 9px;
}

.feature p {
    color: var(--grey);
    font-size: 11px;
    line-height: 1.6;
}


/* =========================================
   NEWSLETTER
========================================= */

.newsletter {
    background: var(--black);
    color: white;

    padding: 110px 6vw;

    display: grid;
    grid-template-columns: 1fr 1fr;

    column-gap: 80px;

    position: relative;
}

.newsletter h2 {
    font-size: clamp(45px, 5vw, 70px);
    font-weight: 400;
    line-height: 1;

    margin: 18px 0;
}

.newsletter p {
    color: #999;

    font-size: 13px;
    line-height: 1.7;

    max-width: 430px;
}

.newsletter form {
    align-self: center;

    border-bottom: 1px solid #666;

    display: flex;
}

.newsletter input {
    width: 100%;

    background: transparent;
    border: 0;
    outline: 0;

    padding: 18px 0;

    color: white;

    font-size: 14px;
}

.newsletter input::placeholder {
    color: #777;
}

.newsletter button {
    background: transparent;
    color: white;

    border: 0;

    font-size: 10px;
    font-weight: 600;

    letter-spacing: 1px;

    display: flex;
    gap: 15px;
    align-items: center;
}

.newsletter-message {
    grid-column: 2;
    color: #aaa !important;

    margin-top: 15px;
}


/* =========================================
   FOOTER
========================================= */

footer {
    background: #0d0d0d;
    color: white;

    padding: 75px 6vw 25px;
}

.footer-main {
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);

    gap: 50px;

    padding-bottom: 70px;
}

.footer-logo {
    font-size: 22px;
    letter-spacing: 4px;
    font-weight: 700;
}

.footer-brand p {
    color: #777;
    font-size: 12px;
    margin: 20px 0;
}

.socials {
    display: flex;
    gap: 17px;
}

.socials a {
    color: #aaa;
    font-size: 14px;
}

.socials a:hover {
    color: white;
}

.footer-column {
    display: flex;
    flex-direction: column;
    gap: 13px;
}

.footer-column h4 {
    font-size: 10px;
    letter-spacing: 1.5px;

    margin-bottom: 10px;
}

.footer-column a {
    color: #777;
    font-size: 11px;

    transition: 0.2s;
}

.footer-column a:hover {
    color: white;
}

.footer-bottom {
    border-top: 1px solid #222;

    padding-top: 25px;

    display: flex;
    justify-content: space-between;

    color: #555;

    font-size: 10px;
}

.footer-bottom div {
    display: flex;
    gap: 25px;
}


/* =========================================
   CART
========================================= */

.cart-overlay {
    position: fixed;
    inset: 0;

    background: rgba(0,0,0,0.5);

    z-index: 3000;

    opacity: 0;
    visibility: hidden;

    transition: 0.3s;
}

.cart-overlay.open {
    opacity: 1;
    visibility: visible;
}

.cart-drawer {
    position: fixed;

    top: 0;
    right: 0;

    width: min(480px, 100%);

    height: 100vh;

    background: white;

    z-index: 3001;

    transform: translateX(100%);

    transition: 0.45s ease;

    display: flex;
    flex-direction: column;
}

.cart-drawer.open {
    transform: translateX(0);
}

.cart-header {
    padding: 28px;

    border-bottom: 1px solid var(--border);

    display: flex;
    justify-content: space-between;
}

.cart-header span {
    font-size: 9px;
    letter-spacing: 2px;
    color: var(--grey);
}

.cart-header h2 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: 27px;
    margin-top: 5px;
}

.cart-header button {
    background: transparent;
    border: 0;
    font-size: 20px;
}

.cart-items {
    flex: 1;

    overflow-y: auto;

    padding: 25px;
}

.empty-cart {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
}

.empty-cart > i {
    font-size: 35px;
    margin-bottom: 20px;
}

.empty-cart h3 {
    font-family: var(--serif);
    font-size: 25px;
    font-weight: 400;
}

.empty-cart p {
    color: var(--grey);
    font-size: 12px;
    margin: 10px 0 25px;
}

.empty-cart button {
    border: 0;
    background: var(--black);
    color: white;
    padding: 15px 25px;
    font-size: 10px;
    letter-spacing: 1px;
}

.cart-item {
    display: grid;
    grid-template-columns: 90px 1fr auto;

    gap: 15px;

    margin-bottom: 22px;
}

.cart-item img {
    height: 115px;
    object-fit: cover;
}

.cart-item h4 {
    font-size: 12px;
    font-weight: 500;
}

.cart-item p {
    color: var(--grey);
    font-size: 11px;
    margin-top: 5px;
}

.cart-item strong {
    display: block;
    font-size: 12px;
    margin-top: 12px;
}

.remove-item {
    border: 0;
    background: none;
    color: #999;
    font-size: 12px;
}

.cart-footer {
    padding: 25px;

    border-top: 1px solid var(--border);
}

.subtotal {
    display: flex;
    justify-content: space-between;
}

.subtotal span {
    font-size: 12px;
}

.subtotal strong {
    font-size: 14px;
}

.cart-footer > p {
    color: var(--grey);
    font-size: 10px;
    margin: 8px 0 20px;
}

.checkout-btn {
    width: 100%;

    border: 0;

    background: var(--black);
    color: white;

    height: 52px;

    font-size: 10px;
    letter-spacing: 1px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}


/* =========================================
   QUICK VIEW
========================================= */

.modal-overlay {
    position: fixed;
    inset: 0;

    background: rgba(0,0,0,0.65);

    z-index: 4000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 25px;

    opacity: 0;
    visibility: hidden;

    transition: 0.3s;
}

.modal-overlay.open {
    opacity: 1;
    visibility: visible;
}

.quick-modal {
    width: min(900px, 100%);

    max-height: 90vh;

    overflow: auto;

    background: white;

    display: grid;
    grid-template-columns: 1fr 1fr;

    position: relative;
}

.modal-close {
    position: absolute;

    top: 18px;
    right: 18px;

    z-index: 5;

    border: 0;

    background: white;

    width: 38px;
    height: 38px;

    border-radius: 50%;
}

.quick-image {
    min-height: 600px;
}

.quick-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.quick-info {
    padding: 70px 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.quick-info h2 {
    font-family: var(--serif);
    font-size: 42px;
    font-weight: 400;

    margin: 15px 0;
}

.quick-info > strong {
    font-size: 17px;
}

.quick-info > p {
    color: var(--grey);

    font-size: 13px;
    line-height: 1.8;

    margin: 25px 0;
}

.size-title {
    font-size: 9px;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-bottom: 12px;
}

.sizes {
    display: flex;
    gap: 8px;
}

.sizes button {
    width: 45px;
    height: 40px;

    background: white;

    border: 1px solid var(--border);

    font-size: 11px;
}

.sizes button.active {
    background: black;
    color: white;
}

.modal-add {
    margin-top: 25px;

    height: 55px;

    background: black;
    color: white;

    border: 0;

    font-size: 10px;
    letter-spacing: 1px;
}


/* =========================================
   TOAST
========================================= */

.toast {
    position: fixed;

    bottom: 30px;
    left: 50%;

    transform: translate(-50%, 120px);

    background: var(--black);
    color: white;

    padding: 14px 20px;

    display: flex;
    gap: 12px;
    align-items: center;

    font-size: 11px;

    z-index: 5000;

    opacity: 0;

    transition: 0.4s;
}

.toast.show {
    opacity: 1;
    transform: translate(-50%, 0);
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1100px) {

    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .product-card:nth-child(8) {
        display: none;
    }

    .category-card {
        height: 480px;
    }

    .category-card.large {
        height: 540px;
    }

}


@media (max-width: 800px) {

    .section {
        padding: 75px 5vw;
    }

    .desktop-nav,
    .desktop-only {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .navbar {
        grid-template-columns: 1fr auto 1fr;
        padding: 0 5vw;
    }

    .nav-actions {
        gap: 14px;
    }

    .hero {
        min-height: 650px;
    }

    .hero-content {
        padding: 0 7vw;
    }

    .hero-content h1 {
        font-size: 64px;
    }

    .hero-scroll {
        display: none;
    }

    .intro {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .category-grid {
        grid-template-columns: 1fr 1fr;
    }

    .category-card,
    .category-card.large {
        height: 480px;
    }

    .category-card:first-child {
        grid-column: 1 / -1;
    }

    .products-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }

    .filters {
        width: 100%;
        overflow-x: auto;
        padding-bottom: 8px;
    }

    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .product-image {
        height: 480px;
    }

    .editorial {
        grid-template-columns: 1fr;
    }

    .editorial-image {
        height: 550px;
    }

    .editorial-content {
        padding: 80px 7vw;
    }

    .features {
        grid-template-columns: 1fr 1fr;
    }

    .feature {
        border-bottom: 1px solid var(--border);
        padding: 30px 15px;
    }

    .newsletter {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .newsletter-message {
        grid-column: auto;
    }

    .footer-main {
        grid-template-columns: 1fr 1fr;
    }

    .footer-brand {
        grid-column: 1 / -1;
    }

    .quick-modal {
        grid-template-columns: 1fr;
    }

    .quick-image {
        height: 400px;
        min-height: auto;
    }

    .quick-info {
        padding: 40px;
    }

}


@media (max-width: 550px) {

    .top-bar p {
        font-size: 8px;
    }

    .navbar {
        height: 68px;
    }

    .logo {
        font-size: 17px;
        letter-spacing: 3px;
    }

    .nav-actions {
        gap: 10px;
    }

    .icon-btn {
        font-size: 13px;
    }

    .hero {
        height: 700px;
        min-height: 0;
    }

    .hero-image {
        background-position: 62% center;
    }

    .hero-content h1 {
        font-size: 53px;
        letter-spacing: -2px;
    }

    .hero-description {
        font-size: 12px;
    }

    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }

    .btn {
        width: 100%;
    }

    .section-heading {
        display: block;
    }

    .section-heading > p {
        margin-top: 20px;
    }

    .category-grid {
        grid-template-columns: 1fr;
    }

    .category-card:first-child {
        grid-column: auto;
    }

    .category-card,
    .category-card.large {
        height: 500px;
    }

    .product-grid {
        grid-template-columns: 1fr 1fr;
        gap: 30px 10px;
    }

    .product-image {
        height: 330px;
    }

    .product-info {
        display: block;
    }

    .product-info strong {
        display: block;
        margin-top: 8px;
    }

    .quick-view {
        display: none;
    }

    .product-info h3 {
        font-size: 11px;
    }

    .product-info p {
        font-size: 9px;
    }

    .editorial-image {
        height: 450px;
    }

    .features {
        grid-template-columns: 1fr;
    }

    .feature {
        border-right: 0;
    }

    .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 35px 20px;
    }

    .footer-brand {
        grid-column: 1 / -1;
    }

    .footer-bottom {
        display: block;
        line-height: 2;
    }

    .footer-bottom div {
        margin-top: 8px;
    }

    .quick-info {
        padding: 30px;
    }

    .quick-info h2 {
        font-size: 34px;
    }

}
