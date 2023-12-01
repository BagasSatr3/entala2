import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupCard from "./pages/SignUp";
import Login from "./pages/Login";

function IsLogin() {
  if (!localStorage.token) {
    return <Navigate to={"/login"} />;
  } else {
    return <Outlet />;
  }
}

function App() {
  return (
    <Routes>
      <Route element={<IsLogin />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
      <Route path="/Signup" element={<SignupCard />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
