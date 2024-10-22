import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>Mudanzas VNG - Servicios profesionales de mudanzas en Vilanova i la Geltrú</title>
          <meta name="description" content="Mudanzas VNG ofrece servicios profesionales de mudanzas en Vilanova i la Geltrú y toda la comarca del Garraf. Mudanzas locales y de larga distancia con más de 10 años de experiencia." />
          <link rel="canonical" href="https://www.mudanzasvng.com" />
        </Helmet>
        <Header />
        <main>
          <Hero />
          <Services />
          <Coverage />
          <Testimonials />
          <Gallery />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;