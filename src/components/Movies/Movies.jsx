import "./Movies.css";
import { useRecoilState } from "recoil";
import { movieSelected } from "../../atoms";
import RandomMov from "./RandomMov";
import MovieBox from "./MovieBox";
import requests from "./Fetch";
import Row from "./Row";
import NavBar from "./NavBar";

const Movies = () => {
  const [hasSelected, setHasSeleted] = useRecoilState(movieSelected);

  return (
    <div className="flex flex-col justify-around relative">
      <div className="h-[90vh] flex items-center justify-start trending-holder">
        <NavBar />
        <RandomMov />
        {hasSelected ? (
          <div className="h-screen w-full fixed z-10 test">
            <MovieBox />
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-col absolute top-[87%] rows-holder">
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} mtop="2.4rem"/>
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          mtop="2.4rem"
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} mtop="2.4rem"/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} mtop="2.4rem" />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} mtop="2.4rem" />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} mtop="2.4rem" />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} mtop="2.4rem" />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} mtop="2.4rem" />
      </div>
    </div>
  );
};

export default Movies;
