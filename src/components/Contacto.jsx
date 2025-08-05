import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Contacto() {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      correo: '',
      celular: '',
      asunto: '',
      observaciones: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('El nombre es obligatorio'),
      correo: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
      celular: Yup.string(),
      asunto: Yup.string(),
      observaciones: Yup.string().required('El comentario es obligatorio'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('https://n8n-albert.redirectme.net/webhook/email', values);
        console.log('Formulario enviado:', response.data);
        alert('Formulario enviado con éxito');
        resetForm();
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar el formulario');
      }
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 pt-10" id="contacto">
      <h1 className="text-3xl font-bold text-center mb-8">Contáctanos NavarroTECH</h1>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Imagen */}
        <div className="w-full md:w-2/3 order-1 md:order-2">
          <img
            src="/images/NavarroTECH.png"
            alt="NavarroTECH"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/3 order-2 md:order-1">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre <span className="text-red-600">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.nombre && formik.errors.nombre && (
                <p className="text-red-600 text-sm">{formik.errors.nombre}</p>
              )}
            </div>

            {/* Correo */}
            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                Correo <span className="text-red-600">*</span>
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.correo}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.touched.correo && formik.errors.correo && (
                <p className="text-red-600 text-sm">{formik.errors.correo}</p>
              )}
            </div>

            {/* Celular */}
            <div>
              <label htmlFor="celular" className="block text-sm font-medium text-gray-700">
                Celular
              </label>
              <input
                id="celular"
                name="celular"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.celular}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Asunto */}
            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                Asunto
              </label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.asunto}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Comentarios */}
            <div>
              <label htmlFor="observaciones" className="block text-sm font-medium text-gray-700">
                Comentario <span className="text-red-600">*</span>
              </label>
              <textarea
                id="observaciones"
                name="observaciones"
                rows="4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.observaciones}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {formik.touched.observaciones && formik.errors.observaciones && (
                <p className="text-red-600 text-sm">{formik.errors.observaciones}</p>
              )}
            </div>

            {/* Botón */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
