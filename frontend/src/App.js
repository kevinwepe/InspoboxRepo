import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import Home from "./screens/Home";
function App() {
  const [token,setToken] = useState(sessionStorage.getItem('token') || null);

  return (
   <div>
      <Routes>
        <Route index element={<Home token={token} setToken={setToken}/>}></Route>
      </Routes>
   </div>
  )
}

export default App;
