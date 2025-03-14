// src/components/Contacto.jsx
import React from 'react';

function Contacto() {
  return (
    <div>
    <div className="container pt-5 mt-3">
      <div className="row">
        <div className="col-sm-12 order-sm-1">
          <h1 className="text-center">Contáctanos NavarroTECH</h1>
        </div>
        <div className="col-sm-7 order-sm-3">
          <img src="/images/NavarroTECH.png" className="img-fluid" alt="NavarroTECH" />
        </div>
        <div className="col-sm-5 order-sm-2">
          <form className="p-0 m-0" id="form">
            <div className="row">
              {/* Nombre */}
              <div className="form-group col-xs-12 col-md-12">
                <label htmlFor="nombre" className="form-label">Nombre <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="nombre" value="" required />
              </div>
              
              {/* Correo */}
              <div className="form-group col-xs-12 col-md-12">
                <label htmlFor="correo" className="form-label">Correo <span className="text-danger">*</span></label>
                <input type="email" className="form-control" id="correo" value="" required />
              </div>

              {/* Celular */}
              <div className="form-group col-xs-12 col-sm-12">
                <label htmlFor="celular" className="form-label">Celular</label>
                <input type="tel" className="form-control" id="celular" value="" required />
              </div>

              {/* Asunto */}
              <div className="form-group col-xs-12 col-sm-12">
                <label htmlFor="asunto" className="form-label">Asunto</label>
                <input type="text" className="form-control" id="asunto" value="" required />
              </div>

              {/* Comentarios */}
              <div className="form-group col-xs-12 col-sm-12">
                <label htmlFor="observaciones" className="form-label">Comentario <span className="text-danger">*</span></label>
                <textarea id="observaciones" className="form-control" rows="4" required></textarea>
              </div>

              {/* Botón de enviar */}
              <div className="form-group col-xs-12 col-sm-12 mt-2 mb-4 text-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <script src="/js/bootstrap.bundle.min.js"></script>
  </div>
  );
}

export default Contacto;
