import { initialState, TareasReducer } from "../reducers/TareasReducer";
import { useReducer } from "react";

const useTareas = () => {
  const [state, dispatch] = useReducer(TareasReducer, initialState);

  function addTarea(tarea) {
    dispatch({ type: "add_tarea", payload: tarea });
  }

  return {
    addTarea,
    tareas: state.tareas,
  };
};

export default useTareas;
