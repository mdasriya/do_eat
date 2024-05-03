
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Dishes from "./components/dishes_new/Dishes";
import SignupPopup from "./components/SignupPopup/SignupPopup";

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/search" element={<Search/>} />
       
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signuppopup" element={<SignupPopup />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
