import { useState } from "react";
import { useTareasContext } from "../context/TareasContext";
function FomularioTareas() {
  const [text, setText] = useState("");
  const [Label, setLabel] = useState("");
  const { addTarea } = useTareasContext();

  //funcion agregar tarea
  const handleAddTarea = () => {
    if (text && Label) {
      addTarea({
        id: Date.now(),
        text,
        Label,
      });
      setLabel("");
      setText("");
    }
    console.log('tarea añadida');
    
  };

  return (
    <div className="m-4">
      <h2 className="text-xl font-semibold mb-2">Añadir Tarea</h2>
      <input
        type="text"
        placeholder="Descripcion de la tarea"
        className="border p-2 rounded mb-2 w-full bg-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2 className="text-xl font-semibold mb-2">Añadir Etiqueta</h2>
      <input
        type="text"
        placeholder="Etiqueta"
        value={Label}
        onChange={(e) => setLabel(e.target.value)}
        className="border p-2 rounded mb-2 w-full bg-white"
      />

      <button
        onClick={handleAddTarea}

        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Añadir
      </button>
    </div>
  );
}

export default FomularioTareas;
