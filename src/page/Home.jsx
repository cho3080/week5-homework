import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <Header />
      <Form />
      <TodoList />
    </>
  );
};

export default Home;
