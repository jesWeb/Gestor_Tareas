import { useTareasContext } from "../context/TareasContext";

function ListadoDeTareas() {
  const { tareas } = useTareasContext();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4"> Listado de tareas</h2>
      {tareas.map((tarea) => (
        <div
          className="flex justify-between items-center p-2 bg-blue-500 rounded mb-2"
          key={tarea.id}
        >
          <span className="text-white ">{tarea.text.toUpperCase()}</span>
          <button className="bg-red-500 text-white py-1 rounded px-2">Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default ListadoDeTareas;
