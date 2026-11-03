import { Card, Button } from "flowbite-react"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Calificacion } from "../shared/Calificacion";

export default function Carrusel(){
    const [items, setItems] = useState([]);

    useEffect(() => {

    fetch('/aseguradoras.json')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error al cargar el JSON:', error));
  }, []);

  return(
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.slice(0, 4).map((item, index) => (
            <Card
                key={item.id}
                className="group flex aspect-[4/5] flex-col overflow-hidden rounded-none border border-gray-200 bg-blanco p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-vinotinto/40 hover:shadow-lg"
                >
                {/* Zona del logo */}
                <div className="flex h-[45%] min-h-28 items-center justify-center rounded-sm bg-gray-50 p-4">
                    {item.logo ? (
                    <img
                        src={item.logo}
                        alt={`Logo de ${item.nombre}`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                        </svg>
                        <span className="text-xs font-medium">Sin logo disponible</span>
                    </div>
                    )}
                </div>

                {/* Información */}
                <div className="flex flex-1 flex-col items-center justify-center gap-2 px-1 pt-4">
                    <h3 className="line-clamp-2 text-base font-semibold leading-snug text-black transition-colors duration-300 group-hover:text-vinotinto">
                    {item.nombre}
                    </h3>

                    <Calificacion value={item.calificacion} />
                </div>

                {/* Acción */}
                <div className="mt-3">
                    <Link
                    to={`/ficha-tecnica/${item.slug}`}
                    className="block w-full"
                    >
                        <Button
                        pill
                        className="w-full bg-vinotinto text-white transition-colors duration-300 hover:bg-vinotinto/90"
                        >
                        Ver Ficha Técnica
                        </Button>
                    </Link>

                </div>
            </Card>
        ))}
    </section> 
  );
}