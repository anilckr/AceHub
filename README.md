# AceHub Next (Hazır Kurulum)

Bu paket, AceHub satış sitesi + kullanıcı paneli + admin paneli + lisans üretimi + (opsiyonel) iyzico ödeme akışı ile hazır gelir.

## Hızlı Kurulum

1) `.env.example` dosyasını `.env` olarak kopyala.

2) Komutlar:

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run seed
npm run dev
```

Site: `http://localhost:3000`

## Admin

Seed sonrası admin hesabı:

- Email: `.env` içindeki `ADMIN_EMAIL`
- Şifre: `.env` içindeki `ADMIN_PASSWORD`

Admin panel: `/admin`

## Kullanıcı

- Kayıt: `/kayit`
- Giriş: `/login`
- Kullanıcı paneli: `/panel`

## Ödeme (iyzico)

`.env` içine aşağıdakileri gir:

- `IYZICO_API_KEY`
- `IYZICO_SECRET_KEY`
- `IYZICO_BASE_URL` (sandbox varsayılan)

Ardından:

- Ürünler: `/urunler`
- Ödeme: paket seçince `/odeme?sku=...`

Ödeme başarılı olunca lisans kodu oluşturulur ve `/odeme/basarili` sayfasında gösterilir.

## Notlar

- SQLite varsayılan. İstersen MySQL/MariaDB için `DATABASE_URL` değiştirip `datasource db` provider'ını güncelle.
- `/api/cron/sync-licenses` endpointi lisans süresi dolanları `EXPIRED` yapar (prod'da cron ile çağır).