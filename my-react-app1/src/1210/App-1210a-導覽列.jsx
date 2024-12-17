import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../pages/Home";
import News from "./pages/News.JSX";
import About from "../pages/About";

export default function App() {
  return (
    <div className="wrap">
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/news" element={<News></News>}></Route>
      </Routes>
    </div>
  )
}