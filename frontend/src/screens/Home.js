 
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";
import { useEffect, useState } from "react";
function Home({ token ,setToken }) {
    const [login,setlogin]=useState (false)
    const [register,setregister]=useState (false)



  return (
    
   <div>
      <Navbar token={token} setlogin={setlogin} setToken={setToken} setregister={setregister}/>
      <Login setToken={setToken} setlogin={setlogin} login={login}/>
      <Register setlogin={setlogin} setregister={setregister} register={register}/>
   </div>
  )
}

export default Home;
