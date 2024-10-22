import React from 'react';
import { Truck } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Truck size={32} className="mr-2" />
          <h1 className="text-2xl font-bold">Mudanzas VNG</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#inicio" className="hover:text-blue-200">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-blue-200">Servicios</a></li>
            <li><a href="#cobertura" className="hover:text-blue-200">Cobertura</a></li>
            <li><a href="#testimonios" className="hover:text-blue-200">Testimonios</a></li>
            <li><a href="#galeria" className="hover:text-blue-200">Galería</a></li>
            <li><a href="#contacto" className="hover:text-blue-200">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;