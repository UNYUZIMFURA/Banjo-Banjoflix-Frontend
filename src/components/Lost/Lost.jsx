import { useNavigate } from "react-router-dom";
import LostImg from "../../images/lost.png";
import "./Lost.css";

const Lost = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col">
      <div className="h-[7.5vh] flex items-center bg-[black]">
        <h1
          className="text-3xl text-[#e50914] font-bold cursor-pointer ml-[2.5rem] logo"
          onClick={() => navigate("/")}
        >
          BANJOFLIX
        </h1>
      </div>
      <div className="h-[24vh] flex items-center justify-center text-[10rem] text-[#e50914]">
        <h1>404</h1>
      </div>
      <div className="h-[70vh] flex flex-col justify-between lost-all-holder">
        <div className="h-[61%] flex flex-col items-center justify-between lost-holder">
          <h1 className="text-[#fff] text-[5rem] font-[500] lost-txt">
            Lost your way?
          </h1>
          <p className="text-[#fff] text-[1.5rem] font-[300] lost-para">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <button
            className="h-[3.4rem] w-[13rem] text-[1.2rem] rounded-[4px] cursor-pointer bg-[rgba(255,255,255,0.75)]"
            onClick={() => navigate("/")}
          >
            Banjoflix Home
          </button>
          <div className="h-[19%] w-[18%] flex items-center justify-center border-l-[2px] border-[#e50914] code-txt">
            <h2 className="text-[2rem] text-[white] font-[200] cursor-pointer">
              Error Code <span className="font-[500]">BSES-404</span>
            </h2>
          </div>
        </div>
        <div className="h-[19%] flex justify-end items-center from-txt">
          <h2 className="text-[1.3rem] text-[#737373] font-[200] mr-[5.5rem] cursor-pointer">
            FROM <span className="text-[white] font-[400]">LOST IN SPACE</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Lost;
