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
  <a href="https://wa.me/9231560713" className="contact-chip" target="_blank" rel="noopener noreferrer">
    <svg className="chip-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-1.747-.673-3.014-1.798-3.949-3.477-.197-.357.196-.330.609-1.094.07-.135.034-.252-.034-.387-.07-.135-.487-1.165-.685-1.6-.197-.435-.4-.376-.567-.382-.156-.005-.345-.005-.534-.005-.187 0-.49.07-.745.327-.255.255-.99.967-.99 2.353 0 1.388 1.01 2.733 1.146 2.921.135.187 1.937 2.948 4.692 4.025 2.348.93 2.829.748 3.342.701.512-.045 1.654-.677 1.886-1.331.232-.652.232-1.213.163-1.331-.07-.114-.255-.182-.534-.31z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.522 5.847L0 24l6.305-1.654A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.951a9.93 9.93 0 01-5.085-1.394l-.364-.218-3.74.981.998-3.648-.237-.374A9.957 9.957 0 012.049 12C2.049 6.51 6.51 2.049 12 2.049S21.951 6.51 21.951 12 17.49 21.951 12 21.951z"/>
    </svg>
    +92 315 8560713
  </a>
  <a href="https://instagram.com/printedtcglabs" className="contact-chip" target="_blank" rel="noopener noreferrer">
    <svg className="chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
    @printedtcglabs
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
