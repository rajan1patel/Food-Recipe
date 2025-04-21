import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Favroities from "./pages/Favroites/Favroities";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
        <Route path="/favroities" element={<Favroities></Favroities>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
