import { useEffect, useState } from "react";
import axio from "../../axios";
import { useRecoilState } from "recoil";
import { movieSelected } from "../../atoms";
import "./Movies.css";
import TestImg from "../../images/kids.png";
import { FiPlay } from "react-icons/fi";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [isSelected,setIsSelected] = useRecoilState(movieSelected)
  // const [movies, setMovies] = useState([])
  const [movies, setMovies] = useState([
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
    { name: "kevin" },
    { name: "james" },
  ]);
  // console.log(movies)
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axio.get(props.fetchUrl);
  //     setMovies(request.data.results);
  //     return request;
  //   }
  //   fetchData();
  // }, [props.fetchUrl]);
  return (
    <div className="h-[21vh] flex flex-col justify-around mt-[2.4rem] ml-[3.5rem] single-row">
      <h2 className="text-[1.3rem] text-[#fff] text-[#e5e5e5] ml-[0.3rem]">
        {props.title}
      </h2>
      <div className="h-[75%] w-full flex overflow-x-scroll movie-holder">
        {movies.map((movie) => {
          return (
            <div className="h-full min-w-[17.5rem] relative ml-[0.3rem] single-movie">
              <img
                src={TestImg}
                alt=""
                className="w-full h-full rounded-[4px] object-cover cursor-pointer movie-img"
              />
              {/* <img
                id={movie.id}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                className="h-full w-full rounded-[4px] object-cover movie-img"
              /> */}
              <FiPlay
                style={{ color: "white" }}
                size={30}
                className="opacity-0 absolute top-[42%] left-[44%] cursor-pointer play-btn"
                onClick={() => setIsSelected(true)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
