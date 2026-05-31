import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import dogCareStyles from "./styles/dog-care.css?url";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Unbounded:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap",
  },
  { rel: "stylesheet", href: dogCareStyles },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" },
];

export const meta = () => [
  { title: "Dog Care — школа, грумінг та зоо‑готель для собак" },
  {
    name: "description",
    content:
      "Школа тренувань, зооготель, грумінг та зоомагазин у Івано-Франківську. Виховуємо щасливих хвостиків і спокійних господарів.",
  },
];

export default function App() {
  return (
    <html lang="uk">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
<Scripts />
      </body>
    </html>
  );
}
