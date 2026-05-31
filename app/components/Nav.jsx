import { useEffect, useState } from "react";
import { PawPrint, Arrow } from "./shared.jsx";

const LINKS = [
  { id: "about", label: "Про нас" },
  { id: "services", label: "Послуги" },
  { id: "pricing", label: "Ціни" },
  { id: "team", label: "Команда" },
  { id: "zoomarket", label: "Зоомагазин" },
  { id: "contact", label: "Контакти" },
];

export default function Nav({ activeSection, onNav }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"dc-nav" + (scrolled ? " scrolled" : "")}>
      <div className="dc-wrap dc-nav-inner">
        <div className="dc-logo">
          <span className="dc-logo-mark">
            <PawPrint size={22} color="#FFD23F" />
          </span>
          Dog Care
        </div>
        <div className="dc-nav-links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              className={"dc-nav-link" + (activeSection === l.id ? " active" : "")}
              onClick={(e) => {
                e.preventDefault();
                onNav(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="dc-btn dc-btn-light dc-nav-cta"
            onClick={(e) => {
              e.preventDefault();
              onNav("contact");
            }}
          >
            Записатися <Arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}
