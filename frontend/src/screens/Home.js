 
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";
function Home() {
    const [login,setlogin]=useState (false)
    const [register,setregister]=useState (false)
  return (
    
   <div>
      <Navbar setlogin={setlogin} setregister={setregister}/>
      <Login setlogin={setlogin} login={login}/>
      <Register setregister={setregister} register={register}/>
   </div>
  )
}

export default Home;
