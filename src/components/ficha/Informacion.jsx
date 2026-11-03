// src/components/InformacionTecnica.jsx
export default function InformacionTecnica({ aseguradora }) {
  if (!aseguradora) return null;

  return (
    <div className="px-5 pb-5">
      {/* Identificación */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <h3 className="text-lg font-semibold text-vinotinto">
            Identificación
          </h3>
        </div>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Razón social
            </dt>
            <dd className="text-sm text-gris">{aseguradora.nombre}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              RIF
            </dt>
            <dd className="text-sm text-gris">{aseguradora.rif}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Calificación
            </dt>
            <dd className="text-sm text-gris">{aseguradora.calificacion} / 5</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Estatus
            </dt>
            <dd>
              <span className="inline-block rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-medium text-vinotinto">
                {aseguradora.estatus}
              </span>
            </dd>
          </div>
        </dl>
        <p className="mt-3 text-sm leading-relaxed text-gris">
          {aseguradora.descripcion}
        </p>
      </div>

      {/* Ubicación */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <h3 className="text-lg font-semibold text-deep-navy">
            Ubicación
          </h3>
        </div>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Estado
            </dt>
            <dd className="text-sm text-gris">{aseguradora.direccion.estado}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Ciudad
            </dt>
            <dd className="text-sm text-gris">{aseguradora.direccion.ciudad}</dd>
          </div>
          <div className="sm:col-span-3">
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Dirección
            </dt>
            <dd className="text-sm text-gris">{aseguradora.direccion.detalle}</dd>
          </div>
        </dl>
      </div>

      {/* Contacto */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <h3 className="text-lg font-semibold text-vinotinto">
            Contacto
          </h3>
        </div>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Teléfono
            </dt>
            <dd className="text-sm text-gris">{aseguradora.contacto.telefono}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Email
            </dt>
            <dd className="text-sm text-gris">{aseguradora.contacto.email}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-gris/70">
              Sitio web
            </dt>
            <dd>
              <a
                href={aseguradora.contacto.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-vinotinto underline decoration-gold/50 underline-offset-2 hover:decoration-vinotinto"
              >
                Visitar sitio oficial
              </a>
            </dd>
          </div>
        </dl>
      </div>

      {/* Fuente */}
      <div className="rounded-lg bg-sombra px-4 py-3">
        <p className="text-xs text-gris">
          Fuente:{" "}
          <a
            href={aseguradora.fuente.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-vinotinto underline decoration-gold/50 underline-offset-2 hover:decoration-vinotinto"
          >
            {aseguradora.fuente.nombre}
          </a>{" "}
          · Verificado el {aseguradora.fuente.verificadoEn}
        </p>
      </div>
    </div>
  );
}