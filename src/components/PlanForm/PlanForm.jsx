import PlanDetails from "../ChoosePlan/PlanDetails";
import Footer2 from "../CodeReduction/Footer2";
import Header from "../CodeReduction/Header";
import Plans from "./Plans";

const PlanForm = () => {
  return (
    <div className="h-[155vh] flex flex-col justify-between items-center">
      <div className="h-[120vh] w-full flex flex-col justify-between ">
        <Header />
        <div className=" h-[108vh] flex flex-col justify-between items-center w-full">
          <div className="flex flex-col justify-between h-[18vh]  w-[45%]">
            <h3 className="text-[0.9rem] text-[#737373]">
              STEP <span className="text-[#737373] font-semibold">1</span> OF
              <span className="text-[#737373] font-semibold"> 3</span>
            </h3>
            <h2 className="text-[1.8rem] font-medium">
              Choose the plan that's right for you
            </h2>
            <PlanDetails height="10vh" width="50%" />
          </div>
          <div className="flex flex-col justify-around items-end h-[70vh] w-[45%]">
            <div className="h-[12vh] w-[40%] flex justify-around">
              <div className="h-full w-[36%] flex justify-center items-center bg-[red]">
                <h2 className="text-[#fff]">Standard</h2>
              </div>
              <div className="h-full w-[36%] flex justify-center items-center bg-[red]">
                <h2 className="text-[#fff]">Premium</h2>
              </div>
            </div>
            <div className="h-[48vh] w-[80%] flex flex-col justify-around ">
              <div className="h-[18vh] flex flex-col justify-around">
                <Plans descr="Monthly price" descr2="$0" descr3="$0" />
                <Plans descr="Video quality" descr2="Best" descr3="Best" />
                <Plans descr="Resolution" descr2="1080p" descr3="1080p" />
              </div>
              <div className="flex justify-around h-[26vh] w-full ">
                <h2 className="text-[gray] w-[50%] ">
                  Devices you can use to watch
                </h2>
                <div className="flex flex-col items-center w-[20%] ">
                  <div className="flex flex-col h-full justify-around">
                    <div className="h-[20%] w-[5rem] bg-[red]"></div>
                    <div className="h-[20%] w-[5rem] bg-[red]"></div>
                    <div className="h-[20%] w-[5rem] bg-[red]"></div>
                    <div className="h-[20%] w-[5rem] bg-[red]"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[20%] ">
                  <div className="flex flex-col h-full justify-around">
                    <div className="h-[20%] w-[5rem] bg-[red]"></div>
                    <div className="h-[20%] w-[5rem] bg-[red]"></div>
                    <div className="h-[20%] w-[5rem] bg-[red]"></div>
                    <div className="h-[20%] w-[5rem] bg-[red]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#737373] w-[45%]  items-center flex flex-col justify-around h-[25vh]">
            <h2 className="">
              HD[720p], Full HD[1080p], Ultra HD[4K] and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See TMDB for more details
            </h2>
            <h2 className="">
              {" "}
              Only people who live with you may use your accoutn, Watch on 4
              different devices at the same time with Premium and Standard and 1
              with basic and Mode
            </h2>
            <button className="h-[3rem] w-[20rem] rounded-[1px] text-[#fff] bg-[red]">
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer2 height="20vh" />
    </div>
  );
};

export default PlanForm;
