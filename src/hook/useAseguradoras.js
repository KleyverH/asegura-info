import { useState, useEffect } from "react";

export default function useAseguradoras() {
  const [aseguradoras, setAseguradoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        setLoading(true);
        setError(null);

        const local = localStorage.getItem("aseguradoras");
        if (local) {
          setAseguradoras(JSON.parse(local));
          setLoading(false);
          return;
        }

        const respuesta = await fetch("/aseguradoras.json");
        if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);
        const data = await respuesta.json();
        setAseguradoras(data);

        localStorage.setItem("aseguradoras", JSON.stringify(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    cargar();
  }, []);

  return { aseguradoras, loading, error };
}