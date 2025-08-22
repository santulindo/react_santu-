import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white w-full fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Mi App</div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-gray-300">Servicios</a></li>
          <li><a href="#precios" className="hover:text-gray-300">Precios</a></li>
          <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
        </ul>

        {/* Botón especial */}
        <a
          href="#empezar"
          className="hidden md:block bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Empezar
        </a>

        {/* Botón Móvil */}
        <button 
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 bg-gray-800 p-6">
          <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-gray-300">Servicios</a></li>
          <li><a href="#precios" className="hover:text-gray-300">Precios</a></li>
          <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
          <li>
            <a
              href="#empezar"
              className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
            >
              Empezar
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
