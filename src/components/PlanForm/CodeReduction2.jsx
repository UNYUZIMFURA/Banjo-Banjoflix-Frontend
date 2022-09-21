import { Link } from "react-router-dom";
import "./PlanForm.css";
import { BsPhone, BsTabletLandscape } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

const CodeReduction2 = () => {
  return (
    <div className="flex flex-col h-full justify-around">
      <div className="h-[20%] w-[5rem] flex items-center justify-center rounded-[2px]">
        <BsPhone size={30} fill="#e50914" />
      </div>
      <div className="h-[20%] w-[5rem] flex items-center justify-center rounded-[2px]">
        <BsTabletLandscape size={30} fill="#e50914" />
      </div>
      <div className="h-[20%] w-[5rem] flex items-center justify-center rounded-[2px]">
        <MdComputer size={30} fill="#e50914" />
      </div>
      <div className="h-[20%] w-[5rem] flex items-center justify-center rounded-[2px]">
        <RiComputerLine size={30} fill="#e50914" />
      </div>
    </div>
  );
};

const CodeReduction3 = () => {
  return (
    <div className="h-[25vh] w-[45%] flex flex-col items-center justify-around text-[#737373] txt-holder-qual">
      <div>
        <h2 className="text-[0.9rem]">
          HD[720p], Full HD[1080p], Ultra HD[4K] and HDR availability subject to
          your internet service and device capabilities. Not all content is
          available in all resolutions. See our{" "}
          <span className="text-[#0071eb]">Terms of use</span> for more details
        </h2>
        <h2 className="text-[0.9rem] mt-[0.8rem]">
          Only people who live with you may use your account, Watch on 4
          different devices at the same time with Premium and Standard and 1
          with basic and Mode
        </h2>
      </div>
      <Link
        to="/signup/registration"
        className="h-[4rem] w-[35%] flex items-center justify-center text-[#fff] text-[1.2rem] rounded-[4px] outline-none bg-[#e50914] next-btn-2"
      >
        Next
      </Link>
    </div>
  );
};

export { CodeReduction2, CodeReduction3 };
