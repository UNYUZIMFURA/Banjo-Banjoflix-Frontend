import Footer2 from "../CodeReduction/Footer2";
import Header from "../CodeReduction/Header";
import PlanDetails from "./PlanDetails";

const ChoosePlan = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="w-full h-[70vh] flex flex-col items-center justify-between">
        <Header />
        <div className="flex flex-col items-center justify-around w-[20%]   h-[50vh] ">
          <div className="w-full  h-[30%] flex flex-col justify-between">
            <div className="w-full h-[20%]"></div>
            <div className=" w-full h-[50%] flex flex-col items-center justify-around">
              <h3 className="text-[0.9rem] text-[#737373]">
                STEP <span className="text-[#737373] font-semibold">1</span> OF
                <span className="text-[#737373] font-semibold"> 3</span>
              </h3>
              <h2 className="text-[1.8rem] font-medium">Choose your plan.</h2>
            </div>
          </div>
          <PlanDetails height="40%" width1="60%" width2="70%"/>
          <button className="h-[3rem] w-[80%] text-[#fff] bg-[red] rounded-[3px]">
            Next
          </button>
        </div>
      </div>
      <Footer2 height="18vh"/>
    </div>
  );
};

export default ChoosePlan;
