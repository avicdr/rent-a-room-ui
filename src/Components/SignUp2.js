import React from "react";
// import "../ComponentsCSS/Loginpage.css";
import '../ComponentsCSS/SignUpPage.css'
import f from "../Attributes/facebookphoto.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import g from "../Attributes/googlephoto.svg";
import a from "../Attributes/applephoto.svg";
import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
// import Proptypes from 'prop-types';
function SignUp2() {
  return (
    <div><Nav2></Nav2>
    <div className="signup-main">
      <div className="signup-container">
        <h1 className="signup-welcome-heading">Welcome</h1>
        <div className='sign-nav-buttons'>
        <Link to='/LoginPage'><button className='signin-pointer'>&nbsp; Sign In &nbsp;</button></Link>
      <button style={{background:"#303147", color:"#FFFFFF"}} className='signup-pointer'> Sign Up</button>
    </div>
          
        <div className="signup-user-details">
        {/* <div class="signup-user-box">
            <label className="signup-name">Name</label>
            <br></br>
            <input
              className="signup-name-in"
              placeholder="First Name"
              type="text"
              name="text"
              required=""
            />
            <input
              className="signup-name-in"
              placeholder="Last Name"
              type="text"
              name="text"
              required=""
            />
          </div> */}
          <div class="signup-user-box">
            <label className="signup-email">Email</label>
            <br></br>
            <input
              className="signup-email-in"
              placeholder="Enter your email"
              type="email"
              name="email"
              required=""
            />
          </div>
          {/* <div class="user-box">
            <label className="signup-email">Mobile Number</label>
            <br></br>
            <input
              className="signup-email-in"
              placeholder="Enter your mobile number"
              type="tel"
              name="tel"
              required=""
            />
          </div> */}
          <div class="signup-user-box">
            <label className="signup-pass">Password</label>
            <br></br>
            <div className="signup-pass-inputs">
              <input
                className="signup-pass-in"
                placeholder="Enter your password"
                type="password"
                name="password"
                required=""
              />
              <FontAwesomeIcon icon={faEyeSlash} />
            </div>
          </div>
          <div class="signup-user-box">
            <label className="signup-pass"> Confirm Password</label>
            <br></br>
            <div className="signup-pass-inputs">
              <input
                className="signup-pass-in"
                placeholder="Enter your password"
                type="password"
                name="password"
                required=""
              />
              <FontAwesomeIcon icon={faEyeSlash} />
            </div>
          </div>
        </div>
        {/* <br></br>
        <br></br> */}
        <div className="signup-buttons">
        <Link style={{textAlign:"center"}} className="signup" to='/SignupPage'> <button className="signup-btn-2">&nbsp; Next &nbsp;</button></Link>
          <p className="signup-or-text">or</p>
          <div className="signup-social-media-buttons">
          <Link  className="signup-fb-button" to='/SignupPage'><button className="signup-fb-button">
              <img src={f} alt="img"></img>
            </button></Link>
            <Link className="signup-g-button" to='/SignupPage'><button className="signup-g-button">
              <img src={g} alt="img"></img>
            </button></Link>
            <Link className="signup-a-button" to='/SignupPage'><button className="signup-a-button">
              <img src={a} alt="img"></img>
            </button></Link>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default SignUp2;
