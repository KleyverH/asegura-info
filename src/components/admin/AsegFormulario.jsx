import { TabItem, Tabs } from "flowbite-react";
import { HiUserCircle, HiAdjustments } from "react-icons/hi";
import AuthInput from "../shared/AuthInput";

export default function AsegFormulario({ formData, onChange, onRamoChange, onAddRamo, onRemoveRamo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <Tabs aria-label="Formulario de aseguradora" variant="pills">
      {/* Tab 1: Información básica */}
      <TabItem active title="Información básica" icon={HiUserCircle}>
        <div className="space-y-6 pt-4">
          {/* Datos básicos */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-vinotinto">
              Datos básicos
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <AuthInput id="nombre" label="Nombre" name="nombre" type="text" value={formData.nombre} onChange={handleChange} placeholder="Nombre de la aseguradora" />
              <AuthInput id="slug" label="Slug (URL)" name="slug" type="text" value={formData.slug} onChange={handleChange} placeholder="seguros-caracas" />
              <AuthInput id="rif" label="RIF" name="rif" type="text" value={formData.rif} onChange={handleChange} placeholder="J-00000000-0" />
              <AuthInput id="calificacion" label="Calificación (0-5)" name="calificacion" type="number" value={formData.calificacion} onChange={handleChange} placeholder="5" />
              <AuthInput id="logo" label="Logo (ruta)" name="logo" type="text" value={formData.logo} onChange={handleChange} placeholder="/logos/seguros-caracas.svg" />
              <AuthInput id="estatus" label="Estatus" name="estatus" type="text" value={formData.estatus} onChange={handleChange} placeholder="Información referencial" />
            </div>
            <div className="mt-4">
              <label htmlFor="descripcion" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gris/70">
                Descripción
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                rows={3}
                placeholder="Breve descripción de la aseguradora"
                className="w-full rounded-lg border border-gris/20 bg-blanco px-3 py-2 text-sm text-gris placeholder-gris/50 outline-none transition-colors focus:border-vinotinto focus:ring-1 focus:ring-vinotinto/30"
              />
            </div>
          </section>

          {/* Dirección */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-deep-navy">
              Dirección
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <AuthInput id="estado" label="Estado" name="direccion.estado" type="text" value={formData["direccion.estado"] ?? ""} onChange={handleChange} placeholder="Distrito Capital" />
              <AuthInput id="ciudad" label="Ciudad" name="direccion.ciudad" type="text" value={formData["direccion.ciudad"] ?? ""} onChange={handleChange} placeholder="Caracas" />
            </div>
            <div className="mt-4">
              <AuthInput id="detalle" label="Dirección detallada" name="direccion.detalle" type="text" value={formData["direccion.detalle"] ?? ""} onChange={handleChange} placeholder="Avenida, edificio, piso" />
            </div>
          </section>

          {/* Contacto */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-vinotinto">
              Contacto
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <AuthInput id="telefono" label="Teléfono" name="contacto.telefono" type="text" value={formData["contacto.telefono"] ?? ""} onChange={handleChange} placeholder="0212-0000000" />
              <AuthInput id="email" label="Email" name="contacto.email" type="email" value={formData["contacto.email"] ?? ""} onChange={handleChange} placeholder="contacto@ejemplo.com" />
              <AuthInput id="website" label="Sitio web" name="contacto.website" type="url" value={formData["contacto.website"] ?? ""} onChange={handleChange} placeholder="https://www.ejemplo.com" />
            </div>
          </section>

          {/* Fuente */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-vinotinto">
              Fuente
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <AuthInput id="fuente-nombre" label="Nombre de la fuente" name="fuente.nombre" type="text" value={formData["fuente.nombre"] ?? ""} onChange={handleChange} placeholder="Sitio oficial" />
              <AuthInput id="fuente-url" label="URL" name="fuente.url" type="url" value={formData["fuente.url"] ?? ""} onChange={handleChange} placeholder="https://www.ejemplo.com" />
              <AuthInput id="fuente-fecha" label="Verificado el" name="fuente.verificadoEn" type="date" value={formData["fuente.verificadoEn"] ?? ""} onChange={handleChange} />
            </div>
          </section>
        </div>
      </TabItem>

      {/* Tab 2: Ramos */}
      <TabItem title="Ramos" icon={HiAdjustments}>
        <div className="pt-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-deep-navy">
              Ramos y coberturas
            </h3>
            <button
              type="button"
              onClick={onAddRamo}
              className="rounded-lg bg-gold/20 px-3 py-1 text-xs font-medium text-vinotinto hover:bg-gold/30"
            >
              + Agregar ramo
            </button>
          </div>

          {formData.ramos?.length === 0 && (
            <p className="text-sm text-gris/70">
              No hay ramos agregados. Haz clic en “+ Agregar ramo” para comenzar.
            </p>
          )}

          {formData.ramos?.map((ramo, index) => (
            <div key={index} className="mb-4 rounded-lg border border-gris/10 bg-sombra/50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium text-gris/70">
                  Ramo #{index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => onRemoveRamo(index)}
                  className="text-xs font-medium text-vinotinto hover:underline"
                >
                  Eliminar
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <AuthInput
                  id={`ramo-nombre-${index}`}
                  label="Nombre del ramo"
                  type="text"
                  value={ramo.nombre}
                  onChange={(e) => onRamoChange(index, "nombre", e.target.value)}
                  placeholder="Seguro de vehículos"
                />
                <AuthInput
                  id={`ramo-id-${index}`}
                  label="ID del ramo"
                  type="text"
                  value={ramo.id}
                  onChange={(e) => onRamoChange(index, "id", e.target.value)}
                  placeholder="vehiculos"
                />
              </div>

              <div className="mt-4">
                <AuthInput
                  id={`ramo-descripcion-${index}`}
                  label="Descripción"
                  type="text"
                  value={ramo.descripcion}
                  onChange={(e) => onRamoChange(index, "descripcion", e.target.value)}
                  placeholder="Protección ante daños, responsabilidad civil y otros eventos."
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor={`ramo-coberturas-${index}`}
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gris/70"
                >
                  Coberturas (separadas por coma)
                </label>
                <input
                  id={`ramo-coberturas-${index}`}
                  type="text"
                  value={ramo.coberturas.join(", ")}
                  onChange={(e) =>
                    onRamoChange(
                      index,
                      "coberturas",
                      e.target.value.split(",").map(c => c.trim()).filter(Boolean)
                    )
                  }
                  placeholder="Responsabilidad civil, Daños propios, Robo total o parcial"
                  className="w-full rounded-lg border border-gris/20 bg-blanco px-3 py-2 text-sm text-gris placeholder-gris/50 outline-none transition-colors focus:border-vinotinto focus:ring-1 focus:ring-vinotinto/30"
                />
              </div>
            </div>
          ))}
        </div>
      </TabItem>
    </Tabs>
  );
}