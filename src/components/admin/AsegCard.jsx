import { Link } from "react-router-dom";

export default function AsegCard({ aseguradora }) {
  return (
    <Link
      to={`/admin/aseguradoras/${aseguradora.id}/editar`}
      className="block rounded-xl border border-gris/10 bg-blanco shadow-sm overflow-hidden transition-shadow hover:shadow-md"
    >
        <div className="rounded-xl border border-gris/10 bg-blanco shadow-sm overflow-hidden">
        {/* Barra de acento */}
        <div className="h-1.5 w-full bg-vinotinto" />

        <div className="p-5">
            {/* Nombre y estatus */}
            <div className="mb-3 flex items-start justify-between gap-3">
            <div>
                <h3 className="text-lg font-semibold text-vinotinto">
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
            <div className="mb-3 flex items-center gap-2">
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
    </Link>
  );
}