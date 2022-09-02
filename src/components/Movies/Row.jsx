import { useEffect, useState } from "react";
import axio from "../../axios";
import "./Movies.css";
import TestImg from "../../images/kids.png";
import { FiPlay } from "react-icons/fi";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
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
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await instance.get(props.fetchUrl);
  //     setMovies(request.data.results);
  //     return request;
  //   }
  //   fetchData();
  // }, [props.fetchUrl]);
  return (
    <div className="h-[21vh] flex flex-col justify-around mt-[1rem]">
      <h2 className="text-[1.3rem] text-[#fff] text-[#e5e5e5]">{props.title}</h2>
      <div className="h-[75%] w-full flex overflow-x-scroll">
        {movies.map((movie) => {
          return (
            <div className="h-full min-w-[17.5rem] relative single-movie ml-[0.3rem]">
              <img
                src={TestImg}
                alt=""
                className="w-full h-full rounded-[3px] object-cover movie-img"
              />
              <FiPlay
                style={{ color: "white" }}
                size={30}
                className="absolute top-[42%] left-[45%] cursor-pointer play-btn"
              />
              {/* <img src={`${base_url}${movie.poster_path}`} alt="Loading..." className="h-full w-full rounded-[3px] object-cover movie-img"/> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
