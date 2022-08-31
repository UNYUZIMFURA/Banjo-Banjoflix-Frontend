import "./SignReg.css";
import Header from "../CodeReduction/Header";
import Footer2 from "../CodeReduction/Footer2";
import Devices from "../../images/devices.png";

const SignReg = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-[60vh] flex flex-col justify-between items-center">
        <Header />
        <div className="h-[40vh] w-[20%] flex flex-col items-center justify-around main-holder">
          <div className="w-4/5 h-[25%] img-holder">
            <img src={Devices} alt="" className="object-cover" />
          </div>
          <div className="h-[48%] w-full flex flex-col items-center justify-between txt-holder">
            <h2 className="w-[92%] text-[2rem] text-[#333] font-medium leading-[2.8rem] text-center txt-1">
              Finish setting up your account
            </h2>
            <h2 className="w-4/5 text-center text-[#333] text-[1.2rem] leading-[1.8rem] txt-2">
              Banjoflix is personalized for you. Create a password to watch on
              any device at any time.
            </h2>
          </div>
          <button className="h-[4rem] w-[92%] text-[white] text-[1.3rem] bg-[#e50914] rounded-[3px] mt-[1rem]">
            Next
          </button>
        </div>
      </div>
      <Footer2 height="20vh" />
    </div>
  );
};

export default SignReg;
