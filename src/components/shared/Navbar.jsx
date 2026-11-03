import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router-dom';

export function NavbarMain() {
  return (
    <Navbar fluid className="bg-vinotinto">
      <NavbarBrand href="/">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Asegura-info</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} className="text-blanco" to="/">Inicio</NavbarLink>
        <NavbarLink as={Link} className="text-blanco" to="/directorio">Directorio</NavbarLink>
        <NavbarLink as={Link} className="text-blanco" to="/blog">Blog</NavbarLink>
        <NavbarLink as={Link} className="text-blanco" to="/Comparacion">Comparacion</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}