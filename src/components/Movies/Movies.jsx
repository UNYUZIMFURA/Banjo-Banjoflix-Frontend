import "./Movies.css";
import requests from "./Fetch";
import Row from "./Row";
import NavBar from "./NavBar";

const Movies = () => {
  return (
    <div className="flex flex-col justify-around relative">
      <div className="h-screen trending-holder">
        <NavBar />
        <div className="hidden h-[90vh] w-[50%] top-[10%] z-20 left-[25%] fixed bg-[yellow]"></div>
      </div>
      <div className="w-full absolute top-[87%] flex flex-col rows-holder">
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
};

export default Movies;
