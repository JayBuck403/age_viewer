import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Hompage from "./components/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
          <Route path="/" element={<Hompage />} />
            <Route path="/sign_up" element={<SignUp />} />
	          <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
