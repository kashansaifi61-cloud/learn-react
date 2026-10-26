
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import Blog from "./blog/Blog";
import BlogView from "./blog/BlogView";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/about-us"
            element={<AboutUs />}
          />

          <Route
            path="/contact-us"
            element={<ContactUs />}
          />

          <Route path="/blog" element={<Blog />} />

          <Route
            path="/blog/:id"
            element={<BlogView />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
