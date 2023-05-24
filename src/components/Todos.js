import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@mui/material";
import { TodosContext } from "../context/Todos.context";

export default function Todos() {
  const { todos, setTodos } = React.useContext(TodosContext);

   const removeTodo = (todoId) => {
     const todosCopy = [...todos];
     const newTodos = todosCopy.filter(todo => todo.id !== todoId);
     setTodos(newTodos);
  };
  
  return !!todos.length ? (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Todo</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell sx={{ fontWeight: 'bold'}}>{todo.todo}</TableCell>
            <TableCell>{todo.firstName}</TableCell>
            <TableCell>{todo.lastName}</TableCell>
            <TableCell>{todo.email}</TableCell>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeTodo(todo.id)}
            >
              Delete
            </Button>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <em>
      No Todos created. Go to Account Settings &gt; Open Form to create new todo
    </em>
  );
}