import React, { useState, useEffect } from 'react';
import Modal from "../Modal";
import UserCreate from './UserCreate';
import axios from 'axios';
import Registro from '../Registro';

function Client() {
  const [clients, setclients] = useState([]);  // Para almacenar los USUARIOS
  const [showUserModal, setShowUserModal] = useState(false);
    // Cargar la lista de técnicos desde la API cuando el componente se monta
    useEffect(() => {
      axios.get('http://localhost:3000/users/findByRole/CLIENT')
        .then(response => {
          setclients(response.data);  // Almacenamos los técnicos en el estado
        })
        .catch(error => {
          console.error("Hubo un error al obtener los técnicos: ", error);
        });
    }, []);  // Solo se ejecuta una vez al montar el componente
  

  const handleOpenUserModal = () => {
  
    setShowUserModal(true);
    handleCloseModal();  // Cierra cualquier otro modal
  };
  const handleCloseUserModal = () => setShowUserModal(false);
    return (
      <div>
                {/* Botón para abrir el modal de Crear Usuario */}
                <button onClick={handleOpenUserModal} className="btn btn-link">
              Crear Usuario
            </button>
         
        <h1>LISTA DE CLIENTES</h1>
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
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.cellphone}</td>
              <td>{client.role}</td>
              <td>{client.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

       
        <Modal showModal={showUserModal} handleClose={handleCloseUserModal}>
         <Registro/>
        </Modal>
      </div>
    );
  }
  
  export default Client;