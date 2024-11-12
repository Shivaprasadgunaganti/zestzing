import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Feeds/home";
import Login from "./components/register/login";
import Signup from "./components/register/signup";
import Profile from "./components/Profile"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Exploree from "./components/Exploree";
import NotificationsPage from "./components/notifiactions/Notificationpage";
import CreateComponent from "./components/notifiactions/createeee";
import Mainn from "./components/Profile/mainn";

function App() {
  return (          
    <div >
      {/* <Home/> */}
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/reels' element={<Exploree/>}/>   
        <Route path="/notification" element={<NotificationsPage />} />
        <Route path="/create" element={<CreateComponent />} />
        <Route path="/profile" element={<Mainn />} />
      </Routes>
      
      <ToastContainer />
    </div>
  );
}

export default App; 