export default function ComparadorCard({ aseguradora, accent }) {
  if (!aseguradora) {
    return (
      <div className="rounded-xl border border-gris/10 bg-sombra p-5 text-sm text-gris">
        Selecciona una aseguradora para comparar.
      </div>
    );
  }

  const accentColor = accent === "vinotinto" ? "bg-vinotinto" : "bg-deep-navy";
  const titleColor = accent === "vinotinto" ? "text-vinotinto" : "text-deep-navy";

  return (
    <div className="rounded-xl border border-gris/10 bg-blanco shadow-sm overflow-hidden">
      <div className={`h-1.5 w-full ${accentColor}`} />

      <div className="p-5">
        {/* Nombre y estatus */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className={`text-lg font-semibold ${titleColor}`}>
              {aseguradora.nombre}
            </h3>
            <p className="mt-0.5 text-xs text-gris/70">
              RIF: {aseguradora.rif}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-medium text-vinotinto">
            {aseguradora.estatus}
          </span>
        </div>

        {/* Calificación */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-gris/70">
            Calificación
          </span>
          <span className="text-sm font-semibold text-vinotinto">
            {aseguradora.calificacion} / 5
          </span>
        </div>

        {/* Descripción */}
        <p className="mb-4 text-sm leading-relaxed text-gris">
          {aseguradora.descripcion}
        </p>

        {/* Ubicación */}
        <div className="mb-4">
          <h4 className="mb-1.5 text-xs font-medium uppercase tracking-wide text-gris/70">
            Ubicación
          </h4>
          <p className="text-sm text-gris">
            {aseguradora.direccion.ciudad}, {aseguradora.direccion.estado}
          </p>
          <p className="mt-0.5 text-xs text-gris/80">
            {aseguradora.direccion.detalle}
          </p>
        </div>

        {/* Contacto */}
        <div className="mb-4">
          <h4 className="mb-1.5 text-xs font-medium uppercase tracking-wide text-gris/70">
            Contacto
          </h4>
          <p className="text-sm text-gris">{aseguradora.contacto.telefono}</p>
          <a
            href={aseguradora.contacto.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 inline-block text-sm font-medium text-vinotinto underline decoration-gold/50 underline-offset-2 hover:decoration-vinotinto"
          >
            Visitar sitio oficial
          </a>
        </div>

        {/* Ramos */}
        <div>
          <h4 className="mb-1.5 text-xs font-medium uppercase tracking-wide text-gris/70">
            Ramos ofrecidos
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {aseguradora.ramos.map((ramo) => (
              <span
                key={ramo.id}
                className="rounded-full bg-sombra px-2.5 py-0.5 text-xs font-medium text-gris"
              >
                {ramo.nombre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}