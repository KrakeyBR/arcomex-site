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
              name: "ARCOMEX - Soluções em Desmonte",
              url: "https://arcomex.com.br",
              logo: "https://arcomex.com.br/images/logo-arcomex.png",
              image: "https://arcomex.com.br/images/logo-arcomex.png",
              telephone: "+55 62 99645-2450",
              email: "arcomexltda@hotmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Estrada Pirenópolis-Pireneus Km 04, Fazenda Meia Lua",
                addressLocality: "Pirenópolis",
                addressRegion: "GO",
                addressCountry: "BR",
              },
              areaServed: "Brasil",
              priceRange: "$$$",
              description:
                "Empresa especializada em perfuração e desmonte de rocha para obras de infraestrutura, terraplenagem, loteamentos e áreas urbanas controladas.",
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Perfuração de rocha",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Desmonte de rocha com explosivos",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Desmonte controlado em área urbana",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Terraplenagem",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Estabilização de taludes",
                  },
                },
              ],
            }),
          }}
        />

        {children}

      </body>
    </html>
  );
}