import { useState } from "react";
import { useRecoilState } from "recoil";
import { movieSelected, currentMov } from "../../atoms";
import { BiLike } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import YouTube from "react-youtube";

const MovieBox = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const [watchMovie, setWatchMovie] = useRecoilState(currentMov)
  const [likeState, setLikeState] = useState(false);
  const [hasSelected, setHasSeleted] = useRecoilState(movieSelected);
  const [soundState, setSoundState] = useState(true);

  function toggleLike() {
    setLikeState((prevLikeState) => !prevLikeState);
  }

  function closeMovie() {
    setHasSeleted(false);
  }
  return (
    <div className="h-[88vh] w-[48%] flex flex-col fixed top-[4%] left-[25%] rounded-t-[5px] watch-movie">
      <div
        className="flex items-center justify-center absolute top-[2%] right-[2%] min-h-[2.3rem] min-w-[2.3rem] bg-[#000] rounded-full cursor-pointer z-40 close-btn"
        onClick={closeMovie}
      >
        <AiOutlineClose fill="white" size={20} onClick={closeMovie} />
      </div>
      <div className="h-[10%] bg-[rgb(31, 31, 31)] w-full flex items-center justify-between absolute top-[52%] left-0 z-40">
        <div className="h-full w-[26%] flex items-center justify-around ml-[2rem] vid-btns">
          <button className="h-[52%] w-[50%] flex items-center justify-center rounded-[4px] bg-[#e5e7eb]">
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
          <div className="min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center border-[1px] rounded-full">
            <IoAddOutline
              style={{
                cursor: "pointer",
                color: "white",
              }}
              size={25}
            />
          </div>
          <div className="min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center border-[1px] rounded-full">
            <BiLike
              style={{
                cursor: "pointer",
                color: "white",
              }}
              size={22}
              onClick={toggleLike}
              fill={likeState ? "#0071eb" : "#fff"}
            />
          </div>
        </div>
        <div className="min-h-[2.5rem] min-w-[2.5rem] flex items-center justify-center border-[1px] rounded-full mr-[1rem]">
          {soundState ? (
            <GiSpeaker
              style={{
                cursor: "pointer",
                color: "white",
              }}
              size={28}
              onClick={() => {
                setSoundState((prevSoundState) => !prevSoundState);
              }}
            />
          ) : (
            <GiSpeakerOff
              style={{
                cursor: "pointer",
                color: "white",
              }}
              size={28}
              onClick={() => {
                setSoundState((prevSoundState) => !prevSoundState);
              }}
            />
          )}
        </div>
      </div>
      <div className="h-[65%] w-full z-30 rounded-t-[5px] bg-[black]">
        {watchMovie && <YouTube videoId={watchMovie} opts={opts} />}
      </div>
      <div className="h-[30%] w-full flex flex-col items-center justify-around movie-desc">
        <div className="h-[70%] w-full flex items-center justify-evenly">
          <div className="h-full w-[55%] flex flex-col justify-evenly">
            <div className="w-[45%] flex items-center movie-details">
              <h3 className="text-green-400 font-semibold">97% Match</h3>
              <h3 className="text-[#fff] ml-[0.5rem]">15-07-2022</h3>
              <div className="h-[2vh] w-[11%] flex items-center justify-center border-[1px] ml-[0.5rem]">
                <h5 className="text-[0.8rem] text-[white]">HD</h5>
              </div>
            </div>
            <h2 className="text-[#fff] font-[400]">
              After unwritingly stealing money from a cartel, a cash-strapped
              professor finds the only way to save his broken family is by
              working as a drug courier.
            </h2>
          </div>
          <div className="h-4/5 w-[30%] flex flex-col justify-around">
            <h3 className="text-[#737373]">
              Genre: <span className="text-[white]"> Comedy</span>
            </h3>
            <h2 className="text-[#737373]">
              Original language: <span className="text-[white]">en</span>
            </h2>
            <h2 className="text-[#737373]">
              Voted By: <span className="text-[white]">5000</span>
            </h2>
          </div>
        </div>
        <h1 className="text-[#737373]">
          &copy; Banjo Inc - 2022 In Association with TMDB
        </h1>
      </div>
    </div>
  );
};

export default MovieBox;
