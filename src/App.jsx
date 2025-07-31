import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { ModalProvider } from './context/ModalContext.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  return (
    <Router>
      <ModalProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
