// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardAdmin from '../components/admin/DashboardAdmin.jsx';
import DashboardTechnician from '../components/DashboardTechnician';
import DashboardClient from '../components/DashboardClient.jsx';
import Client from '../components/admin/Client.jsx';
import Login from '../components/Login.jsx';
import Registro from '../components/Registro.jsx';
import PrivateRoute from '../components/PrivateRoute.jsx';
import { Service } from '../pages/Service.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import Index from '../pages/Index.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/service/:folio" element={<Service />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/" element={<Index />} />
      <Route path="/" element={<Navigate to="/" />} />
      
      <Route
        path="/dashboard-client"
        element={
          <PrivateRoute allowedRoles={['CLIENT']}>
            <DashboardClient />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard-admin"
        element={
          <PrivateRoute allowedRoles={['ADMIN']}>
            <DashboardAdmin />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard-technician"
        element={
          <PrivateRoute allowedRoles={['TECHN']}>
            <DashboardTechnician />
          </PrivateRoute>
        }
      />
      <Route
        path="/clients"
        element={
          <PrivateRoute>
            <Client />
          </PrivateRoute>
        }
      />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
