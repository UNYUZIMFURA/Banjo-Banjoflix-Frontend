import "./Movies.css";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  randSelected,
  currentMov,
  movieSelected,
  randomTitle,
  randomOverview,
  overview,
  air_date,
  originalLanguage,
  vote_average,
  vote_count,
  title,
} from "../../atoms";
import axio from "../../axios";
import request from "./Fetch";
import RandomMov from "./RandomMov";
import MovieBox from "./MovieBox";
import requests from "./Fetch";
import Row from "./Row";
import NavBar from "./NavBar";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const Movies = () => {
  const [randUrl, setRandUrl] = useRecoilState(currentMov);
  const [randomSelected, setRandomSelected] = useRecoilState(randSelected);
  const [hasSelected, setHasSelected] = useRecoilState(movieSelected);
  const [changeTitle, setChangeTitle] = useRecoilState(randomTitle);
  const [changeOverview, setChangeOverview] = useRecoilState(randomOverview);
  const [randOverview, setRandOverview] = useRecoilState(overview);
  const [randDate, setRandDate] = useRecoilState(air_date);
  const [randLang, setRandLang] = useRecoilState(originalLanguage);
  const [randVotAvg, setRandVotAvg] = useRecoilState(vote_average);
  const [randCount, setRandCount] = useRecoilState(vote_count);
  const [randTitle, setRandTitle] = useRecoilState(title);
  const [randomMovie, setRandomMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axio.get(request.fetchNetflixOriginals);
      setRandomMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    setChangeTitle(
      randomMovie?.title || randomMovie?.name || randomMovie?.original_name
    );
    setChangeOverview(randomMovie.overview);
  }, [randomMovie]);

  // console.log(randomMovie)

  useEffect(() => {
    console.log("Lemme llok");
  }, [randomSelected]);

  function doubleCall(randMov) {
    handleRand(randMov);
    setRandomSelected(true);
  }

  function handleRand(mov) {
    if (randUrl) {
      setRandUrl("");
    } else {
      setRandOverview(mov.overview);
      setRandDate(mov?.first_air_date || mov?.release_date);
      setRandLang(mov.original_language);
      setRandVotAvg(mov.vote_average);
      setRandCount(mov.vote_count);
      setRandTitle(mov?.name || mov?.original_name || mov?.name || mov?.title);
      movieTrailer(
        mov?.name ||
          mov?.title ||
          mov?.original_title ||
          mov?.original_name || { tmdbId: mov.id }
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setRandUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="flex flex-col justify-around relative">
      <div
        className="h-[90vh] flex items-center justify-start trending-holder"
        style={{
          backgroundImage: `url(${base_url}${randomMovie?.backdrop_path})`,
        }}
      >
        <NavBar />
        <RandomMov />
        {hasSelected || randomSelected ? (
          <div className="h-screen w-full fixed top-0 z-10 test">
            <MovieBox />
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-col absolute top-[87%] rows-holder">
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          mtop="2.4rem"
        />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          mtop="2.4rem"
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          mtop="2.4rem"
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          mtop="2.4rem"
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          mtop="2.4rem"
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          mtop="2.4rem"
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          mtop="2.4rem"
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          mtop="2.4rem"
        />
      </div>
    </div>
  );
};

export default Movies;
