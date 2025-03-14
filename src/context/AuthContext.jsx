import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { useModal } from "./ModalContext";

// Crear el contexto
const AuthContext = createContext(null);

// Hook personalizado para usar el contexto más fácilmente
export const useAuth = () => {
  return useContext(AuthContext);
};

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const { showModal, updateOrders, handleOpenModal, handleCloseModal } = useModal(); // Usa el hook aquí
  //const [role, setRole] = useState(localStorage.getItem("role") || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);
  const navigate = useNavigate(); // Para redireccionar después de login
  const apiUrl = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_LOGIN_URL}`;

  // Función de inicio de sesión
  const login = async (email, password) => {

    try {
      const response = await axios.post(apiUrl, { email, password });
      setToken(response.data.token);
      //console.log(response.data.token)

      // Decodificar token para obtener el rol
      const userApi = jwtDecode(response.data.token);

      // Guardar el objeto userApi en localStorage

      localStorage.setItem("token", response.data.token);

      //console.log(userApi)
      //console.log(response.data.token)
      // Actualizar el estado de `user` con la información decodificada
      setUser({
        id: userApi.id,
        email: userApi.email,
        role: userApi.roles[0],
        name: userApi.name
      });
      localStorage.setItem("user", JSON.stringify({
        id: userApi.id,
        email: userApi.email,
        role: userApi.roles[0],
        name: userApi.name
      }));

      handleCloseModal()
      // Usar `userApi.roles[0]` en lugar de `user.role`
      if (userApi.roles[0] === "CLIENT") {
        navigate("/dashboard-client");
      } else if (userApi.roles[0] === "ADMIN") {
        navigate("/dashboard-admin");
      } else if (userApi.roles[0] === "TECHN") {
        navigate("/dashboard-technician");
      }

    } catch (error) {
      console.error("Error de autenticación:", error.response?.data || error.message);
    }
  };

  // Función de cierre de sesión
  const logout = () => {
    setToken(null);
    // localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login"); // Redirige a la página de login después de cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
