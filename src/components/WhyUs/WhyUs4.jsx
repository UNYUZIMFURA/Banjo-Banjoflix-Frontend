import "./WhyStyle.css";

const WhyUs4 = (props) => {
  return (
    <div className="h-[55vh] flex items-center justify-center border-b-[8px] border-b-[#222] bg-[#000] holder-6">
      <div className="h-full flex items-center justify-center relative">
        <img src={props.img} alt="" className="w-[77%]" />
      </div>
      <div className="w-[30%] text-[#fff] final-div">
        <h1 className="text-[3.125rem] font-medium">{props.title}</h1>
        <h2 className="text-[1.625rem] mt-[0.5rem]">{props.description}</h2>
      </div>
    </div>
  );
};

export default WhyUs4;
