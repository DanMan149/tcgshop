"use client";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/lib/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    if (product.comingSoon || product.price === null) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const formatPrice = (p: number | null) =>
    p === null ? "Coming Soon" : `Rs. ${p.toLocaleString("en-PK")}`;

  const showImage = product.image && !imgError;

  return (
    <div className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}

      <div className="product-preview">
        {showImage ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="product-emoji">{product.emoji}</div>
        )}
        <div className="filament-lines">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="filament-line" style={{ animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button
            className={`add-btn ${added ? "added" : ""} ${product.comingSoon ? "disabled" : ""}`}
            onClick={handleAdd}
            disabled={product.comingSoon}
          >
            {product.comingSoon ? "Coming Soon" : added ? "✓ Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}