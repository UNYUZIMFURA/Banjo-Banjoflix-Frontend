import './WhyStyle.css'

const WhyUs2 = (props) => {
  return (
    <div className="flex items-center justify-center h-[48.6vh] border-b-[8px] border-b-[#222] bg-[#000]">
      <div className="h-full flex flex-col items-center w-[42%] relative">
        <img src={props.img} alt="" className="w-[67%]" />
        <div className="flex items-center justify-around w-[44%] h-[6.3rem] border-[2px] border-[hsla(0,0%,100%,.25)] rounded-[0.75rem] bg-[#000] absolute top-[16rem] box">
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
      <div className="w-[30%] text-[#fff]">
        <h1 className="text-[3.125rem] leading-[4rem] font-medium">
          {props.title}
        </h1>
        <h2 className="text-[1.625rem] mt-[0.5rem]">{props.description}</h2>
      </div>
    </div>
  );
};

export default WhyUs2;
