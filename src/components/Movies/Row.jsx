import { useEffect, useState } from "react";
import axio from "../../axios";
import { useRecoilState } from "recoil";
import {
  movieSelected,
  currentMov,
  air_date,
  genres,
  originalLanguage,
  vote_average,
  vote_count,
  overview,
  title,
} from "../../atoms";
import "./Movies.css";
import { FiPlay } from "react-icons/fi";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [controlMoviePlay, setControlMoviePlay] = useState(false);
  const [trailerUrl, setTrailerUrl] = useRecoilState(currentMov);
  const [isSelected, setIsSelected] = useRecoilState(movieSelected);
  const [changeOverview, setChangeOverview] = useRecoilState(overview);
  const [changeDate, setChangeDate] = useRecoilState(air_date);
  const [changeLang, setChangeLang] = useRecoilState(originalLanguage);
  const [changeVotAvg, setChangeVotAvg] = useRecoilState(vote_average);
  const [changeCount, setChangeCount] = useRecoilState(vote_count);
  const [changeTitle, setChangeTitle] = useRecoilState(title);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axio.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  function doubleCall(movToPass) {
    handleMovie(movToPass);
    setIsSelected(true);
  }

  function handleMovie(mov) {
    console.log(mov);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      setChangeTitle(mov.title || "");
      setChangeOverview(mov.overview || "");
      setChangeDate(mov.first_air_date || mov.release_date || "");
      setChangeLang(mov.original_language || "");
      setChangeVotAvg(mov.vote_average || "");
      setChangeCount(mov.vote_count || "");
      movieTrailer(
        mov?.name ||
          mov?.title ||
          mov?.original_title ||
          mov?.original_name || { tmdbId: mov.id }
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  }
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
            {/* {console.log(movie)} */}
            <img
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              className="h-full w-full rounded-[4px] object-cover movie-img"
            />
            <FiPlay
              onClick={() => doubleCall(movie)}
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
