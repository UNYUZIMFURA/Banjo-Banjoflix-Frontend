const Plans = (props) => {
    return (
        <div className="w-full flex items-center justify-around h-[6vh]">
                <h2 className="w-[30%] text-[#737373]">{props.descr}</h2>
                <h2 className="text-[#737373">{props.descr2}</h2>
                <h2 className="text-[#737373">{props.descr3}</h2>
              </div>
    )
}

export default Plans