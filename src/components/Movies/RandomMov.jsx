import { FaInfoCircle, FaPlay } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { movieSelected, randSelected, randomTitle, randomOverview } from "../../atoms";

const RandomMov = () => {
  const [randTitle, setRandTitle] = useRecoilState(randomTitle);
  const [randOverview, setRandOverview] = useRecoilState(randomOverview);
  const [hasPlayed, setHasPlayed] = useRecoilState(randSelected);
  return (
    <div className="h-[35%] w-1/2 flex flex-col items-start justify-around  mt-[4%] ml-[3%] randesc-holder">
      <h1 className="w-[70%] text-[3.2rem] text-[white] font-[500] movie-title">
        {randTitle}
      </h1>
      <h2 className="w-[70%] text-[1.3rem] text-[white] movie-descr">
        {randOverview}
      </h2>
      <div className="h-[30%] w-[35%] flex items-center justify-around movbtns-holder">
        <button
          className="h-[2.8rem] w-[40%] flex items-center justify-center rounded-[4px] bg-[#e5e7eb]"
          onClick={() => setHasPlayed(true)}
        >
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
        <button
          className="h-[2.8rem] w-[51%] flex items-center justify-center rounded-[4px] bg-[rgba(128,128,128,0.7)]"
          onClick={() => setHasPlayed(true)}
        >
          <span>
            <FaInfoCircle
              style={{
                cursor: "pointer",
              }}
              size={20}
              fill="white"
            />
          </span>
          <h3 className="ml-[0.6rem]">More Info</h3>
        </button>
      </div>
    </div>
  );
};

export default RandomMov;
