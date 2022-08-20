const WhyUs = (props) => {
  return (
    <div className="flex items-center justify-center h-[48.6vh] border-b-[8px] border-b-[#222] bg-[#000]">
      <div className="w-[30%] text-[#fff]">
        <h1 className="text-[3.125rem] font-medium">{props.title}</h1>
        <h2 className="text-[1.625rem] mt-[0.5rem]">{props.description}</h2>
      </div>
      <div className="flex justify-center h-full relative">
        <img src={props.img} alt="" className="w-full h-[90%] z-10" />
        <div className="bg-[red] h-[26.1vh] w-[24.4vw] absolute top-[5.4rem] left-[4.5rem]">
          <video className="w-full" autoPlay muted loop>
            <source src={props.vid} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
