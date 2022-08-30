import { useState, useEffect } from "react";
import "../Hero/Hero.css";
import { HiOutlineChevronRight } from "react-icons/hi";

const Start = () => {
  const [email, setEmail] = useState("")

  function handleChange(e) {
    setEmail(e.target.value)
  }

//  useEffect(() => {
//   fetch()
//   .then(res => res.json())
//   .then(data => console.log(data))
//  })
  
  return (
    <form className="flex w-full text-[#fff] start">
      <input
      onChange={handleChange}
        className="h-[4.3rem] w-[67%] border-[1px] border-[#8c8c8c] indent-2 outline-none text-[#000] placeholder:text-[#8c8c8c] input-1"
        placeholder="Email address"
        value={email}
      ></input>
      <button className="h-[4.3rem] w-[33%] flex justify-center items-center bg-[#f40612] btn-1">
        <span className="text-[1.85rem]">Get Started</span>
        <HiOutlineChevronRight
          className="icon-2"
          size={28}
          style={{
            marginTop: "2px",
            marginLeft: "0.5rem",
          }}
        />
      </button>
    </form>
  );
};

export default Start;
