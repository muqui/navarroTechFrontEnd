// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const ModalContext = createContext();

// Crear el proveedor del contexto
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
   const [ordersUpdated, setOrdersUpdated] = useState(0); 

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

    // Función para actualizar las órdenes después de registrar una nueva
    const updateOrders = () => {
      setOrdersUpdated(ordersUpdated + 1);  // Incrementa el contador
    };
  

  return (
    <ModalContext.Provider value={{ 
      showModal, 
      ordersUpdated, 
      handleOpenModal,
       handleCloseModal,
       updateOrders
        }}>
      {children}
    </ModalContext.Provider>
  );
};

// Crear un hook para usar el contexto fácilmente
export const useModal = () => {
  return useContext(ModalContext);
};
