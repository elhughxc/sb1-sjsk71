import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Derma7Vet Logo" className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-rose-500">Servicios</a>
            <a href="#about" className="text-gray-700 hover:text-rose-500">Sobre Mí</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-500">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;