import "./Movies.css";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="h-[10%] w-full fixed text-[#fff] bg-[black] flex items-center justify-between nav">
      <div className="w-[48%]  flex justify-between items-center ml-[3%] genres-holder">
        <h1 className="text-3xl text-[#e50914] font-bold logo">BANJOFLIX</h1>
        <div className="w-[80%] h-full flex justify-around items-center">
          <h3 className="">Home</h3>
          <h3 className="">TV Shows</h3>
          <h3 className="">Movies</h3>
          <h3 className="">Latest</h3>
          <h3 className="">My List</h3>
          <h3 className="">Browse by Languages</h3>
        </div>
      </div>
      <div className="w-[15%] h-1/2  flex justify-between items-center mr-[3%] selection-types">
        <FiSearch />
        <h3>Kids</h3>
        <h3>DVD</h3>
        <FiBell />
        <div className="h-full w-[27%] flex items-center justify-around ">
          <div className="h-[65%] w-[48%] rounded-[3px] bg-[red]"></div>
          <FiArrowDown />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
