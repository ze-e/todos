import React from 'react';
import { Button } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos.slice";

const BasicForm = () => {
    const dispatch = useDispatch();

  return (

  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        todo: "",
      }}
      onSubmit={(values) => dispatch(addTodo(values))}
    >
      <Form>
        <label htmlFor="todo">Todo </label>
        <Field required id="todo" name="todo" placeholder="Type your todo here" />
        <br />
        <label htmlFor="firstName">Add first name </label>
        <Field
          id="firstName"
          name="firstName"
          placeholder="Type your first name here"
        />
        <br />
        <label htmlFor="lastName">Add last name </label>
        <Field
          id="lastName"
          name="lastName"
          placeholder="Type your last name here"
        />
        <br />
        <label htmlFor="email">Add email </label>
        <Field type="email" id="email" name="email" placeholder="Type your email here" />
        <br />
        <Button type="submit" variant='outlined'>Submit</Button>
      </Form>
    </Formik>
  </div>
)};

export default BasicForm
