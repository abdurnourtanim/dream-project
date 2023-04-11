import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Update />} path="/update" />
        <Route element={<Home />} path="/" />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
