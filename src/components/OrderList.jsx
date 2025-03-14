import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import { useModal } from "../context/ModalContext";
import OrderNew from "./OrderNew";
import OrderUpdate from "./OrderUpdate";
import OrderInfo from "./OrderInfo";

const OrdersList = ({ ordersUpdated }) => {
   const { showModal,updateOrders, handleOpenModal, handleCloseModal } = useModal(); // Usa el hook aquí
  
  const [orders, setOrders] = useState([]);
  const [idOrder, setIdOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState(null); 
  const token = localStorage.getItem("token");
  const apiUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_ORDERS}`;
  //console.log("token")
  //console.log(token)
  //console.log("token")
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("se cargan los datos")
        const response = await axios.get(apiUrl,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        setOrders(response.data);
      } catch (err) {
        setError("Error fetching orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [ordersUpdated]);

  function handleUpdate(id) {
    // Lógica para la actualización
    console.log(id);
    setIdOrder(id)
    setModalType("update"); // Cambia el tipo de modal a "update"
    handleOpenModal();
  }

  function handleInfo(id) {
    // Lógica para la actualización
    console.log(id);
    setIdOrder(id)
    setModalType("info"); // Cambia el tipo de modal a "update"
    handleOpenModal();
  }

  // Función para abrir el modal de crear orden
  function handleCreateOrder() {
    setModalType("create"); // Cambia el tipo de modal a "create"
    handleOpenModal();
  }

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
        {/* Botón para abrir el modal */}
        <button onClick={handleCreateOrder} className="btn btn-link">
              Registrar Orden
            </button>
      
      <h2 className="text-xl font-bold mb-4">Orders List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
             
              <th className="border p-2">Cliente</th>
              <th className="border p-2">correo</th>
              <th className="border p-2">Telefono</th>
              <th className="border p-2">Marca</th>
              <th className="border p-2">Modelo</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Servicio</th>
              <th className="border p-2">técnico</th>
              <th className="border p-2">Acciones</th> {/* Agregado el título de la columna para los botones */}
              <th className="border p-2">Acciones</th> {/* Agregado el título de la columna para los botones */}
          
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border">
               
                <td className="border p-2">{order.user.name}</td>
                <td className="border p-2">{order.user.email}</td>
                <td className="border p-2">{order.user.cellphone}</td>
                <td className="border p-2">{order.brand}</td>
                <td className="border p-2">{order.model}</td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">{order.fail}</td>
                
                <td className="border p-2">{order.assignedTechnician ? order.assignedTechnician.name : 'No asignado'}</td>
                
                <td className="border p-2">
                  <button
                    onClick={() => handleInfo(order.id)} // Llamada a la función handleUpdate
                    className="btn btn-success"

                  >
                    Ver
                  </button>
                  
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleUpdate(order.id)} // Llamada a la función handleUpdate
                    className="btn btn-success"

                  >
                    Actualizar
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
      {/* Modal con OrderNew - Crear Orden */}
      <Modal showModal={showModal && modalType === "create"} handleClose={handleCloseModal}>
        <OrderNew handleClose={handleCloseModal} updateOrders={updateOrders} />
      </Modal>

      {/* Modal con OrderUpdate - Actualizar Orden */}
      <Modal showModal={showModal && modalType === "update"} handleClose={handleCloseModal}>
        <OrderUpdate id={idOrder}/>
      </Modal>

       {/* Modal con OrderUpdate - Actualizar Orden */}
       <Modal showModal={showModal && modalType === "info"} handleClose={handleCloseModal}>
        <OrderInfo id={idOrder}/>
      </Modal>


      
    </div>

    
    
  );
};

export default OrdersList;
