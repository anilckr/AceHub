import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "./providers";

export const metadata = {
  title: "AceHub",
  description: "AceHub platformu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
