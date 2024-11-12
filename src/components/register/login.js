import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "../register/SignInWithGoogle";
import logoImage from "../RegisterImages/logoZZ.png";
import "../register/lg.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      toast.success("User logged in successfully", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={logoImage} alt="Welcome" className="side-image" />
      </div>

      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <h5 className="hs">Login</h5>
          <p>Welcome Back! Please enter your details.</p>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="User name or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">  
              Submit
            </button>
          </div>
          <p className="end">
            New user? <Link to="/signup" className="r">Register Here</Link>
          </p>
          <SignInwithGoogle />
        </form>
      </div>
    </div>
  );
}

export default Login;
