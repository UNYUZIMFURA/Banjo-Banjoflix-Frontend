import "./Hero.css";
import Start from "../Start/Start";

const Hero = () => {
  return (
    <div className="h-[77vh] flex flex-col items-center border-b-[8px] border-b-[#222] div-1">
      <div className="h-[12.35%] w-[94.2%] flex items-center justify-between">
        <h1 className="text-4xl text-[#e50914] font-bold">BANJOFLIX</h1>
        <button className="h-[2.3rem] w-[5.3rem] text-[#fff] border-[#e50914] bg-[#e50914] rounded-[3px] cursor-pointer">
          Sign In
        </button>
      </div>
      <div className="h-[48.5%] w-[40%] flex flex-col justify-around text-[#fff] mt-[9rem]">
        <h1 className="text-[4rem] text-center font-medium  leading-[4.2rem]">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-[1.625rem] text-center">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="text-[1.2rem] text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <Start />
        <h2 className="text-[#b92d2b] text-[0.8125rem] hidden">
          Please Enter a valid email address
        </h2>
      </div>
    </div>
  );
};

export default Hero;
