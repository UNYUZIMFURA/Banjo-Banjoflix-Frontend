import Links from "./Links";
import Link from "./Link";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="h-[34.5vh] flex flex-col items-center justify-around bg-[#000]">
      <h2 className="text-[#737373]  mt-[2rem] mr-[31%]">
        Question? Contact Us.
      </h2>
      <div className="h-[55%] w-[45%] flex items-center justify-around links-holder">
        <Links
          one="FAQ"
          two="Investor Relations"
          three="Privacy"
          four="Speed Test"
        />

        <Links
          one="Help Center"
          two="Jobs"
          three="Cookie Preferences"
          four="Legal Notices"
        />

        <Links
          one="FAQ"
          two="Ways to Watch"
          three="Corporate Information"
          four="Only on Netflix"
        />

        <Link
          one="Media Center"
          two="Terms of Use"
          three="Contact Us"
          four=""
        />
      </div>
      <h1 className="text-[#737373]">&copy; Banjo Ltd - 2022</h1>
    </div>
  );
};

export default Footer;
