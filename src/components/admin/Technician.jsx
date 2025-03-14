import React, { useState, useEffect } from 'react';
import Modal from "../Modal";
import UserCreate from './UserCreate';
import axios from 'axios';

function Technician() {
  const [technicians, setTechnicians] = useState([]);  // Para almacenar los técnicos
  const [isModalOpen, setIsModalOpen] = useState(false);  // Para controlar el estado del modal

  // Cargar la lista de técnicos desde la API cuando el componente se monta
  useEffect(() => {
    axios.get('http://localhost:3000/users/findByRole/TECHN')
      .then(response => {
        setTechnicians(response.data);  // Almacenamos los técnicos en el estado
      })
      .catch(error => {
        console.error("Hubo un error al obtener los técnicos: ", error);
      });
  }, []);  // Solo se ejecuta una vez al montar el componente

  // Manejar la apertura del modal
  const handleOpenUserModal = () => {
    setIsModalOpen(true);
  };

  // Manejar el cierre del modal
  const handleCloseUserModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mt-4">
      <h1>LISTA DE TÉCNICOS</h1>
      
      <button className="btn btn-link" onClick={handleOpenUserModal}>Crear Técnico</button>
      
      {/* Tabla de técnicos */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Rol</th>
            <th>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map(technician => (
            <tr key={technician.id}>
              <td>{technician.name}</td>
              <td>{technician.email}</td>
              <td>{technician.cellphone}</td>
              <td>{technician.role}</td>
              <td>{technician.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para crear un nuevo técnico */}
      {isModalOpen && (
        <Modal onClose={handleCloseUserModal}>
          <UserCreate />
        </Modal>
      )}
    </div>
  );
}

export default Technician;
