import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./pages/Home";
import SignUpPage from "./components/SignUpPage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import OTPVerification from "./components/OTPVerification";

function App() {

  

  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="/otp-verification" Component={OTPVerification} />
        <Route path="/forgot-password" Component={ForgotPassword}></Route>
        <Route path="/reset-password" Component={ResetPassword}></Route>
      </Routes>
    </Router>
    {/* <button onClick={ForgotPassword}>Home</button> */}
    </>
  );
}

export default App;
