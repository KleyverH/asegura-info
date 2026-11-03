import { Card, Button } from "flowbite-react";
import { Calificacion } from "../shared/Calificacion";
import { Link } from "react-router-dom";
import {
  HiSearch,
  HiPhone,
  HiGlobeAlt,
  HiStar,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

export function AseguradorasList({ aseguradoras }) {
  return (
    <section>

    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {aseguradoras.map((item) => (
        <Card
          key={item.id}
          className="group flex flex-col overflow-hidden rounded-none border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-vinotinto/40 hover:shadow-lg"
        >
          {/* Logo */}
          <div className="flex h-32 items-center justify-center rounded-sm bg-gray-50 p-4">
            {item.logo ? (
              <img
                src={item.logo}
                alt={`Logo de ${item.nombre}`}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <span className="text-sm font-medium text-gray-400">
                Sin logo disponible
              </span>
            )}
          </div>

          {/* Información */}
          <div className="flex flex-1 flex-col justify-center gap-3 pt-4 text-center">
            <h3 className="line-clamp-2 text-base font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-vinotinto">
              {item.nombre}
            </h3>

            <p className="line-clamp-3 text-sm text-gray-600">
              {item.descripcion}
            </p>

            <div className="flex items-center justify-center gap-1 text-sm font-semibold text-amber-500">
              <Calificacion value={item.calificacion} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {item.ramos?.slice(0, 3).map((ramo) => (
                <span
                  key={ramo.id}
                  className="rounded-none border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-600"
                >
                  {ramo.nombre}
                </span>
              ))}

              {item.ramos?.length > 3 && (
                <span className="text-[11px] font-medium text-gray-400">
                  +{item.ramos.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
            <div className="flex items-center justify-center gap-1.5">
              <HiPhone className="h-3.5 w-3.5 text-gray-400" />

              <span className="truncate">
                {item.contacto?.telefono ?? "No disponible"}
              </span>
            </div>

            <div className="flex items-center justify-center gap-1.5">
              <HiGlobeAlt className="h-3.5 w-3.5 text-gray-400" />

              {item.contacto?.website ? (
                <a
                  href={item.contacto.website}
                  target="_blank"
                  rel="noreferrer"
                  className="truncate font-medium text-vinotinto hover:underline"
                >
                  Sitio web
                </a>
              ) : (
                <span className="text-gray-400">No disponible</span>
              )}
            </div>
          </div>

          {/* Acción */}
          <div className="mt-4">
            <Link to={`/ficha-tecnica/${item.slug}`} className="block w-full">
              <Button asChild size="xs" className="w-full rounded-none bg-vinotinto text-white hover:bg-vinotinto/90">
                Ver ficha técnica
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>

    {aseguradoras.length === 0 && (
      <div className="rounded-none border border-dashed border-gray-300 bg-white p-10 text-center">
        <HiOutlineOfficeBuilding className="mx-auto mb-3 h-10 w-10 text-gray-300" />

        <h3 className="text-lg font-semibold text-gray-900">
          No se encontraron aseguradoras
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          Ajuste los filtros o intente con otro término de búsqueda.
        </p>
      </div>
    )}
    
    </section>    
    
  );
}
