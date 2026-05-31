import { Arrow, PH, WaveDivider } from "./shared.jsx";

const PRODUCTS = [
  {
    name: "Натуральний корм",
    desc: "Royal Canin, Brit, Acana",
    price: "від 320 ₴",
    icon: "🥩",
    src: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&q=80",
  },
  {
    name: "Іграшки та канати",
    desc: "Безпечні, для жування",
    price: "від 89 ₴",
    icon: "🦴",
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
  },
  {
    name: "Лежаки та будиночки",
    desc: "Усі розміри, від щенят до сенбернарів",
    price: "від 750 ₴",
    icon: "🏠",
    src: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=600&q=80",
  },
  {
    name: "Аксесуари",
    desc: "Повідки, нашийники, переноски",
    price: "від 150 ₴",
    icon: "🎒",
    src: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=600&q=80",
  },
];

export default function Zoomarket({ onBook }) {
  return (
    <section className="dc-section dc-section-light dc-section-with-wave" id="zoomarket">
      <WaveDivider from="#FFFFFF" variant="arch" height={100} />
      <div className="dc-wrap">
        <div className="dc-zoomarket-hero">
          <div>
            <div className="dc-eyebrow-text">Зоомагазин</div>
            <h2 className="dc-h2">
              Потіш свого{" "}
              <em
                style={{
                  background: "var(--yellow)",
                  padding: "0 14px",
                  borderRadius: 18,
                  fontStyle: "normal",
                  display: "inline-block",
                  transform: "rotate(-1deg)",
                }}
              >
                улюбленця
              </em>
              <br />
              смачненьким!
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 16, maxWidth: 480, marginTop: 20, marginBottom: 28 }}>
              Корми преміум‑класу, іграшки, аксесуари та все необхідне для щасливої собаки. Працюємо за адресою школи у
              Івано‑Франківську.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="#contact"
                className="dc-btn dc-btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  onBook();
                }}
              >
                До магазину{" "}
                <span className="dc-btn-arrow">
                  <Arrow />
                </span>
              </a>
              <a
                href="#contact"
                className="dc-btn dc-btn-ghost"
                onClick={(e) => {
                  e.preventDefault();
                  onBook();
                }}
              >
                Замовити консультацію
              </a>
            </div>
          </div>
          <div className="dc-zoomarket-mosaic">
            <div className="dc-zoomarket-mosaic-photo">
              <PH
                label="dog with treats"
                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80"
              />
            </div>
            <div className="dc-zoomarket-mosaic-card">
              <div className="dc-zoomarket-mosaic-num">500+</div>
              <div className="dc-zoomarket-mosaic-label">
                товарів
                <br />у наявності
              </div>
            </div>
          </div>
        </div>

        <div className="dc-zoomarket-grid">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="dc-zoomarket-card">
              <div className="dc-zoomarket-card-photo">
                <PH label={p.name} src={p.src} />
                <div className="dc-zoomarket-card-icon">{p.icon}</div>
              </div>
              <div className="dc-zoomarket-card-body">
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <div className="dc-zoomarket-card-foot">
                  <span className="dc-zoomarket-card-price">{p.price}</span>
                  <span className="dc-zoomarket-card-arrow">
                    <Arrow size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
