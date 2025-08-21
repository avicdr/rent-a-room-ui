import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../ComponentsCSS/Loginpage.css";
import f from "../../Attributes/facebookphoto.svg";
import succ from "../../Attributes/ProfilePage/lf20_t6eeo9z1.json].png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import g from "../../Attributes/googlephoto.svg";
import a from "../../Attributes/applephoto.svg";
import { ToastContainer, toast } from "react-toastify";
import {
  LoginUserAPI,
  SignUpUserAPI,
  UpdateUser,
} from "../../Services/UserApi/user.api";
import Nav2 from "../Nav2";
import { removetoken } from "../../Services/Token/token";
import { Pointer } from "highcharts";
import { getuserdetails } from "../../Services/Token/token";
import loginimage from "../../Attributes/HomePage/Sign up-amico 1 1.png";
import { useLocation } from "react-router-dom";
import { auth, google_provider, facebook_provider } from "../../FirebaseConfig";
import { signInWithPopup, signInWithRedirect, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Loginpage(props) {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [Sigin, setSigin] = useState("signin");
  const [Signup, setSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signemail, setsignEmail] = useState("");
  const [signpassword, setsignPassword] = useState("");
  const [signpasswordconfirm, setsignPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordSign, setShowPasswordSign] = useState(false);
  const [showPasswordSignConfirm, setShowPasswordSignConfirm] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [_id, setId] = useState("");
  const [success, setSuccess] = useState(false);
  
  const createUserWithEmailAndPasswordExample = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        // Handle errors during user creation
        console.error("Error creating user:", error.message);
      });
  };
  
  const handleGoogleSignIn = () => {
    console.log("RUN")
    signInWithPopup(auth, google_provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebook_provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (location?.state?.data === "signin") {
      setSigin("signin");
    } else if (location?.state?.data === "signup") {
      setSigin("signup");
    } else {
      setSigin("signin");
    }
  }, []);

  let userData = {
    _id: "",
    firstname: "",
    lastname: "",
    mobile: "",
  };

  async function loginwith({ email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Assuming you have a server where you generate a custom token after verifying the user
      // and send it back to the client
      const customToken = await user.getIdToken();
  
      return {
        status: 200,
        data: {
          message: "Login successful",
          token: customToken,
        },
      };
    } catch (error) {
      return {
        status: 401,
        data: {
          message: "Invalid credentials",
        },
      };
    }
  }
  
  // Function to get user details
  function getuserdetails() {
    const user = auth.currentUser;
    return user ? {
      _id: user.uid,
      // Add other user details as needed
    } : null;
  }

  const navigate = useNavigate();
  async function Login() {
    const data = { email, password };
    const login = await loginwith(data);
  
    if (login.status === 200) {
      console.log(login.data.token);
      localStorage.setItem("tokens", login.data.token);
  
      const userDetails = getuserdetails();
  
      if (userDetails) {
        setId(userDetails._id);
        navigate("/rentaroom");
      } else {
        // Handle case where user details are not available
        toast.error("User details not available");
      }
    } else if (login.status === 401) {
      toast.error(login.data.message);
    }
  }
  

  async function onSignUp(e) {
    e.preventDefault();
    const data = {
      email: signemail,
      password: signpassword,
      firstname,
      lastname,
      mobile,
    };
    const siginup = createUserWithEmailAndPasswordExample(signemail, signpassword);

    // if (siginup.status === 200) {
    //   localStorage.setItem("tokens", siginup.data.data);

    //   navigate("/rentaroom");
    // } else if (siginup.status === 401) {
    //   toast.error(siginup.data.message);
    // }
  }

  async function updateUser(e) {
    e.preventDefault();
    const userDetails = getuserdetails();
    console.log(userDetails);
    const userData = {
      firstname,
      lastname,
      mobile,
      email: signemail,
      password: signpassword,
    };
    const updateUser = await UpdateUser({ userData: userData });
    if (updateUser.status === 200) {
      navigate("/");
    }
  }

  function getCodeBoxElement(index) {
    return document.getElementById("codeBox" + index);
  }
  function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
      if (index !== 4) {
        getCodeBoxElement(index + 1).focus();
      } else {
        getCodeBoxElement(index).blur();
        // Submit code
        console.log("submit code ");
      }
    }
    if (eventCode === 8 && index !== 1) {
      getCodeBoxElement(index - 1).focus();
    }
  }
  function onFocusEvent(index) {
    for (var item = 1; item < index; item++) {
      const currentElement = getCodeBoxElement(item);
      if (!currentElement?.value) {
        currentElement?.focus();
        break;
      }
    }
  }

  return (
    <div className="login-main-container flex">
      <div className="login-background basis-3/5 flex flex-col justify-center ">
        <img
          src={loginimage}
          alt="login"
          className="object-contain self-center"
        />
      </div>
      <div className="basis-2/5 flex flex-col justify-center bg-white   text-left ">
        <ToastContainer />

        <div className=" w-3/5 self-center  ">
          {Sigin === "signin" && (
            <div className="  ">
              <h1 className="welcome-heading mb-6">Welcome</h1>
              <p className="text-xl font-bold sub-heading-login ">Sign in</p>
              <div className="mt-5">
                <div className="user-box mb-2">
                  <label className="login-label ">Email</label>

                  <div className="input-border rounded-lg ">
                    <input
                      className="border-0 input-text-login p-4 w-full"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="user-box">
                  <label className="login-label ">Password</label>

                  <div className="input-border rounded-lg flex justify-between ">
                    <input
                      className="border-0  input-text-login p-4  w-full"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {showPassword ? (
                      <FontAwesomeIcon
                        className="mt-5 mr-3 text-color "
                        icon={faEye}
                        onClick={() => {
                          setShowPassword(false);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="mt-5 mr-3 text-color "
                        icon={faEyeSlash}
                        onClick={() => {
                          setShowPassword(true);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>
                  <div className="user-concern ">
                    <div className="remember-me remember ">
                      <input type="checkbox" id="remember-me" />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 remember-text"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="forgot-pass">
                      <button
                        type="button"
                        onClick={() => setSigin("forgetPassword")}
                      >
                        Forgot Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-11">
                <button className="signup-bt w-full mb-3" onClick={Login}>
                  Sign In
                </button>
                <p className="or-text mb-3">Or</p>
                <div className="social-media-buttons mb-7 mb-lg-11">
                  <button className="fb-button" onClick={handleFacebookSignIn}>
                    <img src={f} alt="img"></img>
                  </button>
                  <button className="g-button" onClick={handleGoogleSignIn}>
                    <img src={g} alt="img"></img>
                  </button>
                  <button className="a-button">
                    <img src={a} alt="img"></img>
                  </button>
                </div>
              </div>
              <p className="dont_account ">
                Don't have an account?
                <span
                  className="xl"
                  style={{
                    color: "#44C1F0",
                    cursor: "pointer",
                    fontSize: "24px",
                  }}
                  onClick={() => setSigin("signup")}
                >
                  {" "}
                  SignUp
                </span>
              </p>
            </div>
          )}
          {Sigin === "signup" && (
            <div className=" ">
              <h1 className="welcome-heading mb-2 ">Welcome</h1>

              <form>
                <div className="mb-2">
                  <label className="login-label">Name</label>
                  <br></br>
                  <div className=" flex ">
                    <input
                      className="input-border input-text-login w-full mr-4"
                      placeholder="First Name"
                      type="text"
                      name="firstname"
                      required
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                    />
                    <input
                      className="ml-4 input-border input-text-login w-full  "
                      placeholder="Last Name"
                      type="text"
                      name="lastname"
                      required
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="login-label">Mobile Number</label>

                  <input
                    className="input-border input-text-login w-full"
                    placeholder="Enter your mobile number"
                    type="tel"
                    pattern="[0-9]{10}"
                    name="mobile"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="signup-user-box">
                  <label className="login-label">Email</label>
                  <br></br>
                  <div className="input-border rounded-lg ">
                    <input
                      className="border-0 input-text-login w-full"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      required
                      value={signemail}
                      onChange={(e) => {
                        setsignEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="login-label">Password</label>
                  <br></br>
                  <div className="input-border rounded-lg flex justify-between">
                    <input
                      className="border-0 input-text-login w-full"
                      placeholder="Enter your password"
                      type={showPasswordSign ? "text" : "password"}
                      name="password"
                      required
                      value={signpassword}
                      onChange={(e) => {
                        setsignPassword(e.target.value);
                      }}
                    />
                    {showPasswordSign ? (
                      <FontAwesomeIcon
                        className="mt-3 mr-3 text-color "
                        icon={faEye}
                        onClick={() => {
                          setShowPasswordSign(false);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="mt-3 mr-3 text-color "
                        icon={faEyeSlash}
                        onClick={() => {
                          setShowPasswordSign(true);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>
                </div>

                {/* <br></br> */}

                <button type="submit" onClick={onSignUp} className="signup-bt mt-5 w-full">
                  Sign Up
                </button>
                <p className="or-text mt-3 mb-3">Or</p>
                <div className="social-media-buttons  mb-3">
                  <button
                    className="signup-fb-button"
                    onClick={handleFacebookSignIn}
                  >
                    <img src={f} alt="img"></img>
                  </button>
                  <button
                    className="signup-g-button"
                    onClick={handleGoogleSignIn}
                  >
                    <img src={g} alt="img"></img>
                  </button>
                  <button className="signup-a-button">
                    <img src={a} alt="img"></img>
                  </button>
                </div>
                <p className="dont_account ">
                  Already have an account?
                  <span
                    style={{
                      color: "#44C1F0",
                      cursor: "pointer",
                      fontSize: "28px",
                    }}
                    onClick={() => setSigin("signin")}
                  >
                    {" "}
                    Sign In
                  </span>
                </p>
              </form>

              {/* <div className="">
        <Link  className=""> <button className="signup-bt  w-full mb-3 mt-11" onClick={onSignUp}> Next </button></Link>
          <p className="signup-or-text mb-3">or</p>
          <div className="signup-social-media-buttons mb-11">
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
          <p className="text-lg font-bold">Already have an account? 
        <span className="text-2xl" style={{color:"#44C1F0", cursor:"pointer"}}  onClick={()=>setSigin(true)}> Sign In</span></p>
        </div> */}
            </div>
          )}

          {Sigin === "forgetPassword" && (
            <div className=" ">
              <h1 className="forget-heading mb-2 ">Forgot password</h1>
              <p className="forget-sub">
                Enter your email for the verification proccess,we will send 4
                digits code to your email.
              </p>

              <form>
                <div className="signup-user-box mt-14 pt-11">
                  <label className="login-label">Email</label>
                  <br></br>
                  <div className="input-border rounded-lg ">
                    <input
                      className="border-0 input-text-login w-full"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      required
                      value={signemail}
                      onChange={(e) => {
                        setsignEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* <br></br> */}

                <button
                  type="submit"
                  onClick={() => {
                    setSigin("verify");
                  }}
                  className="signup-bt mt-5 w-full"
                >
                  Sign in
                </button>
              </form>
            </div>
          )}

          {Sigin === "verify" && (
            <div className=" ">
              <h1 className="forget-heading mb-2 text-center">Verification</h1>
              <p className="forget-sub">
                Enter your 4 digits code that you received on your email.
              </p>

              <form
                onSubmit={() => {
                  setSigin("newPassword");
                }}
              >
                <div className="signup-user-box mt-14 pt-11">
                  <label className="login-label">Email</label>
                  <br></br>

                  {/* <input type="text"  ref={ref1} name="digit-1" data-next="digit-2" onChange={(e)=>{e.length<2&& onChangeCode(e)}} />
	          <input type="text" ref={ref2} name="digit-2" data-next="digit-3" data-previous="digit-1" />
	          <input type="text" ref={ref3} name="digit-3" data-next="digit-4" data-previous="digit-2" />
            <input type="text" ref={ref3} name="digit-3" data-next="digit-4" data-previous="digit-2" /> */}
                  <div className="passcode-wrapper">
                    <input
                      id="codeBox1"
                      required
                      className="verify_code"
                      type="tele"
                      maxlength={1}
                      onChange={(e) => {
                        onKeyUpEvent(1, e);
                      }}
                      onfocus={onFocusEvent(1)}
                    />
                    <input
                      id="codeBox2"
                      required
                      className="verify_code"
                      type="tele"
                      maxlength="1"
                      onChange={(e) => {
                        onKeyUpEvent(2, e);
                      }}
                      onfocus={onFocusEvent(2)}
                    />
                    <input
                      id="codeBox3"
                      required
                      className="verify_code"
                      type="tele"
                      maxlength="1"
                      onChange={(e) => {
                        onKeyUpEvent(3, e);
                      }}
                      onfocus={onFocusEvent(3)}
                    />
                    <input
                      id="codeBox4"
                      required
                      className="verify_code"
                      type="tele"
                      maxlength="1"
                      onchange={(e) => {
                        onKeyUpEvent(4, e);
                      }}
                      onfocus={onFocusEvent(4)}
                    />
                  </div>
                </div>

                {/* <br></br> */}

                <button className="signup-bt mt-5 w-full" type="submit">
                  Sign in
                </button>
                <p className="resend_text mt-4">
                  If you didn’t receive a code!
                  <span style={{ color: "#44C1F0", cursor: "pointer" }}>
                    {" "}
                    Resend
                  </span>
                </p>
              </form>
            </div>
          )}

          {Sigin === "newPassword" && (
            <div className=" ">
              <h1 className="forget-heading mb-2 ">New Password</h1>
              <p className="forget-sub">
                Set the new password for your account so you can login and
                access all featuress.
              </p>

              <div>
                <div className="signup-user-box mt-14 pt-11">
                  <label className="login-label">New Password</label>
                  <br></br>
                  <div className="input-border rounded-lg ">
                    <input
                      className="border-0 input-text-login w-full"
                      placeholder="Enter your new password"
                      type="password"
                      name="email"
                    />
                  </div>
                </div>
                <div className="signup-user-box mt-4">
                  <label className="login-label">Confirm Password</label>
                  <br></br>
                  <div className="input-border rounded-lg ">
                    <input
                      className="border-0 input-text-login w-full"
                      placeholder="Confirm your password"
                      type="password"
                      name="email"
                    />
                  </div>
                </div>

                {/* <br></br> */}

                <button
                  onClick={() => {
                    setSuccess(true);
                  }}
                  className="signup-bt mt-5 w-full"
                >
                  Sign in
                </button>
              </div>
            </div>
          )}

          {success && (
            <div className="bg-white bg-opacity-100 fixed backdrop-blur-sm h-screen flex justify-center   inset-0  ">
              <div className="  self-center">
                <div className=" flex  flex-col justify-center ">
                  <img src={succ} className="w-1/2 self-center" />
                  <h1 className="success-heading mb-2 text-center mt-8">
                    Successfully
                  </h1>
                  <p className="forget-sub mt-8 self-center">
                    Your password has been reset successfully
                  </p>

                  <button
                    onClick={() => {
                      setSigin("signin");
                      setSuccess(false);
                    }}
                    className="self-center signup-bt mt-8 w-full text-center"
                  >
                    Contunie
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
