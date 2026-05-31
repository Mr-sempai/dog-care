import { Arrow } from "./shared.jsx";

export default function BookingWidget({ value, setValue, onSubmit }) {
  return (
    <div className="dc-wrap dc-booking">
      <div className="dc-booking-card">
        <label className="dc-field">
          <span className="dc-field-label">Послуга</span>
          <select value={value.service} onChange={(e) => setValue({ ...value, service: e.target.value })}>
            <option>Тренування у школі</option>
            <option>Тренування на виїзд</option>
            <option>Грумінг</option>
            <option>Зооготель</option>
            <option>Зооняня (вигул)</option>
          </select>
        </label>
        <label className="dc-field">
          <span className="dc-field-label">Порода</span>
          <select value={value.breed} onChange={(e) => setValue({ ...value, breed: e.target.value })}>
            <option>Будь‑яка</option>
            <option>Маленька (до 10 кг)</option>
            <option>Середня (10–25 кг)</option>
            <option>Велика (25+ кг)</option>
          </select>
        </label>
        <label className="dc-field">
          <span className="dc-field-label">Дата</span>
          <input
            type="date"
            value={value.date}
            onChange={(e) => setValue({ ...value, date: e.target.value })}
          />
        </label>
        <label className="dc-field">
          <span className="dc-field-label">Час</span>
          <select value={value.time} onChange={(e) => setValue({ ...value, time: e.target.value })}>
            <option>Ранок (9–12)</option>
            <option>День (12–16)</option>
            <option>Вечір (16–20)</option>
          </select>
        </label>
        <button className="dc-booking-go" onClick={onSubmit}>
          Знайти час{" "}
          <span className="dc-btn-arrow" style={{ background: "#FFD23F" }}>
            <Arrow />
          </span>
        </button>
      </div>
    </div>
  );
}
