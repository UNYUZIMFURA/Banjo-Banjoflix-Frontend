import {HiOutlineChevronRight} from 'react-icons/hi'

const Start = () => {
  return (
    <form className="flex w-full text-[#fff]">
      <input
        className="h-[4.3rem] w-[67%] border-[1px] border-[#8c8c8c] indent-2 outline-none text-[#000] placeholder:text-[#8c8c8c]"
        placeholder="Email address"
      ></input>
      <button className="flex justify-center items-center h-[4.3rem] w-[33%] bg-[#f40612]">
        <span className="text-[1.85rem]">Get Started</span>
       <HiOutlineChevronRight size={28} style={{
        marginTop: "2px",
        marginLeft: "0.5rem"
       }}/>
      </button>
    </form>
  );
};

export default Start;
