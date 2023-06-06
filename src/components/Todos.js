import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from "../store/todos.slice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@mui/material";

export default function Todos() {
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();

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
              onClick={() => dispatch(removeTodo(todo.id))}
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