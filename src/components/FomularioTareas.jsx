import React from "react";

function FomularioTareas() {
  return (
    <div className="m-4">

      <h2 className="text-xl font-semibold mb-2">Añadir Tarea</h2>
      <input type="text"
      placeholder="Descripcion de la tarea" 
      className="border p-2 rounded mb-2 w-full bg-white"
      />

      <h2 className="text-xl font-semibold mb-2">Añadir Etiqueta</h2>
      <input type="text" 
      placeholder="Etiqueta"
      className="border p-2 rounded mb-2 w-full bg-white"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">Añadir</button>

    </div>
  );
}

export default FomularioTareas;
