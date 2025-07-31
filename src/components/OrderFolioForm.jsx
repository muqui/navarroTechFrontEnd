import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderFolioForm = () => {
  const [folio, setFolio] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (folio.trim() !== '') {
      navigate(`/service/${folio.trim()}`)
    }
  }

  return (
    <div className="text-center py-6 px-4">
      <h1 className="text-2xl font-bold mb-4">¡Entérate del estado de tu reparación!</h1>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
        {/* Input del folio */}
        <input
          type="text"
          value={folio}
          onChange={(e) => setFolio(e.target.value)}
          required
          placeholder="Ingresa tu folio"
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Botón buscar */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
        >
          Buscar
        </button>
      </form>
    </div>
  )
}
