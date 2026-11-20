import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarMain } from './components/shared/Navbar';
import { FooterMain } from './components/shared/Footer';
import Inicio from './pages/Inicio';
import Comparacion from './pages/Comparacion';
import Directorio from './pages/Directorio';
import FichaTecnica from './pages/FichaTecnica';
import Blog from './pages/Blog';
import Login from './pages/admin/login';
import Dashboard from './pages/admin/Dashboard';
import Formulario from "./pages/admin/Formulario";

export function App() {
  return (
    <BrowserRouter basename="/asegura-info">
      {/* El Navbar estará visible en todas las páginas */}
      <NavbarMain />

      {/* Aquí cambia la página según la URL */}
      <main className='min-h-screen bg-sombra'>
        <Routes>
          <Route path="/asegura-info/" element={<Inicio />} />
          <Route path="/asegura-info/directorio" element={<Directorio />} />
          <Route path="/asegura-info/ficha-tecnica/:slug" element={<FichaTecnica />} />
          <Route path="/asegura-info/blog" element={<Blog />} />
          <Route path="/asegura-info/comparacion" element={<Comparacion />} />
          <Route path="/asegura-info/login" element={<Login />} />
          <Route path="/asegura-info/admin/dashboard" element={<Dashboard />} />
          <Route path="/asegura-info/admin/aseguradoras/nueva" element={<Formulario />} />
          <Route path="/asegura-info/admin/aseguradoras/:id/editar" element={<Formulario />} />
          <Route path="*" element={<h1>Página no encontrada (404)</h1>} />
        </Routes>
      </main>

      <FooterMain/>
    </BrowserRouter>
  );
}

export default App;