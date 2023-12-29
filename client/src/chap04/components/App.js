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

function App(props) {
  return (
    <div className={`App`}>
      <HeaderAdmin />
      <Routes>
        <Route exact path={`/`} element={<LoginForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

