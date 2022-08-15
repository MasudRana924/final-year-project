import './App.css';
import React, { useState, useEffect } from "react";
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import LogIn from './Pages/Screens/Login/LogIn';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Pages/Screens/Login/SignUp';
import Home from './Pages/Home/Home';
import BreadCrumb from './Pages/Shared/Breadcrumb/Breadcrumb';


function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <BreadCrumb />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

        </Routes>
        <Footer></Footer>



      </BrowserRouter>
    </div>
  );
}

export default App;