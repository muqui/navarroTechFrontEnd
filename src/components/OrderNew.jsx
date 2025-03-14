import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


// Definir el esquema de validación
const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Correo no válido').required('El correo es obligatorio'),
  cellphone: Yup.string().required('El Celular es obligatorio'),
  imei: Yup.string().required('El IMEI es obligatorio'),
  assignedTechnicianId: '',
  repair_cost: Yup.string().required('El costo es obligatorio'),
  paid: Yup.string().required('El abono es obligatorio'),
  deducts: Yup.string().required('El saldo es obligatorio'),
  fail: Yup.string().required('El la falla es obligatoria'),
  brand: Yup.string().required('El Marca es obligatorio'),
  model: Yup.string().required('El Modelo es obligatorio'),
});
function OrderNew( { handleClose, updateOrders }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);
  const [isClientFound, setIsClientFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [technician, setTechnician] = useState('');
  const [technicians, setTechnicians] = useState([]); // Para almacenar los técnicos obtenidos de la API
  // Realiza la solicitud para obtener técnicos cuando el componente se monte
   // Función para buscar al cliente por teléfono
   const apiUrlUser = import.meta.env.VITE_API_URL + import.meta.env.VITE_USER_BY_PHONE + "/" + searchTerm;
   const apiUrlOrder = import.meta.env.VITE_API_URL + import.meta.env.VITE_ORDERS;
   const apiUrlGetTech = import.meta.env.VITE_API_URL+import.meta.env.VITE_USERS_FINDBYROLE +"/TECHN" // 'http://localhost:3000/users/findByRole/TECHN'
   
  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const response = await fetch(apiUrlGetTech);
        const data = await response.json();
        console.log(data)
        setTechnicians(data); // Establece los técnicos en el estado
      } catch (error) {
        console.error('Error fetching technicians:', error);
      }
    };

    fetchTechnicians();
  }, []);

 const searchClient = async () => {
    try {
      const response = await axios.get(apiUrlUser);
      if (response.data) {
        console.log(response.data)
        setClientData(response.data);
        setIsClientFound(true);
      } else {
        setIsClientFound(false);
        setClientData(null);
      }
    } catch (error) {
      console.error('Error al buscar cliente', error);
      setIsClientFound(false);
      setClientData(null);
    }
  };

  const handleSubmit = async (values) => {

    // Enviar los valores del formulario al servidor con los campos correctos
    const orderData = {
      cellphone: values.cellphone,
      cellphone_1:values.cellphone_1,
      imei: values.imei,
      assignedTechnicianId: values.assignedTechnicianId,
      status: 'Pendiente',
      repair_cost: values.repair_cost,
      paid: values.paid,
      deducts: values.deducts,
      fail: values.fail,
      coments: values.comments,
      brand: values.brand,
      model: values.model,
      name: values.name,
      email: values.email,
      isRegistered: true,
      userId: values.userId  //'019529ef-db04-724c-a21e-c206bce69aae'
    };
    console.log("datos #################")
    console.log(orderData)
    console.log("datos fin #################")
    setErrorMessage('');
    await axios.post(apiUrlOrder, orderData)
      .then(response => {
        console.log('Registro exitoso:', response.data);

        alert('Registro exitoso');
         // Cerrar el modal aquí
         handleClose();  // 
         updateOrders();  
      })
      .catch(error => {
        if (error.response) {
          // Mostrar mensaje de error detallado
          setErrorMessage(error.response.data.message || 'Hubo un error en el registro.');
        } else if (error.request) {
          setErrorMessage('No se recibió respuesta del servidor.');
        } else {
          setErrorMessage('Hubo un problema con la solicitud.');
        }
      });

  };

  return (
 
            <div className="container mt-4">
            <h2>Crear Nueva Orden</h2>
            {/* Mostrar el mensaje de error, si existe */}
            {errorMessage && (
              <div className="alert alert-danger mt-3">
                <strong>Error:</strong> {errorMessage}
              </div>
            )}
      
            {/* Búsqueda del cliente por teléfono en la misma fila */}
            <div className="row mb-4">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar Cliente (Teléfono)"
                />
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button className="btn btn-primary w-100" onClick={searchClient}>Buscar Cliente</button>
              </div>
            </div>
      
            {/* Formulario de la Orden */}
            <Formik
              initialValues={{
                name: isClientFound ? clientData.name : '',
                email: isClientFound ? clientData.email : '',
                cellphone: isClientFound ? clientData.cellphone : '',
                cellphone_1: isClientFound ? clientData.cellphone_1 : '',
                assignedTechnicianId: '',
                brand: '',
                model: '',
                imei: '',
                repair_cost: '',
                paid: '',
                deducts: '',
                fail: '',
                comments: '',
                status: '', // Estado por defecto
                userId: isClientFound ? clientData.id : '',
      
              }}
              //enableReinitialize
              enableReinitialize // Esto asegura que Formik actualice initialValues
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  {/* Fila 1: Nombre, Email, Celular */}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isClientFound}
                          placeholder="Nombre"
                        />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                      </div>
      
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isClientFound}
                          placeholder="Correo Electrónico"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          name="cellphone"
                          value={values.cellphone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isClientFound}
                          placeholder="Celular"
                        />
                        <ErrorMessage name="cellphone" component="div" className="text-danger" />
                      </div>
                    </div>
                  </div>
      
                  {/* Fila 2: Celular secundario, Modelo, IMEI */}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          name="cellphone_1"
                          value={values.cellphone_1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isClientFound}
                          placeholder="Celular secundario"
                        />
                        <ErrorMessage name="cellphone_1" component="div" className="text-danger" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          name="model"
                          value={values.model}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Modelo"
                        />     <ErrorMessage name="model" component="div" className="text-danger" />
      
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          name="imei"
                          value={values.imei}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="IMEI"
                        />
                        <ErrorMessage name="imei" component="div" className="text-danger" />
      
                      </div>
                    </div>
                  </div>
      
                  {/* Fila 4: Estado, Falla */}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          name="brand"
                          value={values.brand}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Marca"
                        />
                        <ErrorMessage name="brand" component="div" className="text-danger" />
      
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="text"
                          className="form-control"
                          name="fail"
                          value={values.fail}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Falla"
                        />
                        <ErrorMessage name="fail" component="div" className="text-danger" />
      
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                      <Field as="select" name="assignedTechnicianId" className="form-control">
        <option value="">No asignar técnico</option>
        {technicians.length > 0 ? (
          technicians.map((tech) => (
            <option key={tech.id} value={tech.id}>
              {tech.name}  {/* Mostrar el nombre del técnico */}
            </option>
          ))
        ) : (
          <option disabled>No hay técnicos disponibles</option> // Mensaje en caso de no haber técnicos
        )}
      </Field>
      
                      </div>
                    </div>
                  </div>
      
                  {/* Fila 3: Costo Reparación, Pagado, Descuentos */}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="number"
                          className="form-control"
                          name="repair_cost"
                          value={values.repair_cost}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Costo Reparación"
                        />
                        <ErrorMessage name="repair_cost" component="div" className="text-danger" />
      
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="number"
                          className="form-control"
                          name="paid"
                          value={values.paid}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Pagado"
                        />
                        <ErrorMessage name="paid" component="div" className="text-danger" />
      
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <Field
                          type="number"
                          className="form-control"
                          name="deducts"
                          value={values.deducts}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Descuentos"
                        />
                        <ErrorMessage name="deducts" component="div" className="text-danger" />
      
                      </div>
                    </div>
                  </div>
      
      
      
                  {/* Fila 5: Comentarios */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <Field
                          component="textarea"
                          className="form-control"
                          name="comments"
                          value={values.comments}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Comentarios"
                          style={{ height: '100px' }} // Comentarios en una sola fila
                        />
                      </div>
                    </div>
                  </div>
      
                  <button type="submit" className="btn btn-success mt-3">Crear Orden</button>
                </Form>
              )}
            </Formik>
          </div>
      
       
    

  );
}

export default OrderNew;
