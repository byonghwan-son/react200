import React from 'react';
import {Route, Routes} from "react-router-dom";
// css
import '../css/new.css'
// header
import HeaderAdmin from "./Header/Header admin";
// footer
import Footer from "./Footer/Footer";
// login
import LoginForm from "./LoginForm";
import FloatingPopulationList from "./Floating_population/floatingPopulationList";
import RechartsSimpleLineChart from "./Floating_population/rechartsSimpleLineChart";

function App(props) {
  return (
    <div className={`App`}>
      <HeaderAdmin />
      <Routes>
        <Route exact path={`/`} element={<LoginForm />} />
        <Route exact path={`/floatPopulationList`} element={<FloatingPopulationList />} />
        <Route exact path={`/rechartsSimpleLineChart`} element={<RechartsSimpleLineChart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

