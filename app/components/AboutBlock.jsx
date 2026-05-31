import { Heart, PawPrint, PH } from "./shared.jsx";

export default function AboutBlock() {
  return (
    <section className="dc-section" id="about" style={{ paddingTop: 100, paddingBottom: 0 }}>
      <div className="dc-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div className="dc-eyebrow-text">Про школу</div>
            <h2 className="dc-h2">
              Школа №1 у Івано‑Франківську з{" "}
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
                командою
              </em>{" "}
              професіоналів
            </h2>
            <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: 540, marginTop: 24, marginBottom: 32 }}>
              Наша місія — допомогти тобі виховати із свого цуценяти чи собаки справжнього друга та захисника. Навчаємо
              будувати стосунки без криків, стресу та страху.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <AboutBullet icon={<Heart size={18} />} title="Без криків і стресу" sub="Довіра замість муштри" />
              <AboutBullet icon={<PawPrint size={18} />} title="Індивідуальний підхід" sub="До кожного вихованця" />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ aspectRatio: "3/4", borderRadius: 28, overflow: "hidden", marginTop: 32 }}>
              <PH
                label="dogs in class"
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  aspectRatio: "1/1",
                  borderRadius: 28,
                  overflow: "hidden",
                  background: "var(--yellow)",
                  display: "grid",
                  placeItems: "center",
                  padding: 24,
                  textAlign: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 44,
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    300+
                  </div>
                  <div style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>вивчених собак</div>
                </div>
              </div>
              <div style={{ aspectRatio: "1/1", borderRadius: 28, overflow: "hidden" }}>
                <PH
                  label="grooming station"
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBullet({ icon, title, sub }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "var(--yellow)",
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
        <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{sub}</div>
      </div>
    </div>
  );
}
