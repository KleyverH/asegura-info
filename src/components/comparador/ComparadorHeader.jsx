export default function ComparadorHeader() {
  return (
    <div className="border-b border-gris/10 bg-sombra px-5 py-4">
      <div className="flex items-center gap-3">
        <span className="h-8 w-1 rounded-full bg-vinotinto" />
        <div>
          <h2 className="text-xl font-bold text-vinotinto sm:text-2xl">
            Comparador de aseguradoras
          </h2>
          <p className="text-sm text-gris">
            Compara información básica entre dos aseguradoras
          </p>
        </div>
      </div>
    </div>
  );
}