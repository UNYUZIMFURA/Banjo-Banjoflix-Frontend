import "./Movies.css";
import requests from "./Fetch";
import Row from "./Row";
import NavBar from "./NavBar";

const Movies = () => {
  return (
    <div className="h-screen flex flex-col justify-around">
      <NavBar />
      <div className="h-1/2 flex flex-col">
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      </div>
    </div>
  );
};

export default Movies;