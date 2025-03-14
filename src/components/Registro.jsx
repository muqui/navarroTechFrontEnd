import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Definir el esquema de validación
const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Correo no válido').required('El correo es obligatorio'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
  cellphone: Yup.string().required('El teléfono es obligatorio'),
});

const apiUrl = import.meta.env.VITE_API_URL + import.meta.env.VITE_REGISTER_URL;

function Registro() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // Para controlar si el registro fue exitoso

  const handleSubmit = (values) => {
    setErrorMessage('');

    axios.post(apiUrl, values)
      .then(response => {
        console.log('Registro exitoso:', response.data);
        setIsRegistered(true); // El registro fue exitoso
        alert('Registro exitoso');
      })
      .catch(error => {
        if (error.response) {
          setErrorMessage(error.response.data.message || 'Hubo un error en el registro.');
        } else if (error.request) {
          setErrorMessage('No se recibió respuesta del servidor.');
        } else {
          setErrorMessage('Hubo un problema con la solicitud.');
        }
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Formulario de Registro</h2>

        {/* Mostrar el mensaje de error si existe */}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            cellphone: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <Field
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Nombre"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Correo"
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

            <div className="mb-3">
              <Field
                type="text"
                id="cellphone"
                name="cellphone"
                className="form-control"
                placeholder="Teléfono"
              />
              <ErrorMessage name="cellphone" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Registrar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Registro;
