import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importa Navigate
import Index from './components/Index';

import DashboardAdmin from './components/admin/DashboardAdmin.jsx';
import DashboardTechnician from './components/DashboardTechnician';
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import DashboardClient from './components/DashboardClient.jsx';
import Client from './components/admin/Client.jsx';
import Login from './components/Login.jsx';
import Registro from './components/Registro.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
 
  return (
    
    <Router>
      <ModalProvider>
        <AuthProvider>



          <Routes>
            {/* Ruta para el componente DashboardTechnician */}
            <Route path="/login" element={<Login />} />
            {/* Ruta para el componente registro */}
            <Route path="/register" element={<Registro />} />
            {/* Redirige automáticamente desde '/' a '/dashboard-client' */}
            <Route path="/" element={<Navigate to="/index" />} />
            {/* Ruta para el componente Index */}
            <Route path="/index" element={<Index />} />
            {/* Ruta para el componente DashboardClient */}
            <Route
              path="/dashboard-client"
              element={
                <PrivateRoute allowedRoles={['CLIENT']}>
                  <DashboardClient />
                </PrivateRoute>

              }
            />
            {/* Ruta para el componente DashboardAdmin */}
            <Route
              path="/dashboard-admin"
              element={
                <PrivateRoute allowedRoles={['ADMIN']} >
                  <DashboardAdmin />
                </PrivateRoute>
              }
            />
            {/* Ruta para el componente DashboardTechnician */}
            <Route
              path="/dashboard-technician"
              element={
                <PrivateRoute allowedRoles={['TECHN']}>
                    <DashboardTechnician />
                </PrivateRoute>
              
              }
            />
            {/* Ruta para el componente DashboardTechnician */}
            <Route
              path="/clients"
              element={
                <PrivateRoute>
                    <Client />
                </PrivateRoute>
              
              }
            />

          </Routes>
        </AuthProvider>
      </ModalProvider>

    </Router>

  );
}

export default App;
