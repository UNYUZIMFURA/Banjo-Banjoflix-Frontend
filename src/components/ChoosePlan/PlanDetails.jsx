import './ChoosePlan.css'
import { TiTick } from "react-icons/ti";

const PlanDetails = (props) => {
  return (
    <div
      className="flex flex-col items-center justify-around font-[300]"
      style={{
        height: `${props.height}`,
        width: `${props.width}`,
      }}
    >
      <div className="h-[25%] w-full flex items-center justify-center text-[#333]">
        <TiTick
          style={{
            color: "#e50914",
            marginBottom: props.mb,
          }}
          size={26}
        />
        <h2
          className="w-[85%] text-[1.2rem] leading-[1.4rem] ml-[0.3rem]"
          style={{
            width: `${props.width1}`,
            lineHeight: props.leading,
          }}
        >
          No commitments, cancel anytime.
        </h2>
      </div>
      <div className="h-[25%] w-full flex items-center justify-end text-[#333] ">
        <TiTick
          style={{
            color: "#e50914",
            marginBottom: props.mb,
          }}
          size={26}
        />
        <h2
          className="w-[90%] text-[1.2rem] leading-[1.4rem] ml-[0.3rem]"
          style={{
            width: `${props.width2}`,
            marginRight: props.alignment,
          }}
        >
          Everything on Banjoflix for one low price.
        </h2>
      </div>
      <div
        className=" h-[25%] flex items-center text-[#333] mr-[6rem]"
        style={{
          marginRight: props.bigMargin,
        }}
      >
        <TiTick
          style={{
            color: "#e50914",
            marginBottom: "0px",
          }}
          size={26}
        />
        <h2
          className="w-full text-[1.2rem] ml-[0.5rem]"
          style={{
            width: `${props.width3}`,
            marginLeft: props.ml,
            marginRight: props.mr,
          }}
        >
          No ads and no extra fees.Ever.
        </h2>
      </div>
    </div>
  );
};

export default PlanDetails;
