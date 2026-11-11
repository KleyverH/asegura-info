import { useState, useEffect } from "react";
import useAseguradoras from "../hook/useAseguradoras";
import ComparadorHeader from "../components/comparador/ComparadorHeader";
import ComparadorSelects from "../components/comparador/ComparadorSelects";
import ComparadorCard from "../components/comparador/ComparadorCard";

export default function Comparador() {
  const { aseguradoras, loading, error } = useAseguradoras();

  const [selectedLeftId, setSelectedLeftId] = useState("");
  const [selectedRightId, setSelectedRightId] = useState("");

  // Selecciona las dos primeras por defecto cuando cargan los datos
  useEffect(() => {
    if (aseguradoras.length > 0) {
      setSelectedLeftId(aseguradoras[0].id);
      if (aseguradoras.length > 1) {
        setSelectedRightId(aseguradoras[1].id);
      }
    }
  }, [aseguradoras]);

  const itemLeft = aseguradoras.find(a => a.id === selectedLeftId);
  const itemRight = aseguradoras.find(a => a.id === selectedRightId);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl rounded-xl border border-gris/10 bg-blanco p-8 text-center shadow-sm">
        <p className="text-sm text-gris">Cargando aseguradoras…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-6xl rounded-xl border border-gris/10 bg-blanco p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-vinotinto">
          Error al cargar los datos: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl rounded-xl border border-gris/10 bg-blanco shadow-sm overflow-hidden">
      <ComparadorHeader />
      <ComparadorSelects
        aseguradoras={aseguradoras}
        selectedLeftId={selectedLeftId}
        selectedRightId={selectedRightId}
        onChangeLeft={setSelectedLeftId}
        onChangeRight={setSelectedRightId}
      />
      <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2">
        <ComparadorCard aseguradora={itemLeft} accent="vinotinto" />
        <ComparadorCard aseguradora={itemRight} accent="deep-navy" />
      </div>
    </div>
  );
}