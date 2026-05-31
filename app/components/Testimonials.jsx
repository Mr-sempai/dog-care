import { SectionHead } from "./shared.jsx";
import { TESTI } from "../data/services.js";

export default function Testimonials() {
  return (
    <section className="dc-section dc-section-light">
      <div className="dc-wrap">
        <SectionHead
          eyebrow="Відгуки"
          title={
            <>
              Що кажуть наші <em>випускники</em> та їхні люди
            </>
          }
          subtitle="Більше 480 відгуків з оцінкою 5/5 на Google і Facebook."
        />
        <div className="dc-testi-row">
          {TESTI.map((t, i) => (
            <div key={i} className="dc-testi">
              <div className="dc-testi-stars">★★★★★</div>
              <p className="dc-testi-quote">«{t.quote}»</p>
              <div className="dc-testi-author">
                <div className="dc-testi-avatar">{t.initials}</div>
                <div>
                  <div className="dc-testi-name">{t.name}</div>
                  <div className="dc-testi-pet">{t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
