import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Service = () => {
  const { folio } = useParams();
  const [repair, setRepair] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const apiUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_SERVICE}/${folio}`;

  useEffect(() => {
    const fetchRepair = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'x-client-id': 'pos_modulo_reparacion',
            'Content-Type': 'application/json',
          },
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

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="text-blue-600 font-bold text-xl">
            NavarroTECH
          </a>
          {/* Aquí podrías agregar menú responsive si quieres */}
        </div>
      </nav>

      {/* Contenido del detalle del servicio */}
      <main className="max-w-3xl mx-auto mt-24 px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Detalle del Servicio</h1>
        <div className="bg-white shadow rounded-lg p-6 space-y-3">
          <p>
            <strong>Folio:</strong> {repair.folio}
          </p>
          <p>
            <strong>Cliente:</strong> {repair.client}
          </p>
          <p>
            <strong>Servicio:</strong> {repair.service}
          </p>
          <p>
            <strong>Costo Reparación:</strong> ${repair.repair_cost}
          </p>
          <p>
            <strong>Abonado:</strong> ${repair.paid}
          </p>
          <p>
            <strong>Por pagar:</strong> ${repair.left}
          </p>
          <p>
            <strong>Teléfono:</strong> {repair.brand} {repair.model}
          </p>
          <p>
            <strong>Estado:</strong> {repair.status}
          </p>
        </div>
      </main>
    </div>
  );
};
