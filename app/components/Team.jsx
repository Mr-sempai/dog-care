import { useEffect, useRef, useState } from "react";
import { Arrow, Check, Heart, PawScatter, PH, SectionHead } from "./shared.jsx";

function TrainerModal({ trainer, onClose, onBook }) {
  useEffect(() => {
    if (!trainer) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [trainer, onClose]);

  if (!trainer) return null;
  const t = trainer;

  return (
    <div className="dc-modal-overlay" onClick={onClose}>
      <div className="dc-modal" onClick={(e) => e.stopPropagation()}>
        <button className="dc-modal-close" onClick={onClose} aria-label="Закрити">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="dc-modal-photo">
          <PH label={t.photo} src={t.src} />
          <div className="dc-modal-photo-tag">
            <Heart size={12} /> {t.badge}
          </div>
        </div>
        <div className="dc-modal-body">
          <div className="dc-eyebrow-text" style={{ marginBottom: 8 }}>
            {t.role}
          </div>
          <h3 className="dc-modal-name">{t.name}</h3>
          <p className="dc-modal-bio">{t.bio}</p>

          <div className="dc-modal-stats">
            <div>
              <div className="dc-modal-stat-num">{t.stats.years}</div>
              <div className="dc-modal-stat-label">років досвіду</div>
            </div>
            <div>
              <div className="dc-modal-stat-num">{t.stats.dogs}+</div>
              <div className="dc-modal-stat-label">собак випущено</div>
            </div>
            <div>
              <div className="dc-modal-stat-num">{t.stats.satisf}</div>
              <div className="dc-modal-stat-label">вдоволення</div>
            </div>
          </div>

          <div className="dc-modal-quote">
            <span className="dc-modal-quote-mark">“</span>
            {t.quote}
          </div>

          <div className="dc-modal-section">
            <h4>Спеціалізація</h4>
            <div className="dc-modal-chips">
              {t.skills.map((s) => (
                <span key={s} className="dc-modal-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="dc-modal-section">
            <h4>Освіта і сертифікати</h4>
            <ul className="dc-modal-list">
              {t.education.map((e) => (
                <li key={e}>
                  <Check />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="dc-modal-row">
            <div className="dc-modal-section" style={{ flex: 1 }}>
              <h4>Улюблена порода</h4>
              <div style={{ fontWeight: 600 }}>{t.favorite}</div>
            </div>
            <div className="dc-modal-section" style={{ flex: 1 }}>
              <h4>Мови</h4>
              <div style={{ fontWeight: 600 }}>{t.languages.join(" · ")}</div>
            </div>
          </div>

          <div className="dc-modal-cta">
            <a
              href="#contact"
              className="dc-btn dc-btn-primary"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onBook();
              }}
            >
              Записатися до {t.name.split(" ")[0]}{" "}
              <span className="dc-btn-arrow">
                <Arrow />
              </span>
            </a>
            <button className="dc-btn dc-btn-ghost" onClick={onClose}>
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team({ trainers, onBook }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [slide, setSlide] = useState(0);
  const trackRef = useRef(null);

  const [perView, setPerView] = useState(3);

  useEffect(() => {
    function onResize() {
      const pv = window.innerWidth < 900 ? 2 : 3;
      setPerView(prev => { if (prev !== pv) setSlide(0); return pv; });
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = trainers.length;
  const canLoop = total > perView;
  const items = canLoop ? [...trainers, ...trainers] : trainers;

  useEffect(() => {
    const track = trackRef.current;
    if (!track?.children[0]) return;
    const cardW = track.children[0].offsetWidth + 22;
    track.style.transform = `translateX(-${slide * cardW}px)`;
  }, [slide, perView]);

  useEffect(() => {
    if (!canLoop) return;
    const track = trackRef.current;
    if (!track) return;
    function onEnd(e) {
      if (e.target !== track || e.propertyName !== 'transform') return;
      if (slide < total) return;
      const cardW = track.children[0].offsetWidth + 22;
      const next = slide - total;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${next * cardW}px)`;
      void track.offsetHeight;
      track.style.transition = '';
      setSlide(next);
    }
    track.addEventListener('transitionend', onEnd);
    return () => track.removeEventListener('transitionend', onEnd);
  }, [slide, total, canLoop]);

  useEffect(() => {
    if (!canLoop) return;
    const id = setInterval(() => setSlide(s => s + 1), 4000);
    return () => clearInterval(id);
  }, [canLoop]);

  return (
    <section className="dc-section dc-section-yellow" id="team">
      <PawScatter count={5} color="rgba(26, 24, 20, 0.06)" />
      <div className="dc-wrap" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead
          eyebrow="Команда"
          title={
            <>
              Люди, до яких ви охоче залишите <em>найдорожче</em>
            </>
          }
          subtitle="Кожен наш фахівець — це сертифікація, профільна освіта і десятки годин стажування на рік."
        />
        <div className="dc-team-slider-wrap">
          <div className="dc-team-track" ref={trackRef}>
          {items.map((t, i) => (
            <button
              key={`${t.name}-${i}`}
              className="dc-trainer dc-trainer-slide"
              onClick={() => setOpenIdx(i % total)}
              style={{ textAlign: "left", cursor: "pointer" }}
            >
              <div className="dc-trainer-photo">
                <PH label={t.photo} src={t.src} />
                <div className="dc-trainer-badge">
                  <Heart size={11} /> {t.badge}
                </div>
              </div>
              <h4 className="dc-trainer-name">{t.name}</h4>
              <p className="dc-trainer-role">
                {t.role} · {t.spec}
              </p>
              <div className="dc-trainer-foot">
                <span className="dc-trainer-stars">★★★★★</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  відкрити <Arrow size={11} />
                </span>
              </div>
            </button>
          ))}
          </div>
        </div>

        {canLoop && (
          <div className="dc-slider-nav">
            <button className="dc-slider-btn" onClick={() => {
              const track = trackRef.current;
              if (!track?.children[0]) return;
              if (slide > 0) { setSlide(s => s - 1); return; }
              const cardW = track.children[0].offsetWidth + 22;
              track.style.transition = 'none';
              track.style.transform = `translateX(-${total * cardW}px)`;
              void track.offsetHeight;
              track.style.transition = '';
              setSlide(total - 1);
            }}>‹</button>
            <div className="dc-slider-dots">
              {trainers.map((_, i) => (
                <button key={i}
                  className={`dc-slider-dot${(slide % total) === i ? " active" : ""}`}
                  onClick={() => setSlide(i)} />
              ))}
            </div>
            <button className="dc-slider-btn" onClick={() => setSlide(s => s + 1)}>›</button>
          </div>
        )}
      </div>
      <TrainerModal
        trainer={openIdx !== null ? trainers[openIdx] : null}
        onClose={() => setOpenIdx(null)}
        onBook={onBook}
      />
    </section>
  );
}
