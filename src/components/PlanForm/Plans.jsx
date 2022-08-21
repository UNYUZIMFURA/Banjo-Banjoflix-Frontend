const Plans = (props) => {
  return (
    <div className="h-[6vh] w-full flex items-center justify-between border-b-[1px] border-[#ccc]">
      <div className="h-full w-[45%] flex items-center justify-start">
        <h2 className="text-[#333]">{props.descr}</h2>
      </div>
      <div className="h-full w-[40%] flex items-center justify-around bg-[white]">
        <h2 className="text-[#737373] font-[500]">{props.descr2}</h2>
        <h2 className="text-[#737373 text-[#e50914] font-[500]">
          {props.descr3}
        </h2>
      </div>
    </div>
  );
};

export default Plans;
