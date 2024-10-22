import React from 'react';
import { Phone, Clock, Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mudanzas VNG</h3>
            <p className="mb-4">Servicios profesionales de mudanzas en Vilanova i la Geltrú y toda la comarca del Garraf. Más de 10 años de experiencia nos avalan.</p>
            <div className="flex items-center mb-2">
              <Phone size={20} className="mr-2" />
              <span>690 22 09 44</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={20} className="mr-2" />
              <span>info@mudanzasvng.com</span>
            </div>
            <div className="flex items-center mb-2">
              <MapPin size={20} className="mr-2" />
              <span>Vilanova i la Geltrú, Barcelona</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-2" />
              <span>Lun - Sáb: 8:00 - 20:00</span>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-blue-200">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-blue-200">Servicios</a></li>
              <li><a href="#cobertura" className="hover:text-blue-200">Cobertura</a></li>
              <li><a href="#testimonios" className="hover:text-blue-200">Testimonios</a></li>
              <li><a href="#galeria" className="hover:text-blue-200">Galería</a></li>
              <li><a href="#" className="hover:text-blue-200">Blog</a></li>
              <li><a href="#" className="hover:text-blue-200">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-200"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-200"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-200"><Twitter size={24} /></a>
            </div>
            <p className="mb-4">Suscríbete a nuestro boletín para recibir ofertas exclusivas y consejos útiles para tu mudanza.</p>
            <form className="flex">
              <input type="email" placeholder="Tu email" className="p-2 rounded-l-lg w-full text-gray-800" />
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-r-lg">Suscribir</button>
            </form>
          </div>
        </div>
        <hr className="my-8 border-blue-400" />
        <div className="text-center">
          <p>&copy; 2023 Mudanzas VNG. Todos los derechos reservados.</p>
          <div className="mt-2">
            <a href="#" className="text-sm hover:text-blue-200 mr-4">Política de privacidad</a>
            <a href="#" className="text-sm hover:text-blue-200 mr-4">Términos de servicio</a>
            <a href="#" className="text-sm hover:text-blue-200">Mapa del sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;