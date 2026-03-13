import "./globals.css";

export const metadata = {
  title: "ARCOMEX | Perfuração e Desmonte de Rocha",
  description:
    "Empresa especializada em perfuração e desmonte de rocha para obras de infraestrutura, terraplenagem e operações controladas.",
  verification: {
    google: "DCHdDvSOiQ0HxQ9DY1-w7fIBXySOgmoXGsL3oLrwAtk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ARCOMEX",
              url: "https://arcomex.com.br",
              description:
                "Empresa especializada em perfuração e desmonte controlado de rocha.",
              areaServed: "Brasil",
            }),
          }}
        />

        {children}

      </body>
    </html>
  );
}