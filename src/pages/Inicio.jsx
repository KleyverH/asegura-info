import { Card, Button } from "flowbite-react"
import { Link } from "react-router-dom"
import Carrusel from "../components/inicio/Carrusel.jsx"
import HeroImage from "../components/inicio/HeroImage.jsx"
import Encabezado from "../components/inicio/Encabezado.jsx"
import InformacionBasica from "../components/inicio/InformacionBasica.jsx"


export default function Inicio() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-8 w-full space-y-8">
        {/* 2. SECCIÓN HERO (2 Columnas Grandes) */}
        <HeroImage/>

        {/* 3. SECCIÓN DE TEXTO / ENCABEZADO */}
        <Encabezado/>


        {/* 4. SECCIÓN DE 5 TARJETAS EN FILA */}
        <Carrusel />
      </section>
      
      <section className="max-w-7xl mx-auto px-4 py-8 w-full space-y-8">
          <div className="space-y-2 text-center md:text-left">
              <h2 className="font-bold text-black text-2xl leading-tight">Informacion Basica</h2>
              <p className="text-gray-500 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem, aperiam ea ipsum deserunt minima corrupti eum non similique ut molestias magni illum fugit totam? Voluptas a rem quia? Quis?
              </p>
          </div>

          <InformacionBasica/>
      </section>
    </>
  );
}