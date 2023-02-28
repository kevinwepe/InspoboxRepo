import { Routes,Route } from "react-router-dom";
import Home from "./screens/Home";
function App() {
  return (
   <div>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
   </div>
  )
}

export default App;
