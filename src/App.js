import "./App.css";
import Homepage from "./components/Homapage/Homepage";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import { Route , Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
