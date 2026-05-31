import { useState } from "react";
import { Arrow, Check, PH, SectionHead, WaveDivider } from "./shared.jsx";

export default function Services({ services, onBook }) {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section className="dc-section dc-section-light dc-section-with-wave" id="services">
      <WaveDivider from="#FFD23F" variant="soft" height={80} />
      <div className="dc-wrap">
        <SectionHead
          eyebrow="Що ми робимо"
          title={
            <>
              Три послуги, одна <em>філософія</em>: поважати тварину
            </>
          }
          subtitle="Оберіть напрям — і подивіться, як виглядає наш підхід зсередини."
        />
        <div className="dc-tabs">
          {services.map((it, i) => (
            <button
              key={it.id}
              className={"dc-tab" + (i === active ? " active" : "")}
              onClick={() => setActive(i)}
            >
              <span className="dc-tab-icon">{it.icon}</span>
              {it.tab}
            </button>
          ))}
        </div>
        <div className="dc-service-panel">
          <div className="dc-service-photo">
            <div className="dc-service-photo-frame">
              <PH label={s.photo} src={s.src} />
            </div>
          </div>
          <div className="dc-service-content">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul className="dc-service-features">
              {s.features.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <div className="dc-service-price">
              <span className="dc-service-price-from">від</span>
              <span className="dc-service-price-num">{s.price}</span>
              <span className="dc-service-price-unit">{s.unit}</span>
            </div>
            <a
              href="#contact"
              className="dc-btn dc-btn-primary"
              onClick={(e) => {
                e.preventDefault();
                onBook();
              }}
            >
              Записатися{" "}
              <span className="dc-btn-arrow">
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
