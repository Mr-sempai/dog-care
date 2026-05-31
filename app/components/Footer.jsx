import { PawPrint, WaveDivider } from "./shared.jsx";

const SOCIAL_DEFS = [
  { key: "instagram", fa: "fa-instagram" },
  { key: "youtube",   fa: "fa-youtube"   },
  { key: "telegram",  fa: "fa-telegram"  },
  { key: "tiktok",    fa: "fa-tiktok"    },
  { key: "viber",     fa: "fa-viber",    href: (v) => `viber://chat?number=${v}` },
];

export default function Footer({ socials = {} }) {
  const socialLinks = SOCIAL_DEFS.map((d) => {
    const val = socials[d.key];
    const url = val ? (d.href ? d.href(val) : val) : "#";
    return { key: d.key, fa: d.fa, url, active: !!val };
  });
  return (
    <footer className="dc-footer dc-section-with-wave">
      <WaveDivider from="#FFD23F" variant="double" height={80} />
      <div className="dc-wrap">
        <div className="dc-footer-grid">
          <div>
            <div className="dc-footer-logo">
              <span className="dc-footer-logo-mark">
                <PawPrint size={22} color="#1A1814" />
              </span>
              Dog Care
            </div>
            <p className="dc-footer-desc">
              Школа собак, грумінг‑салон і зоо‑готель у самому серці міста. З 2018 року поряд із вашими хвостиками.
            </p>
            <div className="dc-socials">
              {socialLinks.map(({ key, fa, url, active }) => (
                <a key={key} href={url} className="dc-social"
                  target={active ? "_blank" : undefined}
                  rel={active ? "noopener noreferrer" : undefined}>
                  <i className={`fa-brands ${fa}`} style={{ fontSize: "17px" }} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Послуги</h4>
            <ul>
              <li><a href="#">Курс кінології</a></li>
              <li><a href="#">Корекція поведінки</a></li>
              <li><a href="#">Грумінг</a></li>
              <li><a href="#">Зоо‑готель</a></li>
              <li><a href="#">Виїзні заняття</a></li>
            </ul>
          </div>
          <div>
            <h4>Школа</h4>
            <ul>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Команда</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Випускники</a></li>
              <li><a href="#">Партнери</a></li>
            </ul>
          </div>
          <div>
            <h4>Контакти</h4>
            <ul>
              <li>+380 (44) 123‑45‑67</li>
              <li>hello@dogcare.school</li>
              <li>вул. Хвоста, 17</li>
              <li>Київ, Україна</li>
            </ul>
          </div>
        </div>
        <div className="dc-footer-bottom">
          <div>© 2026 Dog Care School. Усі права захищені.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#">Політика конфіденційності</a>
            <a href="#">Умови</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
