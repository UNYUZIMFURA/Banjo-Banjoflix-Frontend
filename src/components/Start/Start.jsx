import { useState, useEffect, useContext } from "react";
import "../Hero/Hero.css";
import { HiOutlineChevronRight } from "react-icons/hi";
import StateContext from "../../helpers/useContext";

const Start = () => {
  const [email, setEmail] = useState("");
  const {enteredEmail, setEnteredEmail} = useContext(StateContext)

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnteredEmail(email)
  }
console.log(enteredEmail)
  useEffect(() => {
    fetch("http://localhost:3030/homepage", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <form className="flex w-full text-[#fff] start" onSubmit={handleSubmit}>
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
