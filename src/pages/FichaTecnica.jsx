// src/pages/FichaTecnica.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ficha from "../components/ficha/Ficha.jsx";

export default function FichaTecnica() {
  const { slug } = useParams();
  const [aseguradora, setAseguradora] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const respuesta = await fetch("/aseguradoras.json");
        const datos = await respuesta.json();

        const encontrada = datos.find(
          (item) => item.slug === slug
        );

        setAseguradora(encontrada || null);
      } catch (error) {
        console.error("Error al cargar el JSON:", error);
        setAseguradora(null);
      } finally {
        setLoading(false);
      }
    }

    cargarDatos();
  }, [slug]);

  if (loading) {
    return <p className="text-center py-16">Cargando ficha técnica...</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 w-full space-y-8">
      <Ficha aseguradora={aseguradora} />
    </section>
  );
}