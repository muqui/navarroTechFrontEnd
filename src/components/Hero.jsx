import React from 'react'

export const Hero = () => {
  return (
    <div>
      {/* Background image */}
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("images/main.jpg")' }}
      >
        <div className="text-white text-center px-4">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-outline">
            REPARACIÓN DE CELULARES
          </h1>
          <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-outline mt-4">
            alarga la vida de tu celular
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 max-w-xl mx-auto">
            <a
              href="https://wa.me/+5213320874874"
              className="bg-blue-600 text-white font-semibold py-2 px-4 text-center rounded hover:bg-blue-700 transition"
            >
              WhatsApp
            </a>
            <a
              href="tel:3320874874"
              className="bg-blue-600 text-white font-semibold py-2 px-4 text-center rounded hover:bg-blue-700 transition"
            >
              Llámanos
            </a>
            <a
              href="#contacto"
              className="bg-blue-600 text-white font-semibold py-2 px-4 text-center rounded hover:bg-blue-700 transition"
            >
              Escríbenos
            </a>
          </div>
        </div>
      </div>
      {/* End Background image */}
    </div>
  )
}
