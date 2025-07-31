import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'; 
import Servicios from '../components/Servicios'; 
import axios from 'axios';
export const Service = () => {
     const { folio } = useParams();
      const [repair, setRepair] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const apiUrl =  `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_SERVICE}/${folio}`;
   useEffect(() => {
    const fetchRepair = async () => {
      try {
       const response = await axios.get(apiUrl, {
  headers: {
    'x-client-id': 'navarro_tech_service_00001',
    'Content-Type': 'application/json' // opcional para GET
  }
});
        setRepair(response.data);
      } catch (err) {
        setError('No se pudo cargar el servicio');
      } finally {
        setLoading(false);
      }
    };

    fetchRepair();
  }, [folio]);
    if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  return (
    
       <div>
        
      <nav className="navbar navbar-light fixed-top navbar-expand-lg bg-light">
        <div className="container-lg">
          <a className="navbar-brand text-primary fw-bold fs-4" href="/">
            NavarroTECH
          </a>
          
          {/* Menú de navegación que será colapsable en pantallas pequeñas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="/">Inicio</a>
             
            </div>
          </div>
        </div>
      </nav>

 
     <div className="container mt-5 pt-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 col-lg-6">
      <h1 className="mb-4 text-center">Detalle del Servicio</h1>
      <p><strong>Folio:</strong> {repair.folio}</p>
      <p><strong>Cliente:</strong> {repair.client}</p>
      <p><strong>Servicio:</strong> {repair.service}</p>
      <p><strong>Costo Reparación:</strong> ${repair.repair_cost}</p>
      <p><strong>Abonado:</strong> ${repair.paid}</p>
      <p><strong>Por pagar:</strong> ${repair.left}</p>
      <p><strong>Teléfono:</strong> {repair.brand} {repair.model}</p>
      <p><strong>Estado:</strong> {repair.status}</p>
    </div>
  </div>
</div>
 
    </div>
  )
}
