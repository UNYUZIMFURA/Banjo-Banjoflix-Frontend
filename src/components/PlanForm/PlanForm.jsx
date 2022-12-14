import { useState } from "react";
import "./PlanForm.css";
import PlanDetails from "../ChoosePlan/PlanDetails";
import Footer2 from "../CodeReduction/Footer2";
import Header from "../CodeReduction/Header";
import { CodeReduction2, CodeReduction3 } from "./CodeReduction2";
import Plans from "./Plans";

const PlanForm = () => {
  function handleSubmit() {}
  return (
    <div className="h-[155vh] flex flex-col items-center justify-between">
      <div className="h-[120vh] w-full flex flex-col justify-between">
        <Header />
        <div className="h-[108vh] w-full flex flex-col justify-between items-center big-holder">
          <div className="h-[18vh] w-[45%] flex flex-col justify-between descr-holder">
            <h3 className="text-[0.9rem]">
              STEP <span className="text-[#737373] font-medium">3</span> OF
              <span className="text-[#737373] font-medium"> 3</span>
            </h3>
            <h2 className="text-[2rem] font-medium">
              Scroll and Click to Next Button
            </h2>
            <PlanDetails height="10vh" width="50%" className="plan" />
          </div>
          <div className="h-[70vh] w-[45%] flex flex-col justify-around items-end all-plans-holder">
            <div className="h-[13vh] w-[40%] flex justify-around plans-holder">
              <div
                className="h-full w-[38.5%] flex justify-center items-center bg-[#e50914] rounded-[2px] cursor-pointer"
                onClick={handleSubmit}
              >
                <h2 className="text-[#fff]">Standard</h2>
              </div>
              <div
                className="h-full w-[38.5%] flex justify-center items-center bg-[#e50914] rounded-[2px] cursor-pointer"
                onClick={handleSubmit}
              >
                <h2 className="text-[#fff]">Premium</h2>
              </div>
            </div>
            <div className="h-[48vh] w-full flex flex-col justify-around ">
              <div className="h-[18vh] flex flex-col justify-around">
                <Plans descr="Monthly price" descr2="$0" descr3="$0" />
                <Plans descr="Video quality" descr2="Best" descr3="Best" />
                <Plans descr="Resolution" descr2="1080p" descr3="1080p" />
              </div>
              <div className="h-[26vh] w-full flex justify-between">
                <div className="w-[45%] flex items-center justify-start">
                  <h2 className="text-[#333]">Devices you can use to watch</h2>
                </div>
                <div className="w-[40%] flex items-center justify-around">
                  <div className="h-full w-[30%] flex flex-col items-center">
                    <CodeReduction2 />
                  </div>
                  <div className="h-full w-[30%] flex flex-col items-center">
                    <CodeReduction2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CodeReduction3 />
        </div>
      </div>
      <Footer2 height="20vh" />
    </div>
  );
};

export default PlanForm;
