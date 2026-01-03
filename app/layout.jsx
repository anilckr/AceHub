import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AceHub",
  description: "AceHub - Premium bot paketleri ve 7/24 destek",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
