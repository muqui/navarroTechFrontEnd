import React from 'react';

function Servicios() {
  return (
    <div className="container pt-5 mt-3">
      <div className="row">
        {/* Background image */}
        <div
          className="bg-image d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: 'url("images/main.png")',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="card-body text-white text-center">
            <h1 className="titulo card-title display-4 fw-bold">
              REPARACIÓN DE CELULARES
            </h1>
            <h5 className="titulo card-title fw-bold">
              alarga la vida de tu celular
            </h5>
            <div className="row pt-3">
              <div className="col-12 col-sm-4 mb-3">
                <a href="https://wa.me/+5213320874874" className="btn btn-light w-100">
                  WhatsApp
                </a>
              </div>
              <div className="col-12 col-sm-4 mb-3">
                <a href="tel:3320874874" className="btn btn-light w-100">
                  Llamanos
                </a>
              </div>
              <div className="col-12 col-sm-4 mb-3">
                <a href="#contacto" className="btn btn-light w-100">
                  Escríbenos
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Background image */}

        <div className="col-12 text-center pt-3">
          <h1>¡Entérate del estado de tu reparación!</h1>
          <form className="pb-5 pt-2 text-center" id="form">
            <div className="row pt-3">
              {/* CODIGO */}
              <div className="form-group col-12 col-sm-8 offset-sm-2 pt-4">
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  aria-describedby="nombre"
                  value=""
                  required=""
                  placeholder="Ingresa tu folio"
                />
              </div>
              {/* Botón imprimir */}
              <div className="form-group col-12 col-sm-3 pt-4 text-sm-start">
                <button
                  type="submit"
                  id="btn-add-movie"
                  className="btn btn-primary w-100"
                >
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Nuestros servicios */}
        <div className="col-12 text-center mb-3" id="servicios">
          <h2>¡Nuestros servicios!</h2>
        </div>

        {/* Servicios */}
        <div className="row">
          {/* Servicio 1 */}
          <div className="col-12 col-md-6 col-lg-4 bg-white text-center mb-2">
            <img src="images/fix-sound.png" alt="Reparación de audio" className="img-fluid" />
            <h5 className="card-title">Reparación de audio</h5>
            <p>Problemas al escuchar su música favorita y en llamadas.</p>
          </div>

          {/* Servicio 2 */}
          <div className="col-12 col-md-6 col-lg-4 bg-white text-center mb-2">
            <img src="images/battery.png" alt="Puerto de carga" className="img-fluid" />
            <h5 className="card-title">Puerto de carga</h5>
            <p>Problemas al cargar, reparamos su centro de carga.</p>
          </div>

          {/* Servicio 3 */}
          <div className="col-12 col-md-6 col-lg-4 bg-white text-center mb-2">
            <img src="images/wet_phone.png" alt="Celular mojado" className="img-fluid" />
            <h5 className="card-title">Celular mojado</h5>
            <p>No lo ponga en arroz, no ayuda,  nosotros se lo reparamos.</p>
          </div>

          {/* Servicio 4 */}
          <div className="col-12 col-md-6 col-lg-4 bg-white text-center mb-2">
            <img src="images/screen.png" alt="Cambio de Display" className="img-fluid" />
            <h5 className="card-title">Cambio de Display</h5>
            <p>¡No importa la marca de tu celular, nosotros la cambiamos!</p>
          </div>

          {/* Servicio 5 */}
          <div className="col-12 col-md-6 col-lg-4 bg-white text-center mb-2">
            <img src="images/battery_1.png" alt="Reemplazo de batería" className="img-fluid" />
            <h5 className="card-title">Reemplazo de batería</h5>
            <p>Batería nueva para tu smartphone.</p>
          </div>

          {/* Servicio 6 */}
          <div className="col-12 col-md-6 col-lg-4 bg-white text-center mb-2">
            <img src="images/chip.png" alt="Liberación" className="img-fluid" />
            <h5 className="card-title">Liberación</h5>
            <p>Liberamos tu celular de compañías nacionales y extranjeras.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
