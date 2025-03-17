import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Importamos el hook
import axios from 'axios';

function DashboardClient() {
  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
  const [user, setUser] = useState(null); // Estado para manejar el usuario
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [orders, setOrders] = useState([]);
  const apiUrl = `http://localhost:3000/orders/userById/${storedUser.id}`; // URL de la API

  // Verifica si el usuario está en localStorage
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(apiUrl); // Solicitar los datos de la API
        setOrders(response.data);  // Establecer los datos recibidos en el estado
        setLoading(false);  // Establecer la carga como falsa después de recibir los datos
      } catch (error) {
        console.log(error)
        setError("Hubo un error al cargar las órdenes."); // Manejar el error si ocurre
        setLoading(false); // Asegurarse de que la carga se complete incluso si hay error
      }
    };

    fetchOrders(); // Llamar a la función para obtener las órdenes
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (loading) {
    return <div>Cargando...</div>;  // Mostrar mensaje de carga mientras se esperan los datos
  }

  if (error) {
    return <div>{error}</div>;  // Mostrar mensaje de error si ocurre un problema
  }

  return (
    <div>
      <h1>Órdenes del Usuario {storedUser.email}</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
          
            <th>Costo de Reparación</th>
           
          
            <th>Falla</th>
            
            <th>Estado</th>
            <th>Usuario</th>
           
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.brand}</td>
              <td>{order.model}</td>
              
              <td>{order.repair_cost}</td>
              
              <td>{order.fail}</td>
             
              <td>{order.status}</td>
              <td>{order.user?.name} ({order.user?.email})</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default DashboardClient;
