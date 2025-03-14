import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, allowedRoles = [] }) => { // Valor por defecto de allowedRoles como array vacío
    const { user } = useAuth(); // Obtenemos el objeto 'user' del contexto
    const token = localStorage.getItem("token");

    // Verifica que 'user' y 'user.role' existan antes de hacer la validación
    if (!token) {
        return <Navigate to="/login" />;
    }

    if (!user || !user.role || !Array.isArray(allowedRoles) || !allowedRoles.includes(user.role)) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
