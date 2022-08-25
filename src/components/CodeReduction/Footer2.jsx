import '../SignPass/SignPass.css'

const Footer2 = (props) => {
  return (
    <div
      className="w-full flex flex-col justify-around text-[#737373] bg-[#f3f3f3] footer-2"
      style={{
        height: `${props.height}`,
      }}
    >
      <h3 className="ml-[5%]">Questions? Contact us.</h3>
      <div className="h-[40%] w-[64%] flex justify-around">
        <div className="flex flex-col justify-around">
          <h3>FAQ</h3>
          <h3>Cookie Preferences</h3>
        </div>
        <div className="flex flex-col justify-around">
          <h3>Help Center</h3>
          <h3>Corporate Information</h3>
        </div>
        <h3 className="mt-[0.3rem] terms">Terms of Use</h3>
        <h3 className="mt-[0.3rem] privacy">Privacy</h3>
      </div>
    </div>
  );
};

export default Footer2;
