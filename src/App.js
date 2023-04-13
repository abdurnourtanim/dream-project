import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Update from "./pages/Update";
import FAQ from "./pages/link/FAQ";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Update />} path="/update" />
        <Route element={<BlogDetails />} path="/blog-details" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<FAQ />} path="/FAQ" />
        <Route element={<Home />} path="/" />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
