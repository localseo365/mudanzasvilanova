import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Mudanzas en Vilanova i la Geltrú"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Mudanzas profesionales en Vilanova i la Geltrú</h1>
        <p className="text-xl mb-8">Hacemos que su mudanza sea fácil, rápida y sin estrés</p>
        <p className="text-lg mb-8">
          Bienvenido a Mudanzas VNG, su socio de confianza para mudanzas locales y de larga distancia en Vilanova i la Geltrú y toda la comarca del Garraf. Con años de experiencia y un equipo altamente capacitado, nos especializamos en ofrecer servicios de mudanza personalizados que se adaptan a sus necesidades específicas.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Solicitar presupuesto gratuito
        </button>
      </div>
    </section>
  );
};

export default Hero;