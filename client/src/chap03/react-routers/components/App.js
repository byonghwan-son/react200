import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// css
import '../css/new.css'
// header
import HeaderAdmin from "./Header/Header admin";
// footer
import Footer from "./Footer/Footer";
// login
import LoginForm from "./LoginForm";
// 대기하기
import R094_reactDebounce from './R094_reactDebounce';
import R095_reactThrottle from "./R095_reactThrottle";

function App(props) {
  return (
    <div className={`App`}>
      <HeaderAdmin />
      <Routes>
        <Route exact path={`/`} element={<LoginForm />} />
        <Route exact path={`/Debounce`} element={<R094_reactDebounce />} />
        <Route exact path={`/Throttle`} element={<R095_reactThrottle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

