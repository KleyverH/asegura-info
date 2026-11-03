import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarMain } from './components/shared/Navbar';
import { FooterMain } from './components/shared/Footer';
import Inicio from './pages/Inicio';
import Comparacion from './pages/Comparacion';
import Directorio from './pages/Directorio';
import FichaTecnica from './pages/FichaTecnica';
import Blog from './pages/Blog';

export function App() {
  return (
    <BrowserRouter>
      {/* El Navbar estará visible en todas las páginas */}
      <NavbarMain />

      {/* Aquí cambia la página según la URL */}
      <main className='min-h-screen bg-sombra'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/ficha-tecnica/:slug" element={<FichaTecnica />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/comparacion" element={<Comparacion />} />
          <Route path="*" element={<h1>Página no encontrada (404)</h1>} />
        </Routes>
      </main>

      <FooterMain/>
    </BrowserRouter>
  );
}

export default App;