import "./WhyStyle.css";

const WhyUs = (props) => {
  return (
    <div className="h-[48.6vh] flex items-center justify-center border-b-[8px] border-b-[#222] bg-[#000] holder-1">
      <div className="w-[30%] text-[#fff] holder-2">
        <h1 className="text-[3.125rem] font-medium">{props.title}</h1>
        <h2 className="text-[1.625rem] mt-[0.5rem]">{props.description}</h2>
      </div>
      <div className="h-full flex justify-center relative tv">
        <img src={props.img} alt="" className="w-full h-[90%] z-10" />
        <div className="h-[26.1vh] w-[24.4vw] absolute top-[5.4rem] left-[4.5rem] vid-holder">
          <video className="w-full" autoPlay muted loop>
            <source src={props.vid} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
