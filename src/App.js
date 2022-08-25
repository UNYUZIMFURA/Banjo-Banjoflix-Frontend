import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Login from "./components/Login/Login";
import WhoIs from "./components/WhoIs/WhoIs";
import SignPass from "./components/SignPass/SignPass.jsx";
import ChoosePlan from "./components/ChoosePlan/ChoosePlan";
import PlanForm from "./components/PlanForm/PlanForm";
import SignReg from "./components/SignReg/SignReg";
import Movies from "./components/Movies/Movies";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<Movies />} />
          <Route path="login" element={<Login />} />
          <Route path="/who" element={<WhoIs />} />
          <Route path="/signup/password" element={<SignPass />} />
          <Route path="/signup" element={<ChoosePlan />} />
          <Route path="/signup/planform" element={<PlanForm />} />
          <Route path="/signup/registration" element={<SignReg />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
