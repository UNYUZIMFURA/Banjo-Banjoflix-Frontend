import { useState, createContext } from "react";
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
import StateContext from "./helpers/useContext";

const App = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  return (
    <div>
      <StateContext.Provider value={{ enteredEmail, setEnteredEmail }}>
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
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  );
};

export default App;
