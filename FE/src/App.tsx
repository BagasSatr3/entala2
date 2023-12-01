import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupCard from "./pages/SignUp";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import AddTransaction from "./pages/AddTransaction";

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
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/addTransaction" element={<AddTransaction />}></Route>
      </Route>
      <Route path="/Signup" element={<SignupCard />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
