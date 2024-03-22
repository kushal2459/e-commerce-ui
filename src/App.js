import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./pages/Home";
import SignUpPage from "./components/SignUpPage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import OTPVerification from "./components/OTPVerification";
import DetailedProduct from './pages/DetailedProduct'
import Test from "./pages/Test";
import NoPage from "./pages/NoPage";
import ScrollTop from "./components/ScrollTop";
import Cart from "./pages/Cart";
import MyState from "./context/myState";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/*" Component={NoPage} />
          <Route path="/cart" Component={Cart} />
          <Route path="/productinfo/:id" Component={DetailedProduct} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/sign-up" Component={SignUpPage} />
          <Route path="/otp-verification" Component={OTPVerification} />
          <Route path="/forgot-password" Component={ForgotPassword}></Route>
          <Route path="/reset-password" Component={ResetPassword}></Route>
          <Route path="/test" Component={Test} />
        </Routes>
      </Router>
      {/* <button onClick={ForgotPassword}>Home</button> */}
    </MyState>
  );
}

export default App;
