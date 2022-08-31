import "./WhyStyle.css";

const WhyUs2 = (props) => {
  return (
    <div className="h-[48.6vh] flex items-center justify-center border-b-[8px] border-b-[#222] bg-[#000] holder-3">
      <div className="h-full w-[42%] flex flex-col items-center relative stranger-holder">
        <img src={props.img} alt="" className="w-[67%] stranger-img" />
        <div className="w-[44%] h-[6.3rem] flex items-center justify-around border-[2px] border-[hsla(0,0%,100%,.25)] rounded-[0.75rem] bg-[#000] absolute top-[16rem] box">
          <div className="h-[90%] w-[16%]">
            <img
              className="h-full w-full object-cover"
              src={props.subImg}
              alt=""
            />
          </div>
          <div className="text-[#fff]">
            <h2 className="font-medium">Stranger Things</h2>
            <h3 className="text-[#0071eb]">Downloading...</h3>
          </div>
          <div>
            <img src={props.gif} alt="" className="h-[3rem]" />
          </div>
        </div>
      </div>
      <div className="w-[30%] text-[#fff] holder-4">
        <h1 className="text-[3.125rem] leading-[4rem] font-medium">
          {props.title}
        </h1>
        <h2 className="text-[1.625rem] mt-[0.5rem]">{props.description}</h2>
      </div>
    </div>
  );
};

export default WhyUs2;
