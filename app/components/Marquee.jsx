import { PawPrint } from "./shared.jsx";

const ITEMS = ["Кінологія", "Грумінг", "Зоо‑готель", "Соціалізація", "Догляд", "З любов'ю", "Без стресу"];

function Line() {
  return (
    <span>
      {ITEMS.map((w, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 56 }}>
          {w}
          <PawPrint size={22} color="#FFD23F" />
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="dc-marquee">
      <div className="dc-marquee-track">
        <Line />
        <Line />
      </div>
    </div>
  );
}
