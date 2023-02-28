import logo from '../assets/logo.png'
import Facebook from '../assets/Facebook.png'

function Login({setlogin, login}) {
    if (!login) return
    return (
<div style={{backgroundColor:'rgba(0,0,0,0.5)'}} className='fixed top-0 left-0 h-screen w-full' onClick={(e)=>{
    if (e.target.className != 'form')
    {
        setlogin(false)
    }
}}>
    <div className='form flex items-center justify-start top-[50%] translate-y-[-50%] h-[400px] w-[400px] flex-col bg-white py-12 pb-48 py- absolute left-[50%] translate-x-[-50%] rounded-md'>
        <img src={logo} className='w-18'></img>
        <div className='flex justify-start flex-col'>
        <p className='font-normal py-1'>Email</p>
        <input className='outline outline-1 rounded w-[250px] h-[30px] flex justify-start px-2 py-1 font-light text-[#6F6F6F]' placeholder='Email'></input>
        </div>
        <div className='flex justify-start flex-col'>
        <p className='font-normal py-1'>Password</p>
        <input className='outline outline-1 rounded w-[250px] h-[30px] flex justify-start px-2 py-1 font-light text-[#6F6F6F]' placeholder='Password'></input>
        <p className='text-[#6F6F6F] font-bold text-xs py-1'>Forgot your password?</p>
        <div className='flex items-center flex-col py-4'>
            <button className='flex flex-row justify-center items-center bg-[#FF5AC7] w-[250px] h-[35px] px-4 rounded-md'>
        <p className='font-semibold text-white'>Login</p>
            </button>
        <p className='font-semibold'>OR</p>
            <button className='flex flex-row space-x-2 items-center bg-[#0075FE] w-[250px] h-[35px] px-4 rounded-md'>
        <img src={Facebook} className='w-4 h-4'></img><p className='font-semibold text-white'>Continue With Facebook</p>
            </button>
      
        </div>
        </div>
    </div>
</div>
    )
  }
  
  export default Login;