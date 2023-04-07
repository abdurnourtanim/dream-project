import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
