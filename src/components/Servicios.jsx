import React from 'react'

function Servicios() {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-4" id="servicios">
      {/* Título */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">¡Nuestros servicios!</h2>
      </div>

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Servicio 1 */}
        <div className="bg-white text-center p-4 shadow rounded">
          <img src="images/fix-sound.png" alt="Reparación de audio" className="mx-auto mb-2 object-contain" />
          <h5 className="text-xl font-semibold mb-1">Reparación de audio</h5>
          <p>Problemas al escuchar su música favorita y en llamadas.</p>
        </div>

        {/* Servicio 2 */}
        <div className="bg-white text-center p-4 shadow rounded">
          <img src="images/battery.png" alt="Puerto de carga" className="mx-auto mb-2 object-contain"/>
          <h5 className="text-xl font-semibold mb-1">Puerto de carga</h5>
          <p>Problemas al cargar, reparamos su centro de carga.</p>
        </div>

        {/* Servicio 3 */}
        <div className="bg-white text-center p-4 shadow rounded">
          <img src="images/wet_phone.png" alt="Celular mojado" className="mx-auto mb-2 object-contain"/>
          <h5 className="text-xl font-semibold mb-1">Celular mojado</h5>
          <p>No lo ponga en arroz, no ayuda, nosotros se lo reparamos.</p>
        </div>

        {/* Servicio 4 */}
        <div className="bg-white text-center p-4 shadow rounded">
          <img src="images/screen.png" alt="Cambio de Display" className="mx-auto mb-2 object-contain" />
          <h5 className="text-xl font-semibold mb-1">Cambio de Display</h5>
          <p>¡No importa la marca de tu celular, nosotros la cambiamos!</p>
        </div>

        {/* Servicio 5 */}
        <div className="bg-white text-center p-4 shadow rounded">
          <img src="images/battery_1.png" alt="Reemplazo de batería"className="mx-auto mb-2 object-contain" />
          <h5 className="text-xl font-semibold mb-1">Reemplazo de batería</h5>
          <p>Batería nueva para tu smartphone.</p>
        </div>

        {/* Servicio 6 */}
        <div className="bg-white text-center p-4 shadow rounded">
          <img src="images/chip.png" alt="Liberación" className="mx-auto mb-2 object-contain" />
          <h5 className="text-xl font-semibold mb-1">Liberación</h5>
          <p>Liberamos tu celular de compañías nacionales y extranjeras.</p>
        </div>
      </div>
    </div>
  )
}

export default Servicios
