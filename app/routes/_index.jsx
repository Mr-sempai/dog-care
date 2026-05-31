import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import fs from "node:fs";
import path from "node:path";
import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import BookingWidget from "../components/BookingWidget.jsx";
import AboutBlock from "../components/AboutBlock.jsx";
import Services from "../components/Services.jsx";
import Process from "../components/Process.jsx";
import Team from "../components/Team.jsx";
import Pricing from "../components/Pricing.jsx";
import Zoomarket from "../components/Zoomarket.jsx";
import Marquee from "../components/Marquee.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

export async function loader() {
  const dbPath = path.resolve(process.cwd(), "db.json");
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  return json({
    services: data.services,
    trainers: data.trainers,
    pricing: data.pricing,
    socials: data.socials,
  });
}

export default function Index() {
  const { services, trainers, pricing, socials } = useLoaderData();
  const [active, setActive] = useState("home");
  const [booking, setBooking] = useState({
    service: "Тренування у школі",
    breed: "Будь‑яка",
    date: "",
    time: "Ранок (9–12)",
  });

  const scrollTo = useCallback((id) => {
    if (typeof document === "undefined") return;
    setActive(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const ids = ["about", "services", "team", "pricing", "contact"];
    const onScroll = () => {
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 220) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goContact = useCallback(() => scrollTo("contact"), [scrollTo]);
  const goServices = useCallback(() => scrollTo("services"), [scrollTo]);

  return (
    <div className="dc-app">
      <Nav activeSection={active} onNav={scrollTo} />
      <Hero onBook={goContact} onSeeServices={goServices} />
      <BookingWidget value={booking} setValue={setBooking} onSubmit={goContact} />
      <AboutBlock />
      <Services services={services} onBook={goContact} />
      <Process />
      <Team trainers={trainers} onBook={goContact} />
      <Pricing pricing={pricing} onBook={goContact} />
      <Zoomarket onBook={goContact} />
      <Marquee />
      <Testimonials />
      <ContactForm />
      <Footer socials={socials} />
    </div>
  );
}
