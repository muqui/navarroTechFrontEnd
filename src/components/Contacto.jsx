import React from 'react';

function Contacto() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-10" id="contacto">
      <h1 className="text-3xl font-bold text-center mb-8">Contáctanos NavarroTECH</h1>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Imagen */}
        <div className="w-full md:w-2/3 order-1 md:order-2">
          <img
            src="/images/NavarroTECH.png"
            alt="NavarroTECH"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/3 order-2 md:order-1">
          <form className="space-y-4">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Correo */}
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                Correo <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="correo"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Celular */}
            <div>
              <label htmlFor="celular" className="block text-sm font-medium text-gray-700">
                Celular
              </label>
              <input
                type="tel"
                id="celular"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Asunto */}
            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Comentarios */}
            <div>
              <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700">
                Comentario <span className="text-red-600">*</span>
              </label>
              <textarea
                id="observaciones"
                rows="4"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Botón */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
