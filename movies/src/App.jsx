import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
