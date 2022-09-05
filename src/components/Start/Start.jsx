import { useState, useEffect } from "react";
import "../Hero/Hero.css";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { MdDirectionsTransit } from "react-icons/md";

const Start = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    console.log(email);
    window.localStorage.setItem("enteredEmail", JSON.stringify(email));
  }, [submitted]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted((prevSubmitted) => !prevSubmitted);
    navigate("/signup/password");
  }

  return (
    <form className="flex w-full text-[#fff] start" onSubmit={handleSubmit} >
      <input
        type="email"
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
