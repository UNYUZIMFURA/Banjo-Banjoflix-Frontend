import "./Faq.css";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { activeNow } from "../../atoms";

const Question2 = (props) => {
  const [visibility, setVisibility] = useState(false);
  const [activeQuest, setActiveQuest] = useRecoilState(activeNow);
  let [count, setCount] = useState(1);

  // Function to make sure only one question is open

  function Toggle() {
    handleClicks();
    setVisibility((prevVisibility) => !prevVisibility);
    setActiveQuest(props.id);
  }

  function handleClicks() {
    let quest = document.getElementById(props.id);
    setCount((prevCount) => prevCount + 1);
    if (count % 2 === 0) {
      quest.style.marginBottom = "0.55rem";
    }
     else if(count % 2 !== 0) {
      quest.style.marginBottom = 0;
    }
  }

  return (
    <div className="w-full flex flex-col justify-between">
      <div
        className="h-[8vh] flex items-center justify-between bg-[#303030] mb-[0.55rem] main-quest"
        id={props.id}
      >
        <h2 className="text-[#fff] text-[1.6rem] ml-[2rem]">
          {props.question}
        </h2>
        <BsPlus
          onClick={Toggle}
          className="mr-[1.5rem] cursor-pointer icon"
          size={45}
          style={{ color: "white" }}
        />
      </div>

      {/* Am I currently selected for me to open (Selection by Id)? By Question! */}

      {activeQuest === props.id && visibility ? (
        <div className="flex flex-col items-center bg-[#303030] mt-[1px] mb-[0.5rem]">
          <h1 className="w-[90%] text-[#fff] text-[1.625rem] answer">
            <br />
            {props.answer1}
            <br />
            <br />
            {props.answer2}
            <br />
            <br />
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default Question2;
