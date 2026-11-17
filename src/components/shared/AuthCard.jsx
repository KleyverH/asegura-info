export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-gris/10 bg-blanco shadow-sm overflow-hidden">
      {/* Header */}
      <div className="border-b border-gris/10 bg-sombra px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-vinotinto" />
          <div>
            <h1 className="text-xl font-bold text-vinotinto sm:text-2xl">
              {title}
            </h1>
            <p className="text-sm text-gris">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">{children}</div>
    </div>
  );
}