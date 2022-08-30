import Hero from "../Hero/Hero";
import WhyUs from "../WhyUs/WhyUs";
import WhyUs2 from "../WhyUs/WhyUs2";
import WhyUs3 from "../WhyUs/WhyUs3";
import WhyUs4 from "../WhyUs/WhyUs4";
import Faq from "../FAQ/Faq";
import Footer from "../Footer/Footer";
import Tv from "../../images/tv.png";
import Phone from "../../images/mobile.jpg";
import Stranger from "../../images/stranger.png";
import Kids from "../../images/kids.png";
import Download from "../../images/download-icon.gif";
import MovVid from "../../Videos/tv-video.m4v";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyUs
        title="Enjoy on your TV."
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img={Tv}
        vid={MovVid}
      />

      <WhyUs2
        title="Download your shows to watch offline."
        description="Save your favorite easily and always have something to watch"
        img={Phone}
        subImg={Stranger}
        gif={Download}
      />

      <WhyUs3
        title="Watch everywhere."
        description="Stream unlimited movies and TV shows on your phone,tablet,laptop, and TV."
      />

      <WhyUs4
        title="Create profiles for kids."
        description="Send kids on adventures with their favorite characters in a space made just for them__ free with your membership"
        img={Kids}
      />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
