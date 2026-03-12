import "./globals.css";

export const metadata = {
  title: "ARCOMEX | Perfuração e Desmonte de Rocha",
  description:
    "Empresa especializada em perfuração e desmonte de rocha para obras de infraestrutura, terraplenagem e operações controladas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}