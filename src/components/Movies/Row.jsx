import { useEffect, useState } from "react";
import uuid from "react-uuid";
import axio from "../../axios";
import { useRecoilState } from "recoil";
import { movieSelected, currentMov } from "../../atoms";
import "./Movies.css";
import TestImg from "../../images/kids.png";
import { FiPlay } from "react-icons/fi";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [trailerUrl, setTrailerUrl] = useRecoilState(currentMov);
  const [isSelected, setIsSelected] = useRecoilState(movieSelected);
  const [movies, setMovies] = useState([]);
  console.log("Rendering happened");
  useEffect(() => {
    async function fetchData() {
      const request = await axio.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  function doubleCall(movToPass) {
    // handleMovie(movToPass);
    setIsSelected(true);
    console.log('clicked')
  }

  // function handleMovie(mov) {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(mov?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         console.log(urlParams.get("v"));
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }
  return (
    <div
      className="h-[21vh] flex flex-col justify-around ml-[3.5rem] single-row"
      style={{
        marginTop: props.mtop,
      }}
    >
      <h2 className="text-[1.3rem] text-[#fff] text-[#e5e5e5] ml-[0.3rem]">
        {props.title}
      </h2>
      <div className="h-[75%] w-full flex overflow-x-scroll movie-holder">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="h-full min-w-[17.5rem] relative ml-[0.3rem] single-movie"
          >
            {/* <img
                src={TestImg}
                alt=""
                className="w-full h-full rounded-[4px] object-cover cursor-pointer movie-img"
              /> */}
            <img
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              className="h-full w-full rounded-[4px] object-cover movie-img"
            />
            <FiPlay
              onClick={doubleCall(movie)}
              style={{ color: "white" }}
              size={30}
              className="opacity-0 absolute top-[42%] left-[44%] cursor-pointer play-btn"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
