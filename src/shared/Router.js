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

        {/* 초기 작업 시 id 없이 진행하는 경우를 대비하여 만들어둔 라우트 입니다. 추후 최종적으로 완성되면 삭제될 예정입니다. */}
        <Route path="detail" element={<Detail />}/>
        <Route path="update" element={<TodoUpdate />}/>

        {/* id 작업 완료 후 사용 할 라우트 입니다. */}
        <Route path="detail/:id" element={<Detail />}/>
        <Route path="update/:id" element={<TodoUpdate />}/>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
