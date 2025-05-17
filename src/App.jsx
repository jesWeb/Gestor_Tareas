import { useState } from "react";
import FomularioTareas from "./components/FomularioTareas";
import FiltradoTareas from "./components/FiltradoTareas";
import ListadoDeTareas from "./components/ListadoDeTareas";

function App() {
  return (
    <>
      <div className="bg-blue-700 mx-auto p-4 max-w-2xl font-bold mb-4 text-center">
        <h1 className="text-white text-2xl">Gestor de Tareas</h1>
      </div>
      <div className="bg-slate-100 mx-auto p-5 max-w-2xl">
        <FomularioTareas />
        <FiltradoTareas />
        <ListadoDeTareas/>
      </div>
    </>
  );
}

export default App;
