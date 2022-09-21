import { useNavigate } from "react-router-dom";
import Footer2 from "../CodeReduction/Footer2";
import Header from "../CodeReduction/Header";
import PlanDetails from "./PlanDetails";
import CheckMark from "../../images/checkmark.png";
import "./ChoosePlan.css";

const ChoosePlan = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-[70vh] w-full flex flex-col items-center justify-between">
        <Header height="7vh" />
        <div className="h-[50vh] w-[20%] flex flex-col items-center justify-center choose-holder">
          <div className="h-[40%] w-full flex flex-col justify-around">
            <div className="h-[30%] w-[30%] flex items-center justify-center mx-auto">
              <img
                src={CheckMark}
                alt=""
                className="h-full w-1/2 object-cover"
              />
            </div>
            <div className="h-[50%] w-full flex flex-col items-center justify-around">
              <h3 className="text-[0.9rem] text-[#737373]">
                STEP <span className="text-[#737373] font-semibold">2</span> OF
                <span className="text-[#737373] font-semibold"> 3</span>
              </h3>
              <h2 className="text-[1.8rem] font-medium">Choose your plan.</h2>
            </div>
          </div>
          <PlanDetails
            height="40%"
            width1="70%"
            width2="80%"
            width3="95%"
            leading="1.5rem"
            alignment="0.2rem"
            bigMargin="0"
            mb="0.6rem"
          />
          <button
            className="h-[4rem] w-[92%] text-[1.2rem] text-[#fff] rounded-[3px] bg-[#e50914] mt-[1.5rem]"
            onClick={() => navigate("/signup/planform")}
          >
            Next
          </button>
        </div>
      </div>
      <Footer2 height="18vh" />
    </div>
  );
};

export default ChoosePlan;
