"use client";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";

interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();
  const [step, setStep] = useState<"cart" | "details" | "confirmation">("cart");
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

  const formatPrice = (p: number) => `Rs. ${p.toLocaleString("en-PK")}`;

  const validate = () => {
    const newErrors: Partial<CustomerInfo> = {};
    if (!customer.name.trim()) newErrors.name = "Required";
    if (!customer.phone.trim()) newErrors.phone = "Required";
    else if (!/^[0-9+\-\s]{7,}$/.test(customer.phone)) newErrors.phone = "Enter a valid phone number";
    if (!customer.address.trim()) newErrors.address = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
  setStep("details");
};

  const handleConfirmOrder = () => {
    if (!validate()) return;

    // Send order details to yourself via WhatsApp
    const orderLines = items
      .map((i) => `• ${i.product.name} x${i.quantity} — ${formatPrice((i.product.price ?? 0) * i.quantity)}`)
      .join("\n");
    const message = `New Order:\n\nName: ${customer.name}\nPhone: ${customer.phone}\nAddress: ${customer.address}\nNotes: ${customer.notes || "—"}\n\nItems:\n${orderLines}\n\nTotal: ${formatPrice(total)}`;
    const whatsappUrl = `https://wa.me/923158560713?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setStep("confirmation");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDone = () => {
    clearCart();
    setCustomer({ name: "", phone: "", address: "", notes: "" });
    setStep("cart");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={handleClose} />
      <aside className="cart-drawer">
        <div className="drawer-header">
          <h2>
            {step === "cart" && "Your Cart"}
            {step === "details" && "Your Details"}
            {step === "confirmation" && "Order Placed"}
          </h2>
          <button className="drawer-close" onClick={handleClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {step === "cart" && items.length === 0 && (
          <div className="drawer-empty">
            <span className="empty-icon">🗃️</span>
            <p>Your cart is empty.</p>
            <button className="btn-ghost" onClick={handleClose}>Browse products</button>
          </div>
        )}

        {step === "cart" && items.length > 0 && (
          <>
            <div className="drawer-items">
              {items.map((item) => (
                <div key={item.product.id} className="drawer-item">
                  <div className="item-emoji">{item.product.emoji}</div>
                  <div className="item-info">
                    <div className="item-name">{item.product.name}</div>
                    <div className="item-price">{formatPrice(item.product.price ?? 0)}</div>
                  </div>
                  <div className="item-qty">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                  </div>
                  <button
                    className="item-remove"
                    onClick={() => removeItem(item.product.id)}
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="drawer-footer">
              <div className="drawer-total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <button className="btn-primary full-width" onClick={handleContinue}>
                Continue to Checkout
              </button>
            </div>
          </>
        )}

        {step === "details" && (
          <>
            <div className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="e.g. Ali Hassan"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="e.g. 0318-5607130"
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Delivery Address</label>
                <textarea
                  id="address"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="House #, street, area, city"
                  rows={3}
                  className={errors.address ? "input-error" : ""}
                />
                {errors.address && <span className="field-error">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="notes">Order Notes (optional)</label>
                <textarea
                  id="notes"
                  value={customer.notes}
                  onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  placeholder="Color preference, gift note, etc."
                  rows={2}
                />
              </div>
            </div>

            <div className="drawer-footer">
              <div className="drawer-total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <button className="btn-primary full-width" onClick={handleConfirmOrder}>
                Confirm Order
              </button>
              <button className="btn-ghost full-width" onClick={() => setStep("cart")}>
                Back to Cart
              </button>
            </div>
          </>
        )}

        {step === "confirmation" && (
          <div className="drawer-confirmation">
            <span className="confirm-icon">✅</span>
            <h3>Order received, {customer.name.split(" ")[0]}!</h3>
            <p>We've opened WhatsApp with your order details — please send the message so we can confirm it.</p>
            <p>Once confirmed, transfer <strong>{formatPrice(total)}</strong> to:</p>
            <div className="bank-details">
              <div className="bank-row"><span>Bank</span><strong>Mashreq Bank Pakistan</strong></div>
              <div className="bank-row"><span>Account Name</span><strong>Syed Danish Hasan</strong></div>
              <div className="bank-row"><span>Account No.</span><strong>089010000321</strong></div>
              <div className="bank-row"><span>IBAN</span><strong>PK38MSHQ00000089010000321</strong></div>
            </div>
            <p className="confirm-note">Send your payment screenshot on WhatsApp at 0315-8560713 and we'll confirm your order within 12-24 hours.</p>
            <button className="btn-primary" onClick={handleDone}>
              Done
            </button>
          </div>
        )}
      </aside>
    </>
  );
}