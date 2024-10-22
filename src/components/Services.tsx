import React from 'react';
import { Package, Truck, Home, Box, Briefcase, Clock } from 'lucide-react';

const services = [
  {
    icon: <Package size={48} />,
    title: 'Embalaje profesional',
    description: 'Nuestro equipo de expertos embala sus pertenencias con cuidado y profesionalidad, utilizando materiales de alta calidad para garantizar la máxima protección durante el transporte.',
  },
  {
    icon: <Truck size={48} />,
    title: 'Transporte seguro',
    description: 'Contamos con una flota moderna de vehículos equipados para transportar sus bienes de forma segura y eficiente, ya sea para mudanzas locales en Vilanova i la Geltrú o traslados de larga distancia.',
  },
  {
    icon: <Home size={48} />,
    title: 'Mudanzas locales',
    description: 'Somos especialistas en mudanzas dentro de Vilanova i la Geltrú y alrededores. Conocemos la zona a la perfección, lo que nos permite ofrecer un servicio rápido y eficiente.',
  },
  {
    icon: <Box size={48} />,
    title: 'Desembalaje y organización',
    description: 'No solo transportamos sus pertenencias, también le ayudamos a desempacar y organizar todo en su nuevo hogar, facilitando su transición y ahorrándole tiempo valioso.',
  },
  {
    icon: <Briefcase size={48} />,
    title: 'Mudanzas de oficinas',
    description: 'Ofrecemos servicios especializados para mudanzas de oficinas y negocios en Vilanova i la Geltrú, minimizando el tiempo de inactividad y asegurando una transición suave.',
  },
  {
    icon: <Clock size={48} />,
    title: 'Servicio express',
    description: 'Para aquellas mudanzas urgentes, disponemos de un servicio express que garantiza la rapidez sin comprometer la calidad y el cuidado de sus pertenencias.',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Nuestros Servicios de Mudanzas en Vilanova i la Geltrú</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          En Mudanzas VNG, nos enorgullecemos de ofrecer una amplia gama de servicios de mudanza diseñados para satisfacer todas sus necesidades. Ya sea que se mude a una nueva casa, oficina o necesite almacenamiento temporal, estamos aquí para ayudarle en cada paso del camino.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            Todos nuestros servicios están diseñados para proporcionar una experiencia de mudanza sin estrés y altamente eficiente. Utilizamos técnicas modernas y equipos de última generación para garantizar que sus pertenencias lleguen a su nuevo destino en perfectas condiciones.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Consultar disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;