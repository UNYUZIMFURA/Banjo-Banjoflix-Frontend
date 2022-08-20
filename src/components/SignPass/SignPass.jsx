import Footer2 from "../CodeReduction/Footer2";
import Header from "../CodeReduction/Header";

const SignPass = () => {
  return (
    <div className="h-screen justify-between flex flex-col">
      <div className="flex flex-col justify-around items-center h-[70%] w-full ">
        <Header />
        <div className="flex flex-col h-[80%] w-[26%]">
          <div className="w-full flex flex-col  h-[30%] justify-between ">
            <h3>
              STEP <span className="text-[#737373] font-medium">1</span> OF
              <span className="text-[#737373] font-medium">3</span>
            </h3>
            <div className="">
              <h2 className="text-[2rem] text-[#737373] font-medium leading-[2.5rem]">
                Welcome back! <br />
                Joining Netflix is easy
              </h2>
            </div>
            <h3 className="text-[#737373] w-[80%]">
              Enter your password and you'll be watching in no time.
            </h3>
          </div>
          <div className="flex flex-col justify-around h-[50%] ">
            <div className="flex flex-col justify-around h-[20%]">
              <h3 className="text-[#737373]">Email</h3>
              <h3 className="text-[#737373] font-medium">
                joykevinrobin1@gmail.com
              </h3>
            </div>
            <form className="h-[70%] flex flex-col justify-around">
              <input
                className="w-[90%] h-[3.5rem] border-[1px] border-[#737373] indent-3 outline-none"
                placeholder="Enter your password"
              ></input>

              <h3 className="text-[blue]">Forgot your password?</h3>
              <button className="w-[90%] h-[3.5rem] bg-[red]  rounded-[3px] text-[#fff]  cursor-pointer">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default SignPass;
