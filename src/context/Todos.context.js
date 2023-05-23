import React, { useState } from "react";

export const TodosContext = React.createContext();

// eslint-disable-next-line
export default (props) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodosContext.Provider>
  );
};
