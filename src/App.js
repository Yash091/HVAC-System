import "./App.css";
import Homepage from "./components/Homapage/Homepage";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import { Route , Routes } from "react-router-dom"
import Final from "./components/final/Final";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="final" element={<Final />}/>
    </Routes>
  );
}

export default App;
