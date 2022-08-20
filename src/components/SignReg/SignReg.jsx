import Header from '../CodeReduction/Header'
import Footer2 from '../CodeReduction/Footer2'

const SignReg = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="h-[60vh] flex flex-col justify-between items-center">
<Header />
<div className='w-[26%] flex flex-col items-center justify-around h-[40vh]'>
    <div className='w-full h-[15%]'></div>
    <div className='h-[40%] w-[65%] flex flex-col justify-around items-center'>
        <h2 className='text-[1.5rem] font-medium leading-[1.9rem] text-center'>Finish setting up your account</h2>
        <h2 className='text-center text-[gray]'>Banjoflix is personalized for you. Create a password to watch on any device at any time.</h2>
    </div>
    <button className='text-[white] h-[3.2rem] w-[15rem] bg-[red] rounded-[3px]'>Next</button>
</div>
            </div>
            <Footer2 height="20vh"/>
        </div>
    )
}

export default SignReg