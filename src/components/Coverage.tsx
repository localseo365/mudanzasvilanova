import React from 'react';
import { MapPin } from 'lucide-react';

const Coverage = () => {
  const areas = [
    'Vilanova i la Geltrú',
    'Sitges',
    'Sant Pere de Ribes',
    'Cubelles',
    'Canyelles',
    'Vilafranca del Penedès',
    'Otras localidades del Garraf y Alt Penedès'
  ];

  return (
    <section id="cobertura" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Área de Cobertura: Mudanzas en el Garraf y más allá</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xl mb-8">
            En Mudanzas VNG, nos enorgullecemos de ofrecer nuestros servicios de mudanzas de alta calidad en Vilanova i la Geltrú y las siguientes áreas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                <MapPin className="text-blue-600 mr-3" size={24} />
                <span className="text-lg">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-lg mb-4">
            Nuestra amplia cobertura en la comarca del Garraf y zonas adyacentes nos permite ofrecer un servicio rápido y eficiente para mudanzas locales. Conocemos a fondo las características de cada localidad, lo que nos ayuda a planificar y ejecutar cada mudanza de manera óptima, evitando contratiempos y asegurando una experiencia sin estrés para nuestros clientes.
          </p>
          <p className="text-lg mb-4">
            Además de las mudanzas locales, también realizamos traslados de larga distancia a otras provincias de Cataluña y el resto de España. Nuestro equipo está preparado para gestionar mudanzas de cualquier envergadura, siempre con el mismo nivel de profesionalidad y cuidado que nos caracteriza.
          </p>
          <p className="text-lg">
            Si su localidad no aparece en la lista, no dude en contactarnos. Es probable que también podamos atenderle, ya que constantemente estamos expandiendo nuestra área de servicio para satisfacer la creciente demanda de mudanzas de calidad en la región.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Coverage;