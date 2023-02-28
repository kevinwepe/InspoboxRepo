import logo from '../assets/logo.png'

function Navbar({setlogin,setregister}) 

{
  return (
   <div className='flex flex-row  justify-between py-4 px-4'>
      <div className='flex flex-row items-center space-x-6'>
      <img className='items-center w-[54px]'src={logo}></img>
      <div className='flex flex-row items-center space-x-5'>
      <p className='text-[#FF5AC7] font-semibold'>Home</p>
      <p className='text-[#6F6F6F] font-[400]'>Search</p>
      <p className='text-[#6F6F6F] font-[400]'>Categories</p>
      </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
      <button className='w-[60px] h-[35px] bg-[#FF5AC7] rounded-md ' onClick={()=>setlogin(true)}>
        <p className='font-semibold text-white'>Login</p>
        </button>
        <button className='w-[70px] h-[35px] rounded-md outline-1 outline outline-[#FF5AC7] hover:bg-[#FF5AC7] ' onClick={()=>setregister(true)}>
      <p className='text-[#FF5AC7] font-semibold hover:text-white'>Sign Up</p>
        </button>
      </div>
   </div>
  )
}

export default Navbar;
