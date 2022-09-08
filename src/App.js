import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protect from "./utils/Protect";
import HomePage from "./components/Homepage/HomePage";
import Login from "./components/Login/Login";
import WhoIs from "./components/WhoIs/WhoIs";
import SignPass from "./components/SignPass/SignPass.jsx";
import ChoosePlan from "./components/ChoosePlan/ChoosePlan";
import PlanForm from "./components/PlanForm/PlanForm";
import SignReg from "./components/SignReg/SignReg";
import Movies from "./components/Movies/Movies";
import Lost from "./components/Lost/Lost";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<Protect />}>
              <Route path="/who" element={<WhoIs />} />
              <Route path="/browse" element={<Movies />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="/signup/password" element={<SignPass />} />
            <Route path="/signup" element={<ChoosePlan />} />
            <Route path="/signup/planform" element={<PlanForm />} />
            <Route path="/signup/registration" element={<SignReg />} />
            <Route path="*" element={<Lost />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
