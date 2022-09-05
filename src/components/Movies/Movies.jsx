import "./Movies.css";
import { useRecoilState } from "recoil";
import { movieSelected } from "../../atoms";
import { FaPlay, FaAdd, FaLike, FaSpeakerDeck } from "react-icons/fa";
import requests from "./Fetch";
import Row from "./Row";
import NavBar from "./NavBar";

const Movies = () => {
  const [hasSelected] = useRecoilState(movieSelected);
  console.log(hasSelected);
  return (
    <div className="flex flex-col justify-around relative">
      <div className="h-screen trending-holder">
        <NavBar />
        {hasSelected ? (
          <div className="h-screen w-full fixed z-10 test">
            <div className="h-[88vh] w-[48%] flex flex-col fixed top-[4%] left-[25%] rounded-t-[5px] watch-movie">
              <div className="absolute top-[2%] right-[2%] h-[4.2vh] w-[2.2vw] bg-[#000] rounded-full cursor-pointer z-40"></div>
              <div className="h-[10%] bg-[gray] w-full flex items-center justify-between absolute top-[50%] left-0 z-40">
                <div className="h-full w-[26%] bg-[yellow] flex items-center justify-around ml-[1rem]">
                  <button className="h-[52%] w-[50%] flex items-center justify-center rounded-[4px] bg-[red]">
                    <span>
                      <FaPlay />
                    </span>
                    <h3 className="ml-[0.6rem]">Play</h3>
                  </button>
                  <div className="flex items-center justify-center h-[52%] w-[18%] border-[1px] rounded-full"></div>
                  <div className="flex items-center justify-center h-[52%] w-[18%] border-[1px] rounded-full"></div>
                </div>
                <div className="flex items-center justify-center h-[52%] w-[5%] border-[1px] rounded-full mr-[1rem]"></div>
              </div>
              <div className="h-[65%] w-full z-30 rounded-t-[5px] bg-[red]"></div>
              <div className="h-[30%] w-full flex flex-col items-center justify-around movie-desc">
                <div className="h-[70%] w-full flex justify-evenly ">
                  <div className="h-full w-[55%] flex flex-col justify-evenly">
                    <div className="w-[45%] flex items-center justify-evenly movie-details">
                      <h3 className="text-green-400 font-semibold">
                        97% Match
                      </h3>
                      <h3 className="text-[#fff]">15-07-2022</h3>
                      <div className="h-[2vh] w-[11%] flex items-center justify-center border-[1px]">
                        <h5 className="text-[0.8rem] text-[white]">HD</h5>
                      </div>
                    </div>
                    <h2 className="text-[#fff] font-[400]">
                      After unwritingly stealing money from a cartel, a
                      cash-strapped professor finds the only way to save his
                      broken family is by working as a drug courier.
                    </h2>
                  </div>
                  <div className="h-full w-[30%] flex flex-col justify-around">
                    <h3 className="text-[#737373]">
                      Genre: <span className="text-[white]"> Comedy</span>
                    </h3>
                    <h2 className="text-[#737373]">
                      Original language:{" "}
                      <span className="text-[white]">en</span>
                    </h2>
                    <h2 className="text-[#737373]">
                      Voted By: <span className="text-[white]">5000</span>
                    </h2>
                  </div>
                </div>
                <h1 className="text-[#737373]">
                  &copy; Banjo Ltd - 2022 In Association with TMDB
                </h1>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-col absolute top-[87%] rows-holder">
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
