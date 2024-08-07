import Login from "./Login/Login.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import Frontpage from "./Frontpage/Frontpage.jsx";
import Discover from "./Discover/Discover.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register/Register.jsx";
import Aftregis from "./Register/After-regis.jsx"; 
import { useEffect } from "react";
import Protected from "./protected-route/Protected.jsx";
import ForgetPassword from "./ForgetPassword/ForgetPassword.jsx";
import VerifyOtp from "./verify-otp/verify-otp.jsx";
import Updateuser from "./UPDATE-USER/update-user.jsx";
import api from "./server/api.js";


function App() {
  useEffect(() => {
    (async () => {
      api
        .get(
          "/tk",

          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("There was an error with the login request:");
        });
    })();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Homepage/>}></Route> */}
        <Route path="/" element={<Frontpage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/Homepage" element={<Protected Comp={Homepage} />}></Route>
        <Route path="/VerifyOtp" element={<VerifyOtp />}></Route>
        <Route path="/Discover" element={<Discover />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Aftregis" element={<Aftregis />}></Route>
        <Route path="/Updateuser" element={<Updateuser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


