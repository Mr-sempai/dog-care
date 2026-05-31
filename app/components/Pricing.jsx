import { useState } from "react";
import { Arrow, Check, SectionHead, WaveDivider } from "./shared.jsx";

function PriceTable({ rows }) {
  return (
    <div className="dc-pricetable">
      {rows.map((r, i) => (
        <div key={i} className="dc-pricerow">
          <div className="dc-pricerow-service">
            <div className="dc-pricerow-name">{r.service}</div>
            {r.duration && <div className="dc-pricerow-dur">{r.duration}</div>}
          </div>
          <div className="dc-pricerow-price">
            {r.price}
            {r.note && <span className="dc-pricerow-note">{r.note}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

function PriceGroupCard({ group, hotelTab, setHotelTab }) {
  return (
    <div className={"dc-pricegroup" + (group.id === "hotel" ? " dc-pricegroup-wide" : "")}>
      <div className="dc-pricegroup-head">
        <div className="dc-pricegroup-icon">{group.icon}</div>
        <div>
          <h3 className="dc-pricegroup-title">{group.label}</h3>
          <p className="dc-pricegroup-desc">{group.desc}</p>
        </div>
      </div>

      {group.weightTabs ? (
        <>
          <div className="dc-weighttabs">
            {group.weightTabs.map((w, i) => (
              <button
                key={w.label}
                className={"dc-weighttab" + (hotelTab === i ? " active" : "")}
                onClick={() => setHotelTab(i)}
              >
                {w.label}
              </button>
            ))}
          </div>
          <PriceTable rows={group.weightTabs[hotelTab].rows} />
        </>
      ) : (
        <PriceTable rows={group.rows} />
      )}

      {group.includes && (
        <div className="dc-pricegroup-includes">
          <div className="dc-pricegroup-includes-head">Що входить:</div>
          <ul>
            {group.includes.map((f) => (
              <li key={f}>
                <Check />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {group.footnote && (
        <div className="dc-pricegroup-footnote">
          <span className="dc-pricegroup-footnote-mark">★</span> {group.footnote}
        </div>
      )}
    </div>
  );
}

export default function Pricing({ pricing, onBook }) {
  const [hotelTab, setHotelTab] = useState(0);

  return (
    <section className="dc-section dc-section-white dc-section-with-wave" id="pricing">
      <WaveDivider from="#FFD23F" variant="pebble" height={80} />
      <div className="dc-wrap">
        <SectionHead
          eyebrow="Прайс — Dog Care"
          title={
            <>
              Прозорі ціни <em>без сюрпризів</em> у чеку
            </>
          }
          subtitle="Школа, зооготель та грумінг у Івано‑Франківську. Для діючих учнів школи тренування — безкоштовні."
        />
        <div className="dc-pricegrid">
          {pricing.map((g) => (
            <PriceGroupCard key={g.id} group={g} hotelTab={hotelTab} setHotelTab={setHotelTab} />
          ))}
        </div>
        <div className="dc-pricing-cta">
          <div>
            <h4>Залишились запитання?</h4>
            <p>Отримайте безкоштовну консультацію від спеціаліста.</p>
          </div>
          <a
            href="#contact"
            className="dc-btn dc-btn-primary"
            onClick={(e) => {
              e.preventDefault();
              onBook();
            }}
          >
            Залишити заявку{" "}
            <span className="dc-btn-arrow">
              <Arrow />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
