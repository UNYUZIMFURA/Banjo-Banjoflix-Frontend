const Links = (props) => {
  return (
    <div className="h-[90%] flex flex-col justify-around">
      <h4 className="text-[#737373] text-[0.8rem]">{props.one}</h4>
      <h4 className="text-[#737373] text-[0.8rem]">{props.two}</h4>
      <h4 className="text-[#737373] text-[0.8rem]">{props.three}</h4>
      <h4 className="text-[#737373] text-[0.8rem]">{props.four}</h4>
    </div>
  );
};

export default Links;
