import { Footer, FooterCopyright } from "flowbite-react";

export function FooterMain() {
  return (
    <Footer container className="rounded-none bg-vinotinto">
      <div className="w-full text-center">
        <FooterCopyright href="#" className="text-white" by="Kleyver Hamilton - Sitio Diseñado con Fines Educativos" year={2026} />
      </div>
    </Footer>
  );
}
