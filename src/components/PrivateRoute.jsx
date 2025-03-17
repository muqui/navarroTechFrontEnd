import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, allowedRoles = [] }) => { // Valor por defecto de allowedRoles como array vacío
    const { user, token } = useAuth(); // Obtenemos el objeto 'user' del contexto
   
    console.log("user en private router");
   
   
    // Verifica que 'user' y 'user.role' existan antes de hacer la validación
    if (!token) {
        return <Navigate to="/login" />;
    }

    if (!user || !user.role || !Array.isArray(allowedRoles) || !allowedRoles.includes(user.role)) {
        console.log("engreso a user role no existe!!!")
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
