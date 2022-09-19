import { useNavigate } from "react-router-dom";
import Account from "../../images/avatar.png";
import './Who.css'


const WhoIs = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col bg-[#000]">
      <div className="h-[60%] flex flex-col justify-between">
        <div className="h-[15%] w-[20%] flex items-center justify-center">
          <h1 className="text-4xl text-[#e50914] font-bold cursor-pointer" onClick={() => navigate('/')}>BANJOFLIX</h1>
        </div>
        <div className="h-[60%] flex flex-col justify-between">
          <h1 className="text-[2.5rem] text-center text-[#fff]">
            Who's watching?
          </h1>
          <div className="h-[70%]  flex items-start justify-center">
            <div className="h-[67%] w-[6.5%] flex flex-col justify-between rounded-[3px] cursor-pointer who-img-holder" onClick={() => navigate("/browse")}>
              <img
                src={Account}
                alt=""
                className="w-full h-[100%] object-cover rounded-[3px] cursor-pointer"
              />
              <h2 className="w-full text-[1.2rem] text-[#fff] text-center font-[300]">
                Click Image!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIs;
