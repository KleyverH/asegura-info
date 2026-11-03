import { TabItem, Tabs } from "flowbite-react";
import { HiUserCircle, HiAdjustments } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  HiLocationMarker,
  HiPhone,
  HiGlobeAlt,
  HiMail,
  HiShieldCheck,
  HiDocumentText,
} from "react-icons/hi";

export default function Ficha({ aseguradora }) {
  if (!aseguradora) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-vinotinto">
          Aseguradora no encontrada
        </h1>

        <Link to="/" className="text-vinotinto underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const {
    nombre,
    logo,
    descripcion,
    calificacion,
    rif,
    estatus,
    direccion,
    contacto,
    ramos,
    fuente,
  } = aseguradora;

  return (
    <div className="ficha-tabs rounded-xl border border-gris/10 bg-blanco shadow-sm overflow-hidden">
      {/* Encabezado */}
      <div className="border-b border-gris/10 bg-sombra px-5 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {logo && (
            <img
              src={logo}
              alt={`Logo de ${nombre}`}
              className="h-16 w-16 object-contain rounded-lg bg-white p-2 border border-gris/10"
            />
          )}

          <div className="flex items-start gap-3">
            <span className="mt-1 h-8 w-1 rounded-full bg-vinotinto" />

            <div>
              <h1 className="text-xl font-bold text-vinotinto sm:text-2xl">
                {nombre}
              </h1>

              <p className="text-sm text-gris">
                Ficha técnica e información de ramos
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-vinotinto/10 px-3 py-1 text-xs font-semibold text-vinotinto">
                  Calificación: {calificacion}/5
                </span>

                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-deep-navy">
                  {estatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs aria-label="Ficha de aseguradora" variant="pills">
        {/* Tab principal */}
        <TabItem active title="Información" icon={HiUserCircle}>
          <div className="px-5 pb-6 pt-4 space-y-6">
            {/* Descripción */}
            <section>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <h2 className="text-lg font-semibold text-vinotinto">
                  Descripción
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-gris">
                {descripcion}
              </p>
            </section>

            {/* Datos técnicos */}
            <section>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <h2 className="text-lg font-semibold text-vinotinto">
                  Datos técnicos
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gris/10 bg-sombra/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-gris">
                    RIF
                  </p>
                  <p className="mt-1 text-sm font-medium text-deep-navy">
                    {rif}
                  </p>
                </div>

                <div className="rounded-lg border border-gris/10 bg-sombra/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-gris">
                    Estatus
                  </p>
                  <p className="mt-1 text-sm font-medium text-deep-navy">
                    {estatus}
                  </p>
                </div>
              </div>
            </section>

            {/* Dirección */}
            <section>
              <div className="mb-3 flex items-center gap-2">
                <HiLocationMarker className="h-5 w-5 text-vinotinto" />
                <h2 className="text-lg font-semibold text-vinotinto">
                  Dirección
                </h2>
              </div>

              <div className="rounded-lg border border-gris/10 bg-sombra/40 p-4">
                <p className="text-sm text-deep-navy">
                  {direccion.detalle}
                </p>

                <p className="mt-1 text-sm text-gris">
                  {direccion.ciudad}, {direccion.estado}
                </p>
              </div>
            </section>

            {/* Contacto */}
            <section>
              <div className="mb-3 flex items-center gap-2">
                <HiPhone className="h-5 w-5 text-vinotinto" />
                <h2 className="text-lg font-semibold text-vinotinto">
                  Contacto
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-gris/10 bg-sombra/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-gris">
                    Teléfono
                  </p>

                  <a
                    href={`tel:${contacto.telefono}`}
                    className="mt-1 block text-sm font-medium text-vinotinto hover:underline"
                  >
                    {contacto.telefono}
                  </a>
                </div>

                <div className="rounded-lg border border-gris/10 bg-sombra/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-gris">
                    Email
                  </p>

                  {contacto.email && contacto.email !== "Por confirmar" ? (
                    <a
                      href={`mailto:${contacto.email}`}
                      className="mt-1 block text-sm font-medium text-vinotinto hover:underline"
                    >
                      {contacto.email}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-gris">
                      {contacto.email}
                    </p>
                  )}
                </div>

                <div className="rounded-lg border border-gris/10 bg-sombra/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-gris">
                    Sitio web
                  </p>

                  <a
                    href={contacto.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 flex items-center gap-1 text-sm font-medium text-vinotinto hover:underline"
                  >
                    <HiGlobeAlt className="h-4 w-4" />
                    Visitar sitio
                  </a>
                </div>
              </div>
            </section>

            {/* Fuente */}
            {fuente && (
              <section>
                <div className="mb-3 flex items-center gap-2">
                  <HiDocumentText className="h-5 w-5 text-vinotinto" />
                  <h2 className="text-lg font-semibold text-vinotinto">
                    Fuente de información
                  </h2>
                </div>

                <div className="rounded-lg border border-gris/10 bg-sombra/40 p-4">
                  <p className="text-sm font-medium text-deep-navy">
                    {fuente.nombre}
                  </p>

                  <a
                    href={fuente.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm text-vinotinto hover:underline"
                  >
                    {fuente.url}
                  </a>

                  <p className="mt-2 text-xs text-gris">
                    Información verificada el {fuente.verificadoEn}
                  </p>
                </div>
              </section>
            )}
          </div>
        </TabItem>

        {/* Tab de ramos */}
        <TabItem title="Ramos" icon={HiAdjustments}>
          <div className="px-5 pb-6 pt-4">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <h2 className="text-lg font-semibold text-deep-navy">
                Ramos y coberturas
              </h2>
            </div>

            {ramos?.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {ramos.map((ramo) => (
                  <article
                    key={ramo.id}
                    className="rounded-xl border border-gris/10 bg-sombra/40 p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <span className="mt-1 h-6 w-1 rounded-full bg-vinotinto" />

                      <div>
                        <h3 className="text-base font-semibold text-vinotinto">
                          {ramo.nombre}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-gris">
                          {ramo.descripcion}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gris">
                        <HiShieldCheck className="h-4 w-4 text-vinotinto" />
                        Coberturas
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {ramo.coberturas.map((cobertura) => (
                          <span
                            key={cobertura}
                            className="rounded-full border border-vinotinto/15 bg-vinotinto/5 px-3 py-1 text-xs font-medium text-vinotinto"
                          >
                            {cobertura}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gris">
                Esta aseguradora aún no tiene ramos registrados.
              </p>
            )}
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}