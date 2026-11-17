// src/pages/admin/AseguradoraForm.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthCard from "../../components/shared/AuthCard";
import AsegFormulario from "../../components/admin/AsegFormulario";
import useAseguradoras from "../../hook/useAseguradoras";

const FORM_VACIO = {
  nombre: "",
  slug: "",
  rif: "",
  calificacion: "",
  logo: "",
  estatus: "Información referencial",
  descripcion: "",
  "direccion.estado": "",
  "direccion.ciudad": "",
  "direccion.detalle": "",
  "contacto.telefono": "",
  "contacto.email": "",
  "contacto.website": "",
  ramos: [],
  "fuente.nombre": "",
  "fuente.url": "",
  "fuente.verificadoEn": "",
};

export default function AseguradoraForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { aseguradoras, loading, error } = useAseguradoras();

  const [formData, setFormData] = useState(FORM_VACIO);
  const [guardado, setGuardado] = useState(false);

  // Precarga si es edición
  useEffect(() => {
    if (id && aseguradoras.length > 0) {
      const a = aseguradoras.find(x => x.id === id);
      if (a) {
        setFormData({
          nombre: a.nombre,
          slug: a.slug,
          rif: a.rif,
          calificacion: a.calificacion,
          logo: a.logo,
          estatus: a.estatus,
          descripcion: a.descripcion,
          "direccion.estado": a.direccion.estado,
          "direccion.ciudad": a.direccion.ciudad,
          "direccion.detalle": a.direccion.detalle,
          "contacto.telefono": a.contacto.telefono,
          "contacto.email": a.contacto.email,
          "contacto.website": a.contacto.website,
          ramos: a.ramos.map(r => ({ ...r, coberturas: [...r.coberturas] })),
          "fuente.nombre": a.fuente.nombre,
          "fuente.url": a.fuente.url,
          "fuente.verificadoEn": a.fuente.verificadoEn,
        });
      }
    }
  }, [id, aseguradoras]);

  // Handlers para ramos
  const handleRamoChange = (index, field, value) => {
    const nuevosRamos = [...formData.ramos];
    nuevosRamos[index] = { ...nuevosRamos[index], [field]: value };
    setFormData({ ...formData, ramos: nuevosRamos });
  };

  const handleAddRamo = () => {
    setFormData({
      ...formData,
      ramos: [...formData.ramos, { id: "", nombre: "", descripcion: "", coberturas: [] }],
    });
  };

  const handleRemoveRamo = (index) => {
    const nuevosRamos = formData.ramos.filter((_, i) => i !== index);
    setFormData({ ...formData, ramos: nuevosRamos });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const aseguradoraFinal = {
      id: id ?? `nueva-${Date.now()}`,
      nombre: formData.nombre,
      slug: formData.slug,
      rif: formData.rif,
      calificacion: formData.calificacion,
      logo: formData.logo,
      estatus: formData.estatus,
      descripcion: formData.descripcion,
      direccion: {
        estado: formData["direccion.estado"],
        ciudad: formData["direccion.ciudad"],
        detalle: formData["direccion.detalle"],
      },
      contacto: {
        telefono: formData["contacto.telefono"],
        email: formData["contacto.email"],
        website: formData["contacto.website"],
      },
      ramos: formData.ramos,
      fuente: {
        nombre: formData["fuente.nombre"],
        url: formData["fuente.url"],
        verificadoEn: formData["fuente.verificadoEn"],
      },
    };

    // Lee el array actual de localStorage
    const existentes = JSON.parse(localStorage.getItem("aseguradoras") ?? "[]");

    let nuevas;
    if (id) {
      // Actualizar: reemplaza el registro con el mismo id
      nuevas = existentes.map(a => (a.id === id ? aseguradoraFinal : a));
    } else {
      // Crear: agrega al final
      nuevas = [...existentes, aseguradoraFinal];
    }

    // Guarda en localStorage
    localStorage.setItem("aseguradoras", JSON.stringify(nuevas));

    setGuardado(true);
    setTimeout(() => navigate("/admin/dashboard"), 1500);
  };

  if (loading) return <p className="text-sm text-gris">Cargando…</p>;
  if (error) return <p className="text-sm font-medium text-vinotinto">Error: {error}</p>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-sombra px-4 py-8">
      <div className="w-full max-w-3xl">
        <AuthCard
          title={id ? "Editar aseguradora" : "Nueva aseguradora"}
          subtitle={id ? "Actualiza todos los campos del registro" : "Completa todos los campos para crear un registro"}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <AsegFormulario
              formData={formData}
              onChange={setFormData}
              onRamoChange={handleRamoChange}
              onAddRamo={handleAddRamo}
              onRemoveRamo={handleRemoveRamo}
            />

            {guardado && (
              <div className="rounded-lg bg-gold/20 px-3 py-2 text-sm text-vinotinto">
                {id ? "Registro actualizado" : "Registro creado"} con éxito.
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 rounded-lg bg-vinotinto px-4 py-2.5 text-sm font-semibold text-blanco transition-colors hover:bg-vinotinto-secundario"
              >
                {id ? "Actualizar" : "Crear"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/dashboard")}
                className="rounded-lg border border-gris/20 px-4 py-2.5 text-sm font-medium text-gris hover:bg-sombra"
              >
                Cancelar
              </button>
            </div>
          </form>
        </AuthCard>
      </div>
    </div>
  );
}