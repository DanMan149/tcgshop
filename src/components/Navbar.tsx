"use client";
import { useCart } from "@/lib/CartContext";

export default function Navbar() {
  const { count, setIsOpen } = useCart();

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
  <img src="/favicon.svg" alt="PrintedTCG Labs" className="navbar-logo-img" />
  <span className="logo-text">PrintedTCG Labs</span>
</a>
      <div className="navbar-links">
        <a href="#products">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button
        className="cart-btn"
        onClick={() => setIsOpen(true)}
        aria-label={`Open cart, ${count} items`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        {count > 0 && <span className="cart-badge">{count}</span>}
      </button>
    </nav>
  );
}
