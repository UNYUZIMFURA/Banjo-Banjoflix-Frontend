const WhyUs3 = (props) => {
  return (
    <div className="flex items-center justify-around h-[26.5vh] border-b-[8px] border-b-[#222] bg-[#000]">
      <div className="w-[30%] mr-[30%] text-[#fff]">
        <h1 className="text-[3.125rem] font-medium">{props.title}</h1>
        <h2 className="text-[1.625rem] mt-[0.5rem]">{props.description}</h2>
      </div>
    </div>
  );
};

export default WhyUs3;
