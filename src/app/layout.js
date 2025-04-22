import "./globals.css";
import "antd/dist/reset.css";
import ClientWrapper from "../components/clientWrapper";

export const metadata = {
  title: "Al-Tabib Portal",
  description: "Al-Tabib Portal ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="/manifest.json" />
  <link rel="icon" href="/first.png" />
  <meta name="theme-color" content="#0d6efd" />
  <link rel="apple-touch-icon" href="/first.png" />
        {/* Google Fonts link tag yahan add karo */}
        <link
          href="https://fonts.googleapis.com/css2?family=National+Park:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
