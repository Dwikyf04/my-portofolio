// app/test-loading/page.tsx

export default async function TestLoadingPage() {
  // 1. KITA PAKSA BERHENTI (SLEEP) SELAMA 3000ms (3 Detik)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-accent mb-4">Berhasil Masuk!</h1>
        <p className="text-slate-400">
          Jika kamu melihat hantu sebelum tulisan ini muncul, berarti loading
          screen-mu sukses.
        </p>
      </div>
    </div>
  );
}
