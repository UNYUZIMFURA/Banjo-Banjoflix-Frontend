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
    } else {
      quest.style.marginBottom = 0;
    }
  }

  return (
    <div className="w-full flex flex-col justify-between">
      <div
        className="flex items-center justify-between bg-[#303030] h-[8vh] mb-[0.55rem]"
        id={props.id}
      >
        <h2 className="ml-[2rem] text-[#fff] text-[1.6rem]">
          {props.question}
        </h2>
        <BsPlus
          onClick={Toggle}
          className="mr-[1.5rem] cursor-pointer"
          size={45}
          style={{ color: "white" }}
        />
      </div>

      {/* Am I currently selected for me to open (Selection by Id)? By Question! */}

      {activeQuest === props.id && visibility ? (
        <div className="flex flex-col items-center bg-[#303030] mt-[1px] mb-[0.5rem]">
          <h1 className="text-[#fff] text-[1.625rem] w-[90%]">
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
