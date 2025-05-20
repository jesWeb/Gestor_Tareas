import { createContext, useContext } from "react";
import useTareas from "../hooks/useTareas";

const TareasContesxt = createContext();

//accede al app
export const TareasProvider = ({ children }) => {
  const { tareas, addTarea } = useTareas();

  return (
    //este es un rpovider
    <TareasContesxt.Provider value={{ tareas, addTarea }}>
      {children}
    </TareasContesxt.Provider>
  );
};

//aacede al de tareas
export const useTareasContext = () => {
  const context = useContext(TareasContesxt);

  if (!context) {
    throw new Error(
      "useTareasContext debe se usado dentro del Tareas Provider"
    );
  }
  return context;
};
