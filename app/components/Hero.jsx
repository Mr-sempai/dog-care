import { Arrow, Heart, PawPrint, PawScatter } from "./shared.jsx";

export default function Hero({ onBook, onSeeServices }) {
  return (
    <section className="dc-hero">
      <div className="dc-wrap">
        <div className="dc-hero-card">
          <PawScatter count={6} color="rgba(245, 184, 46, 0.18)" />
          <div className="dc-hero-grid" style={{ position: "relative", zIndex: 1 }}>
            <div>
              <div className="dc-eyebrow">
                <span className="dc-eyebrow-dot">
                  <Heart size={11} />
                </span>
                Школа №1 у Івано‑Франківську
              </div>
              <h1 className="dc-h1">
                Виховуємо щасливих <em>хвостиків</em>
                <br />і спокійних господарів
              </h1>
              <p className="dc-hero-sub">
                Школа тренувань, зооготель, грумінг та зоомагазин. Допомагаємо виховати із вашого цуценяти чи собаки
                справжнього друга та захисника.
              </p>
              <div className="dc-hero-ctas">
                <button className="dc-btn dc-btn-primary" onClick={onBook}>
                  Записати на заняття{" "}
                  <span className="dc-btn-arrow">
                    <Arrow />
                  </span>
                </button>
                <a
                  href="#services"
                  className="dc-btn dc-btn-ghost"
                  onClick={(e) => {
                    e.preventDefault();
                    onSeeServices();
                  }}
                >
                  Наші послуги
                </a>
              </div>
              <div className="dc-hero-stats">
                <div>
                  <div className="dc-stat-num">300+</div>
                  <div className="dc-stat-label">вивчених собак</div>
                </div>
                <div>
                  <div className="dc-stat-num">10 років</div>
                  <div className="dc-stat-label">досвіду</div>
                </div>
                <div>
                  <div className="dc-stat-num">24/7</div>
                  <div className="dc-stat-label">підтримка</div>
                </div>
              </div>
            </div>
            <div className="dc-hero-photo">
              <div className="dc-hero-photo-circle"></div>
              <div className="dc-hero-slot">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=85"
                  alt="Щасливий пес"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="dc-photo-tag dc-photo-tag-1">
                <span className="dc-photo-tag-emoji">
                  <PawPrint size={14} />
                </span>
                Усі породи
              </div>
              <div className="dc-photo-tag dc-photo-tag-2">
                <span className="dc-photo-tag-emoji">
                  <Heart size={12} />
                </span>
                Без стресу
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
