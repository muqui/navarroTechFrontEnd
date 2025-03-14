// DashboardAdmin.js
import React, { useState } from 'react';
import Modal from '../Modal';
import OrderNew from '../OrderNew';
import OrdersList from '../OrderList';
import HeaderAdmin from './HeaderAdmin';
import Technician from './Technician'
import { useModal } from '../../context/ModalContext';
import Client from './Client';

function DashboardAdmin() {
  const { showModal, ordersUpdated, handleOpenModal, handleCloseModal, updateOrders } = useModal(); // Accedemos al contexto
  const [view, setView] = useState('orders');  // Controla la vista actual

  const handleViewChange = (viewName) => {
    setView(viewName);  // Cambia la vista según el nombre recibido
  };

  return (
    <div>
      <HeaderAdmin onChangeView={handleViewChange} />
  <div className="p-4">
      <h3>Bienvenido al Dashboard Admin</h3>
      
       {/* Renderiza el componente basado en el estado */}
       {view === 'orders' && <OrdersList ordersUpdated={ordersUpdated}/>}
        {view === 'client' && <Client />}
        {view === 'technician' && <Technician />}

      {/* OrdersList siempre visible 
      <OrdersList ordersUpdated={ordersUpdated} />
       <Client/>
     */}
    </div>
 
    </div>
  
  );
}

export default DashboardAdmin;
