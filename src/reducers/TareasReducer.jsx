export const initialState = {
  tareas: [],
  filter:'',
};

export const TareasReducer = (state = initialState, action) => {
  
  if (action.type === 'add_tarea') {
    return {
      ...state,
      tareas: [
        ...state.tareas,
        //esta se agrega al final de la copia
        action.payload,
      ],
    };
  }
  return state;
};
