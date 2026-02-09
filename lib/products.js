export const PRODUCTS = [
  {
    sku: "web-ozel-site",
    name: "Özel Web Site Tasarımı",
    description:
      "Kişisel projeler, sevgiliye özel siteler veya tanıtım amaçlı modern web siteleri.",
    priceKurus: 149900,
    durationDays: "Süresiz",
    featured: true,
    features: [
      "Mobil uyumlu modern tasarım",
      "Size özel sayfa yapısı",
      "Hızlı teslimat",
      "Temel SEO ayarları",
    ],
  },
  {
    sku: "e-ticaret-paket",
    name: "E-Ticaret & Marka Paketi",
    description:
      "Ürün satan markalar için ödeme sistemli, yönetim panelli e-ticaret sitesi.",
    priceKurus: 299900,
    durationDays: "Süresiz",
    features: [
      "Ürün & stok yönetimi",
      "Ödeme altyapısı entegrasyonu",
      "Admin panel",
      "Satış odaklı tasarım",
    ],
  },
  {
    sku: "discord-bot",
    name: "Discord Bot Sistemleri",
    description:
      "Moderasyon, ticket, güvenlik ve otomasyon odaklı Discord bot çözümleri.",
    priceKurus: 79900,
    durationDays: 30,
    features: [
      "Sunucuya özel ayarlar",
      "Ticket & kayıt sistemi",
      "Güvenlik modülleri",
      "Kurulum desteği",
    ],
  },

  // 🔥 SEÇMELİ SÜRELİ HİZMET
  {
    sku: "fivem-script",
    name: "FiveM Developer Hizmeti",
    description:
      "FiveM sunucuları için süreye göre geliştirici / script hizmeti.",
    pricingOptions: [
      { label: "1 Gün", durationDays: 1, priceKurus: 150000 },
      { label: "1 Hafta", durationDays: 7, priceKurus: 800000 },
      { label: "1 Ay", durationDays: 30, priceKurus: 2500000 },
    ],
    features: [
      "Özel script geliştirme",
      "Hata çözümü",
      "Performans optimizasyonu",
      "Canlı destek",
    ],
  },

  {
    sku: "sunucu-kurulum",
    name: "Sunucu Kurulum Hizmeti",
    description:
      "Discord, FiveM ve Web dahil olmak üzere uçtan uca sunucu kurulumu.",
    priceKurus: 199900,
    durationDays: "Süresiz",
    features: [
      "Tam altyapı kurulumu",
      "Rol & kanal ayarları",
      "Optimizasyon",
      "Teslim sonrası destek",
    ],
  },
];

export function getProduct(sku) {
  return PRODUCTS.find((p) => p.sku === sku);
}

export function formatTRY(priceKurus) {
  const tl = (priceKurus / 100).toFixed(2);
  return `₺${tl.replace(".00", "")}`;
}
