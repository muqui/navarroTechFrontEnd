import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import Header from './Header';

// Definir el esquema de validación para el formulario de login
const validationSchema = Yup.object({
  email: Yup.string().email('Correo no válido').required('El correo es obligatorio'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
});

function Login() {
  const auth = useAuth();
  const navigate = useNavigate(); // hook de React Router
  // Estado para almacenar el mensaje de error o éxito
  const [errorMessage, setErrorMessage] = useState('');

  // Función para manejar el envío de datos
  const handleSubmit = async (values) => {
    console.log("Boton autenticacion")
   
    await auth?.login(values.email, values.password);
  };

  return (
    <>
    <Header/>
    // Modal de Login
    <div className="modal-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-modal p-4 shadow-lg rounded-3" style={{ width: '33.33%' }}>
        <h2 className="text-center mb-4">Formulario de Inicio de Sesión</h2>

        {/* Mostrar el mensaje de error si existe */}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit} // Usar la función handleSubmit para el submit
        >
          <Form>
            <div className="mb-3">
             
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Correo electrónico"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
            
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Contraseña"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Iniciar sesión
            </button>
          </Form>
        </Formik>
      </div>
    </div>
    </>
  );
}

export default Login;
