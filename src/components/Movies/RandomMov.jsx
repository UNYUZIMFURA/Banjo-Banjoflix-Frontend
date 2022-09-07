import { FaInfoCircle, FaPlay } from "react-icons/fa";

const RandomMov = () => {
  return (
    <div className="h-[35%] w-1/2 flex flex-col items-start justify-around  mt-[4%] ml-[3%] randesc-holder">
      <h1 className="w-[70%] text-[3.2rem] text-[white] font-[500] movie-title">
        YOUR BOYFRIEND IS MINE
      </h1>
      <h2 className="w-[70%] text-[1.3rem] text-[white] movie-descr">
        A fictional history of two legendary revolutionaries' journey away from
        home before they began fighting for their country in the 1920s.
      </h2>
      <div className="h-[30%] w-[35%] flex items-center justify-around movbtns-holder">
        <button className="h-[2.8rem] w-[40%] flex items-center justify-center rounded-[4px] bg-[#e5e7eb]">
          <span>
            <FaPlay
              style={{
                cursor: "pointer",
              }}
              size={20}
            />
          </span>
          <h3 className="ml-[0.6rem]">Play</h3>
        </button>
        <button className="h-[2.8rem] w-[51%] flex items-center justify-center rounded-[4px] bg-[#737373]">
          <span>
            <FaInfoCircle
              style={{
                cursor: "pointer",
              }}
              size={20}
              fill="red"
            />
          </span>
          <h3 className="ml-[0.6rem]">More Info</h3>
        </button>
      </div>
    </div>
  );
};

export default RandomMov;
