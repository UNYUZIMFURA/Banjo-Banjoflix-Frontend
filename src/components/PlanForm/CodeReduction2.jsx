const CodeReduction2 = () => {
  return (
    <div className="flex flex-col h-full justify-around">
      <div className="h-[20%] w-[5rem] bg-[#e50914] rounded-[2px]"></div>
      <div className="h-[20%] w-[5rem] bg-[#e50914] rounded-[2px]"></div>
      <div className="h-[20%] w-[5rem] bg-[#e50914] rounded-[2px]"></div>
      <div className="h-[20%] w-[5rem] bg-[#e50914] rounded-[2px]"></div>
    </div>
  );
};

const CodeReduction3 = () => {
  return (
    <div className="h-[25vh] w-[45%] flex flex-col items-center justify-around text-[#737373] ">
      <div>
        <h2 className="text-[0.9rem]">
          HD[720p], Full HD[1080p], Ultra HD[4K] and HDR availability subject to
          your internet service and device capabilities. Not all content is
          available in all resolutions. See our{" "}
          <span className="text-[#0071eb]">Terms of use</span> for more details
        </h2>
        <h2 className="text-[0.9rem] mt-[0.8rem]">
          Only people who live with you may use your account, Watch on 4
          different devices at the same time with Premium and Standard and 1
          with basic and Mode
        </h2>
      </div>
      <button className="h-[4rem] w-[50%] text-[#fff] text-[1.2rem] rounded-[4px] bg-[#e50914]">
        Next
      </button>
    </div>
  );
};

export { CodeReduction2, CodeReduction3 };
