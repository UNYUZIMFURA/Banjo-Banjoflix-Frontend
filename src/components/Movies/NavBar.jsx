import "./Movies.css";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import AccountImg from "../../images/account.png";

const NavBar = () => {
  return (
    <div className="h-[10%] w-full fixed top-0 text-[#fff] flex items-center justify-between z-10 nav">
      <div className="w-[48%]  flex justify-between items-center ml-[3%] genres-holder">
        <a href="/">
          <h1 className="text-3xl text-[#e50914] font-bold cursor-pointer logo">
            BANJOFLIX
          </h1>
        </a>
        <div className="w-[80%] h-full flex justify-around items-center cursor-pointer">
          <h3 className="">Home</h3>
          <h3 className="">TV Shows</h3>
          <h3 className="">Movies</h3>
          <h3 className="">Latest</h3>
          <h3 className="">My List</h3>
          <h3 className="">Browse by Languages</h3>
        </div>
      </div>
      <div className="w-[15%] h-1/2  flex justify-between items-center mr-[3%] cursor-pointer selection-types">
        <FiSearch />
        <h3>Kids</h3>
        <h3>DVD</h3>
        <FiBell />
        <div className="h-full w-[27%] flex items-center justify-around cursor-pointer">
          <div className="h-[67%] w-[46%] rounded-[3px]">
            <img
              src={AccountImg}
              alt=""
              className="h-full w-full rounded-[3px] object-cover"
            />
          </div>
          <FiArrowDown />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
