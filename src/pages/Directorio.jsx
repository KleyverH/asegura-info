import { useEffect, useMemo, useState } from "react";
import { FiltroAseguradora } from "../components/directorio/FiltroAseguradora";
import { AseguradorasList } from "../components/directorio/AseguradoraList";

const TIPOS_SEGURO = ["Todos", "Auto", "Hogar", "Salud"];
export default function Directorio() {
  const [aseguradoras, setAseguradoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Todos");

  useEffect(() => {
    let activo = true;

    async function cargarAseguradoras() {
      try {
        const respuesta = await fetch("aseguradoras.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el directorio.");
        }

        const datos = await respuesta.json();

        if (activo) setAseguradoras(datos);
      } catch (err) {
        if (activo) setError(err.message);
      } finally {
        if (activo) setLoading(false);
      }
    }

    cargarAseguradoras();

    return () => {
      activo = false;
    };
  }, []);

  const aseguradorasFiltradas = useMemo(() => {
    const termino = searchTerm.trim().toLowerCase();

    return aseguradoras.filter((item) => {
      const coincideBusqueda =
        !termino ||
        item.nombre.toLowerCase().includes(termino) ||
        item.descripcion.toLowerCase().includes(termino) ||
        item.ramos?.some((ramo) => ramo.nombre.toLowerCase().includes(termino));

      const coincideTipo =
        selectedType === "Todos" ||
        item.ramos?.some((ramo) =>
          ramo.nombre.toLowerCase().includes(selectedType.toLowerCase()),
        );

      return coincideBusqueda && coincideTipo;
    });
  }, [aseguradoras, searchTerm, selectedType]);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 px-4 py-16">
        <p className="text-center text-gray-500">Cargando aseguradoras...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gray-50 px-4 py-16">
        <p className="text-center text-red-600">{error}</p>
      </section>
    );
  }
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        {/* Encabezado y filtros */}
        <FiltroAseguradora
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          selectedType={selectedType}
          onSelectedTypeChange={setSelectedType}
          tiposSeguro={TIPOS_SEGURO}
        />

        <AseguradorasList aseguradoras={aseguradorasFiltradas} />
      </div>
    </section>
  );
}
