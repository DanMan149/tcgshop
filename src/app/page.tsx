import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-content">
          <div className="hero-eyebrow">⬡ Printed in Pakistan</div>
          <h1 className="hero-headline">
            Level up your<br />
            <span className="hero-accent">TCG setup.</span>
          </h1>
          <p className="hero-sub">
            3D printed Pokemon card accessories built for collectors and competitors.
            Every piece printed to order in PLA+.
          </p>
          <a href="#products" className="btn-primary hero-cta">
            Shop accessories
          </a>
        </div>
        <div className="hero-visual">
          <div className="pokeball-rings">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="pokeball-center">⬡</div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="stats-bar">
        <div className="stat"><strong>100%</strong><span>PLA+ filament</span></div>
        <div className="stat-divider" />
        <div className="stat"><strong>6–8 days</strong><span>print & delivery</span></div>
        <div className="stat-divider" />
        <div className="stat"><strong>Custom</strong><span>orders welcome</span></div>
      </div>

      {/* Products */}
      <section className="products-section" id="products">
        <div className="section-header">
          <h2>All products</h2>
          <p>Pick your choice, place your order. We'll print and ship.</p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="category-group">
            <h3 className="category-title">{cat}</h3>
            <div className="product-grid">
              {products
                .filter((p) => p.category === cat)
                .map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </div>
        ))}
      </section>

<section className="about-section" id="about">
  <div className="about-inner">
    <div className="about-text">
      <div className="section-eyebrow">About PrintedTCG Labs</div>
      <h2>Built by players, for players.</h2>
      <p>
        We started PrintedTCG Labs because the accessories available didn't match our standards. Every design is tested before it ships to you.
      </p>
      <p>
        All products are printed on-demand in Karachi, Pakistan using premium PLA+ filament. If you need a custom color or modification, just reach out.
      </p>
      <div className="about-grid">
        {["FDM printed", "PLA+ filament"].map((fact) => (
          <div key={fact} className="about-fact">
            <span className="fact-dot" />
            {fact}
          </div>
        ))}
      </div>
    </div>
    <div className="about-image">
      <img src="/about/about-photo.jpg" alt="3D printing in progress" />
    </div>
  </div>
</section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <h2>Custom order or question?</h2>
        <p>We can print custom colorways, sizes, and designs. Drop us a message.</p>
        <div className="contact-links">
          <a href="https://wa.me/923158560713" className="contact-chip" target="_blank" rel="noopener noreferrer">
            💬 +92 315 8560713
          </a>
          <a href="https://instagram.com/printedtcglabs" className="contact-chip" target="_blank" rel="noopener noreferrer">
            📸 @printedtcglabs
        </a>
      </div>
      </section>

      <footer className="site-footer">
        <span>⬡ PrintedTCG Labs Pakistan — {new Date().getFullYear()}</span>
        <span>Pokémon is a trademark of Nintendo/Game Freak. We are not affiliated.</span>
      </footer>
    </main>
  );
}
