import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Detail from "../page/Detail";
import TodoUpdate from "../page/TodoUpdate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="update/:id" element={<TodoUpdate />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
