import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { updateBlog } from "./container/blogSlice";
import { updateUser } from "./container/userSlice";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import CreateBlog from "./pages/CreateBlog";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Update from "./pages/Update";
import FAQ from "./pages/link/FAQ";
import { getBlogs } from "./services/blog.service";
import fetchUser from "./services/fetchUser.service";

const App = () => {
  const userState = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const blogState = useSelector((state) => state.blogReducer.blog);

  console.log(blogState);

  useEffect(() => {
    if (userId) {
      fetchUser(userId)
        .then((res) => {
          const user = res.data;
          const { _id, name, email, username, profile_picture } = user;

          dispatch(
            updateUser({
              ...userState,
              userId: _id,
              name,
              email,
              username,
              profilePhoto: profile_picture,
            })
          );
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      await getBlogs()
        .then((res) => {
          dispatch(updateBlog(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAllBlogs();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Profile />} path="/profile/:userId" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Update />} path="/update/:userId" />
        <Route element={<BlogDetails />} path="/blog/:blogId" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<CreateBlog />} path="/create-blog" />
        <Route element={<FAQ />} path="/FAQ" />
        <Route element={<Home />} path="/" />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
