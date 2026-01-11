import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import Providers from "./providers";

export const metadata = {
  title: "AceHub",
  description: "AceHub - Premium bot paketleri ve 7/24 destek",
  // metadataBase: new URL("http://localhost:3000"), // BUNU KALDIR (Vercel'de localhost olmaz)
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-slate-950 text-white">
        <Providers>
          <Navbar />
          {children}
          <Footer />

          {/* Tawk.to Live Chat (Client-side) */}
          <Script id="tawk-to" strategy="afterInteractive">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                    s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6962bd6438e1ce19860d639f/1jekr7kcm';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>
        </Providers>
      </body>
    </html>
  );
}
