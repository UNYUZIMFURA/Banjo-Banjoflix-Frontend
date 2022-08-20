const PlanDetails = (props) => {
    return (
        <div className="flex flex-col justify-around" style={
            {
                height: `${props.height}`,
                width: `${props.width}`
            }
            }>
            <div className="w-full flex text-[gray] items-center h-[25%] ">
              <button>+</button>
              <h2 className="leading-[1.4rem] ml-[1.5rem]" style={{
                width: `${props.width1}`
              }}>
                No commitments, cancel anytime.
              </h2>
            </div>
            <div className="text-[gray] flex items-center h-[25%] ">
              <button>+</button>
              <h2 className="leading-[1.4rem] ml-[1.5rem]" style={{
                width: `${props.width2}`
              }}>
                Everything on Banjoflix for one low price.
              </h2>
            </div>
            <div className="text-[gray] flex items-center h-[25%] mr-[3rem]">
              <button>+</button>
              <h2 className="w-full ml-[1.5rem]">
                No ads and no extra fees.Ever.
              </h2>
            </div>
          </div>
    )
}

export default PlanDetails