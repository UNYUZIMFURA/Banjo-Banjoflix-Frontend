import Stranger from '../../images/stranger.png'

const WhoIs = () => {
  return (
    <div className="h-screen flex flex-col bg-[#000]">
      <div className="h-[60%] flex flex-col justify-between">
<div className="h-[15%] w-[20%] flex items-center justify-center ">
<h1 className="text-4xl text-[#e50914] font-bold">BANJOFLIX</h1> 
</div>
<div className=" h-[60%] flex flex-col justify-between">
    <h1 className="text-[2.5rem] text-center text-[#fff]">Who's watching?</h1>
    <div className=" h-[70%]  flex items-start justify-center">
        <div className="h-[67%] w-[6.5%] flex flex-col justify-between rounded-[3px] cursor-pointer">
            <img src={Stranger} alt="" className="w-full h-[75%] object-cover rounded-[3px] cursor-pointer"/>
            <h2 className='text-[1.2rem] text-[#fff] text-center font-[300]'>Kevin</h2>
        </div>
    </div>
</div>
      </div>
    </div>
  );
};

export default WhoIs;