import { Link } from "react-router-dom";
import useAseguradoras from "../../hook/useAseguradoras";
import AsegCard from "../../components/admin/AsegCard";

export default function Dashboard() {
  const { aseguradoras, loading, error } = useAseguradoras();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sombra px-4">
        <p className="text-sm text-gris">Cargando aseguradoras…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sombra px-4">
        <p className="text-sm font-medium text-vinotinto">
          Error al cargar los datos: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sombra px-4 py-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-vinotinto" />
          <div>
            <h1 className="text-2xl font-bold text-vinotinto sm:text-3xl">
              Dashboard
            </h1>
            <p className="text-sm text-gris">
              Listado de aseguradoras registradas
            </p>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-vinotinto" />
            <div>
              <h1 className="text-2xl font-bold text-vinotinto sm:text-3xl">
                Dashboard
              </h1>
              <p className="text-sm text-gris">
                Listado de aseguradoras registradas
              </p>
            </div>
          </div>
          <Link
            to="/admin/aseguradoras/nueva"
            className="rounded-lg bg-vinotinto px-4 py-2 text-sm font-semibold text-blanco hover:bg-vinotinto-secundario"
          >
            + Nueva aseguradora
          </Link>
        </div>
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aseguradoras.map((aseguradora) => (
            <AsegCard key={aseguradora.id} aseguradora={aseguradora} />
          ))}
        </div>

        {/* Mensaje si no hay datos */}
        {aseguradoras.length === 0 && (
          <div className="rounded-xl border border-gris/10 bg-blanco p-8 text-center shadow-sm">
            <p className="text-sm text-gris">
              No hay aseguradoras registradas todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}