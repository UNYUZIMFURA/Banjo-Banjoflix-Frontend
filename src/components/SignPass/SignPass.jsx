import Footer2 from "../CodeReduction/Footer2";
import Header from "../CodeReduction/Header";

const SignPass = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-[70%] w-full flex flex-col justify-around items-center">
        <Header />
        <div className="h-[80%] w-[26%] flex flex-col">
          <div className="h-[30%] w-full flex flex-col justify-between ">
            <h3 className="text-[0.8rem]">
              STEP <span className="text-[#737373] font-medium">1</span> OF
              <span className="text-[#737373] font-medium"> 3</span>
            </h3>
            <div className="">
              <h2 className="text-[2rem] text-[#333] font-medium leading-[2.5rem]">
                Welcome back! <br />
                Joining Banjoflix is easy
              </h2>
            </div>
            <h3 className="text-[#333] w-[80%]">
              Enter your password and you'll be watching in no time.
            </h3>
          </div>
          <div className="h-[50%] flex flex-col justify-around mt-[.9rem]">
            <div className="h-[20%]flex flex-col justify-around">
              <h3 className="text-[#333]">Email</h3>
              <h3 className="text-[#333] font-medium text-[1rem]">
                joykevinrobin1@gmail.com
              </h3>
            </div>
            <form className="h-[70%] flex flex-col justify-around">
              <input
                type="password"
                className="w-[90%] h-[3.5rem] border-[1px] border-[#737373] indent-3 outline-none"
                placeholder="Enter your password"
              ></input>

              <h3 className="text-[#0071eb]">Forgot your password?</h3>
              <button className="w-[90%] h-[3.5rem] bg-[red]  rounded-[3px] text-[#fff]  cursor-pointer">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer2 height="20vh" />
    </div>
  );
};

export default SignPass;
