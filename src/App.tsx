import React from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <div className="relative h-[500px] bg-gradient-to-r from-rose-100 to-rose-200">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-white mb-4">
                Cuidado Dermatológico Especializado para tu Mascota
              </h2>
              <p className="text-xl text-white mb-8">
                Diagnóstico y tratamiento experto de condiciones dermatológicas en animales
              </p>
              <a 
                href="#contact"
                className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Agenda tu Consulta
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Diagnóstico Dermatológico',
                  description: 'Evaluación experta de condiciones de la piel en mascotas'
                },
                {
                  title: 'Tratamientos Especializados',
                  description: 'Soluciones personalizadas para cada condición'
                },
                {
                  title: 'Seguimiento Continuo',
                  description: 'Monitoreo del progreso y ajuste de tratamientos'
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-rose-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">derma7vet@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-rose-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Horario de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-rose-500" />
                  <div>
                    <h3 className="text-lg font-semibold">Ubicación</h3>
                    <p className="text-gray-600">Consulta nuestra ubicación por email</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">© 2024 Derma7Vet - Dra. Maritza Inostroza</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;