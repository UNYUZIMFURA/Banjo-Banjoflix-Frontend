import Links from "./Links";
import Link from "./Link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-around items-center h-[34.5vh] bg-[#000]">
      <h2 className="text-[#737373]  mt-[2rem] mr-[31%]">Question? Contact Us.</h2>
      <div className="flex h-[55%] w-[45%] justify-around items-center">
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
