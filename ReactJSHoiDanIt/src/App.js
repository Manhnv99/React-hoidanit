import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/pages/nav";
import Covid from "./components/pages/covid";
import CountDown from "./components/pages/countdown";
import Crud from "./components/pages/crud";
import Blog from "./components/pages/blog";
import DetailBlog from "./components/pages/detailBlog";
import Test from "./components/pages/test";
import AddnewBlog from "./components/pages/addnewblog";
import NotFound404 from "./components/pages/404NotFound"; 


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const onTimeUp = () => {
    alert("Time-up");
  };

  //khi bấm dùng useState để tập nhật thì nó sẽ chạy vào lại
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Routes>
          <Route path="/" element={<Crud />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/countDown" element={<CountDown timeUp={onTimeUp} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<DetailBlog />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound404/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
