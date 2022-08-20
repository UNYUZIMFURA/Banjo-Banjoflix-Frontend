const Footer2 = (props) => {
    return (
        <div className="flex flex-col justify-around text-[black] w-full"
        style={{
          height: `${props.height}`
        }}>
        <h3 className="ml-[5%] text-[#737373]">Questions? Contact us.</h3>
        <div className="flex justify-around h-[40%] w-[64%] ">
          <div className="text-[#737373] flex flex-col justify-around">
            <h3>FAQ</h3>
            <h3>Cookie Preferences</h3>
          </div>
          <div className="text-[#737373] flex flex-col justify-around">
            <h3>Help Center</h3>
            <h3>Corporate Information</h3>
          </div>
          <h3 className="text-[#737373] mt-[0.3rem]">Terms of Use</h3>
          <h3 className="text-[#737373] mt-[0.3rem]">Privacy</h3>
        </div>
      </div>
    )
}

export default Footer2