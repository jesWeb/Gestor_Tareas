import React from "react";

function FiltradoTareas() {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Filtrar por Etiqueta</h2>
        <select className="border p-2 rounded mb-2 w-full bg-white " name="etiquetas">
          <option value="">-- Todas las Etiquetas --</option>
        </select>
      </div>
    </>
  );
}

export default FiltradoTareas;
