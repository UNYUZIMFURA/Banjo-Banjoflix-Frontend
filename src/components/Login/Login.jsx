import "./Login.css";

const Login = () => {
  return (
    <div className="text-[#fff] h-[120vh] flex flex-col items-center justify-around wrapper">
      <div className="flex items-center w-full h-[4vh]">
        <h1 className="text-[#e50914] font-bold text-4xl">BANJOFLIX</h1>
      </div>
      <div className="flex flex-col justify-evenly items-center bg-[rgba(0,0,0,.75)] h-[70vh] w-[26%]">
        <div className="h-[50%] w-full  items-center flex flex-col justify-between">
          <h2 className="text-[#fff] text-[1.6rem] font-bold">Sign In</h2>
          <form className="w-full flex flex-col justify-around items-center h-[80%]">
            <div className="w-full min-h-[50%] flex flex-col items-center justify-around">
              <input
                className="w-4/5 h-[3rem] bg-[#737373] placeholder:text-[#fff] rounded-[2px] indent-4 outline-none"
                placeholder="Email or phone number"
              />
              <h3 className="mr-[52%] text-[orange] mb-[0.6rem] hidden">
                Enter a valid Email
              </h3>
              <input
                className="w-4/5 h-[3rem] bg-[#737373] placeholder:text-[#fff] rounded-[2px] indent-4 outline-none"
                placeholder="Password"
              />
              <h3 className="text-[orange] ml-[2rem] mt-[2px] hidden">
                Your password must contain between 4 and 60 characters.
              </h3>
            </div>
            <div className="flex flex-col justify-between items-center w-full h-[30%]">
              <button className="w-4/5 h-[3rem] rounded-[3px] text-[#fff] bg-[red]">
                Sign In
              </button>
              <div className="w-4/5 flex justify-between">
                <span className="w-[38%] flex justify-around">
                  <input type="checkbox" />
                  <h3 className="text-[#737373]">Remember me</h3>
                </span>
                <h3 className="text-[#737373]">Need help?</h3>
              </div>
            </div>
          </form>
        </div>
        <div className="h-[15%] flex flex-col justify-around items-center">
          <div className="flex w-[80%]">
            <h3 className="text-[#737373]">New to Netflix?</h3>
            <h3 className="text-[#fff] ml-[5px]">Sign up now</h3>
          </div>
          <div className="w-[80%]">
            <h3>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more.</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[#737373] justify-around items-center bg-[rgba(0,0,0,.75)] h-[25vh] w-full">
        <h3 className="mr-[41%]">Questions? Contact Us.</h3>
        <div className="flex w-[50%] justify-around h-[30%]">
          <div className="flex flex-col justify-around">
            <h3>FAQ</h3>
            <h3>Cookie Preferences</h3>
          </div>
          <div className="flex flex-col justify-around">
            <h3>Help Center</h3>
            <h3>Corporate Information</h3>
          </div>
          <h3 className="mt-[0.2rem]">Terms of Use</h3>
          <h3 className="mt-[0.2rem]">Privacy</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
