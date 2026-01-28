export const PRODUCTS = [
  {
    sku: "starter",
    name: "Starter",
    description: "Küçük topluluklar için temel kurulum.",
    priceKurus: 24900,
    durationDays: 30,
    features: ["Temel moderasyon", "Hoş geldin / sayaç", "Basit loglama"],
  },
  {
    sku: "premium",
    name: "Premium",
    description: "En çok tercih edilen paket.",
    priceKurus: 69900,
    durationDays: 90,
    featured: true,
    features: ["Gelişmiş moderasyon", "Ticket sistemi", "Log / güvenlik", "Kurulum desteği"],
  },
  {
    sku: "ultimate",
    name: "Ultimate",
    description: "Yüksek trafikli sunucular için özel çözümler.",
    priceKurus: 119900,
    durationDays: 365,
    features: ["Anti-raid paketleri", "Özel komutlar", "Özel kurulum & danışmanlık"],
  },
];

export function getProduct(sku) {
  return PRODUCTS.find((p) => p.sku === sku);
}

export function formatTRY(priceKurus) {
  const tl = (priceKurus / 100).toFixed(2);
  return `₺${tl.replace(".00", "")}`;
}
