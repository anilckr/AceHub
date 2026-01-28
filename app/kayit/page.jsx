import RegisterClient from "./RegisterClient";

export default function RegisterPage() {
  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-bold">Kayıt Ol</h1>
      <p className="mt-2 text-neutral-300">Hesap oluştur, lisanslarını panelden takip et.</p>
      <div className="mt-6">
        <RegisterClient />
      </div>
    </div>
  );
}
