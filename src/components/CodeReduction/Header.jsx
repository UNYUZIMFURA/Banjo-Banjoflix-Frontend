const Header = (props) => {
  return (
    <div
      className="h-[9vh] w-full flex items-center justify-between border-b-[1px] border-[#e6e6e6]"
      style={{
        height: props.height,
      }}
    >
      <a href="/">
        <h1 className="text-4xl text-[#e50914] font-bold cursor-pointer ml-[3rem]">
          BANJOFLIX
        </h1>
      </a>
      <a href="/login">
        <h3 className="text-[1.2rem] text-[#333] font-[500] mr-[3rem]">
          Sign In
        </h3>
      </a>
    </div>
  );
};

export default Header;
