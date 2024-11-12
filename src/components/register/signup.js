import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import logoo from "../RegisterImages/cooltext463669618288813.jpg";
// import "../../App.css"
import '../register/reg.css'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }

      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });

      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="login-container">
<form onSubmit={handleRegister} className="form-section1">
    <div className="lgsss">
        <img src={logoo} alt="logo" className="lgsss" />
    </div>
    
    <h5 className="hss">Sign Up</h5>
    {/* The rest of your form elements */}



      <div className="mb-4">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          aria-label="First name" // Accessibility improvement
          required
        />
      </div>

      <div className="mb-4">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
          aria-label="Last name" // Accessibility improvement
        />
      </div>

      <div className="mb-4">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address" // Accessibility improvement
          required
        />
      </div>

      <div className="mb-4">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Create password"
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password" // Accessibility improvement
          required
        />
      </div>

      <p className="tes">
        By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy
      </p>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>

      <p className="end">
        Have an account? <Link to="/login" className="r">Login</Link>
      </p>
    </form>
    </div>
  );
}

export default Register;
