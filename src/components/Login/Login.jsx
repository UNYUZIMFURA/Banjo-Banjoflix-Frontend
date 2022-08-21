import "./Login.css";

const Login = () => {
  return (
    <div className="h-[115vh] flex flex-col items-center justify-around text-[#fff] wrapper">
      <div className="h-[4vh] w-full flex items-center">
        <h1 className="text-4xl text-[#e50914] font-bold ml-[4rem]">
          BANJOFLIX
        </h1>
      </div>
      <div className="h-[70vh] w-[24.5%] flex flex-col items-center justify-evenly bg-[rgba(0,0,0,.75)] mb-[7rem]">
        <div className=" h-[50%] w-full flex flex-col justify-between">
          <h2 className="text-[#fff] text-[2rem] font-bold ml-[4.5rem]">
            Sign In
          </h2>
          <form className="h-[80%] w-full flex flex-col justify-around items-center">
            <div className="min-h-[50%] w-full flex flex-col items-center justify-around">
              <input
                className="h-[3.2rem] w-[70%] placeholder:text-[#8c8c8c] rounded-[4px] indent-5 outline-none bg-[#333]"
                placeholder="Email or phone number"
              />
              <h3 className="text-[orange] mr-[52%] mb-[0.6rem] hidden">
                Enter a valid Email
              </h3>
              <input
                type="password"
                className="h-[3.2rem] w-[70%] placeholder:text-[#8c8c8c] rounded-[4px] indent-5 outline-none bg-[#333]"
                placeholder="Password"
              />
              <h3 className="text-[orange] ml-[2rem] mt-[2px] hidden">
                Your password must contain between 4 and 60 characters.
              </h3>
            </div>
            <div className="flex flex-col items-center justify-around w-full h-[38%]">
              <button className="w-[70%] h-[3rem] rounded-[3px] text-[#fff] font-medium bg-[#e50914]">
                Sign In
              </button>
              <div className="w-[70%] flex items-center justify-between">
                <span className="w-[42%] flex justify-around">
                  <input type="checkbox" />
                  <h3 className="text-[#b3b3b3] text-[0.95rem]">Remember me</h3>
                </span>
                <h3 className="text-[#b3b3b3] text-[0.85rem]">Need help?</h3>
              </div>
            </div>
          </form>
        </div>
        <div className=" h-[25%] flex flex-col items-center justify-center">
          <div className="flex w-[70%]">
            <h3 className="text-[#737373]">New to Netflix?</h3>
            <h3 className="text-[#fff] ml-[5px]">Sign up now</h3>
          </div>
          <div className="text-[0.95rem] w-[70%] leading-[1.3rem] mt-[0.7rem]">
            <h3 className="text-[#8c8c8c] text-[0.9rem]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more.</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="h-[20vh] w-full flex flex-col items-center justify-around text-[#737373] bg-[rgba(0,0,0,.75)]">
        <h3 className="mr-[45%]">Questions? Contact Us.</h3>
        <div className="h-[30%] w-[50%] flex justify-around mr-[10.5%]">
          <div className="flex flex-col justify-around">
            <h3 className="text-[0.95rem]">FAQ</h3>
            <h3 className="text-[0.95rem]">Cookie Preferences</h3>
          </div>
          <div className="flex flex-col justify-around">
            <h3 className="text-[0.95rem]">Help Center</h3>
            <h3 className="text-[0.95rem]">Corporate Information</h3>
          </div>
          <h3 className="text-[0.95rem] mt-[0.2rem]">Terms of Use</h3>
          <h3 className="text-[0.95rem] mt-[0.2rem]">Privacy</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
