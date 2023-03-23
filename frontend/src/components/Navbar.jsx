import logo from '../assets/logo.png';
import decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar({setlogin,setregister,token,setToken}) 
{
  const [decodeUser,setDecodeUser] = useState(token ? decode(token) : null);

useEffect(() => {
  if(token) {
    setDecodeUser(decode(token));
    setlogin(false);
  }
},[token]);

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
     {token ? (
      <div className='flex items-center'>
         <span className={`w-[46px] text-white font-bold h-[46px] rounded-full bg-pink-500 flex items-center justify-center uppercase`}>
           {decodeUser?.username?.charAt(0)}
         </span>
         <p className='text-md font-medium ml-3'>{decodeUser?.display_name}</p>
         <button onClick={()=>setToken(null)} className='bg-pink-500 font-medium ml-7 text-white py-2 px-4 text-sm rounded-full'>Logout</button>
         <Link>
          <button className="bg-pink-500 font-medium ml-3 text-white py-2 px-4 text-sm rounded-full">Create</button>
         </Link>
      </div>
     ) : (
       <div className='flex flex-row items-center space-x-4'>
       <button className='w-[60px] h-[35px] bg-[#FF5AC7] rounded-md ' onClick={()=>setlogin(true)}>
         <p className='font-semibold text-white'>Login</p>
         </button>
         <button className='w-[70px] h-[35px] rounded-md outline-1 outline outline-[#FF5AC7] hover:bg-[#FF5AC7] ' onClick={()=>setregister(true)}>
       <p className='text-[#FF5AC7] font-semibold hover:text-white'>Sign Up</p>
         </button>
       </div>
     )}
   </div>
  )
}

export default Navbar;
