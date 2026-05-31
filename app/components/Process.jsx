import { PawScatter, PH, SectionHead, WaveDivider } from "./shared.jsx";
import { PROCESS_STEPS } from "../data/services.js";

export default function Process() {
  return (
    <section className="dc-process dc-section-with-wave" id="process">
      <WaveDivider from="#FFFEF7" variant="double" height={80} />
      <PawScatter count={6} color="rgba(26, 24, 20, 0.07)" />
      <div className="dc-wrap" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead
          eyebrow="Як ми працюємо"
          title={
            <>
              Шість кроків від першого знайомства до <em>випускного</em>
            </>
          }
          align="center"
        />
        <div className="dc-process-stage">
          {PROCESS_STEPS.map((p, i) => (
            <div key={p.step} className={`dc-bubble dc-bubble-${i + 1}`}>
              <div className="dc-bubble-icon">{p.icon}</div>
              <div className="dc-bubble-text">
                <div className="dc-bubble-step">Крок {p.step}</div>
                <div className="dc-bubble-title">{p.title}</div>
              </div>
            </div>
          ))}
          <div className="dc-process-center">
            <PH
              label="happy dog"
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
