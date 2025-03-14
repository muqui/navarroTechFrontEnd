import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderInfo({ id }) {
  const [order, setOrder] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl =  `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_ORDERS}/${id}`;
 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("se cargan los datos")
        const response = await axios.get(apiUrl);
        setOrder(response.data);
        console.log(response.data)
      } catch (err) {
        setError("Error fetching orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

 

  return (
    <div className="container">
  

       {/* Imprimir detalles de la orden */}
      {order ? (
        <div>
          <h4 className="text-center">Detalles de la Orden</h4>
          <div className="row">
    <div className="col-4">
      <p><strong>ID:</strong> {order.id}</p>
    </div>
    <div className="col-4">
      <p><strong>Cliente:</strong> {order.user?.name}</p>
    </div>
    <div className="col-4">
      <p><strong>Correo:</strong> {order.user?.email}</p>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
      <p><strong>Telefono:</strong> {order.user?.cellphone}</p>
    </div>
    <div className="col-4">
      <p><strong>Marca:</strong> {order.brand}</p>
    </div>
    <div className="col-4">
      <p><strong>Modelo:</strong> {order.model}</p>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
      <p><strong>Status:</strong> {order.status}</p>
    </div>
    <div className="col-4">
      <p><strong>Servicio:</strong> {order.fail}</p>
    </div>
    <div className="col-4">
      <p><strong>Tecnico:</strong> {order.assignedTechnician.name}</p>
    </div>
  </div>
  <div className="row">
    <div className="col-4">
      <p><strong>Costo reparación:</strong> {order.repair_cost}</p>
    </div>
   
  
  </div>


  
          {/* Mostrar las evidencias */}
          <h4 className="text-center">Evidencias</h4>
          <div className="row">
          {order.evidences && order.evidences.length > 0 ? (
    order.evidences.map((evidence) => (
      <div key={evidence.id} className="col-md-4 mb-3">
        <div className="card">
          <img
            src={evidence.fileUrl}
            className="card-img-top img-evidencia" // Esto hace que la imagen sea fluida y se ajuste
            alt={`Evidencia ${evidence.id}`}
            style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'cover' }}  // Limitamos el tamaño máximo
        
          />
          <div className="card-body">
            <p className="card-text">Fecha de carga: {new Date(evidence.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No hay evidencias para esta orden.</p>
  )}
          </div>
        </div>
      ) : (
        <p>Cargando detalles de la orden...</p>
      )}

      
     
    </div>
  );
}

export default OrderInfo;
