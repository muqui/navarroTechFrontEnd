import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderUpdate({ id }) {
  const [order, setOrder] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError('Debe seleccionar una imagen');
      return;
    }

    const formData = new FormData();
    formData.append('orderId', id); // El ID de la orden que se pasa como prop
    formData.append('image', image); // La imagen seleccionada

    setLoading(true);
    setError(null);
    const apiUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_USERS_EVIDENCE}`;
    try {
      const response = await axios.post(
        apiUrl, // Asegúrate de que esta URL sea la correcta en tu API
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Si la subida es exitosa
      console.log('Evidencia subida correctamente:', response.data);
    } catch (err) {
      setError('Hubo un error al subir la imagen');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
   <h3>Actualizar Orden</h3>

       
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Input para seleccionar la imagen */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Subir Imagen:
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Mostrar errores si los hay */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Botón para enviar el formulario */}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Subiendo...' : 'Subir Imagen'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderUpdate;
