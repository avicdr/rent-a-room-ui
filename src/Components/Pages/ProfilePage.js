import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../ComponentsCSS/ProfilePage.css";
import "../../ComponentsCSS/HomePage.css";
import "../../ComponentsCSS/FrontPage.css";

import profile525 from "../../Attributes/Ellipse 525.png";
import bedpic from "../../Attributes/Rectangle 7.png";
import pProfile from "../../Attributes/pProfile.svg";
import pReports from "../../Attributes/pReports.svg";
import analysis from '../../Attributes/ProfilePage/analysis.svg'
import pHelp from "../../Attributes/pHelp.svg";
import pLogOut from "../../Attributes/pLogOut.svg";
import pSettings from "../../Attributes/pSettings.svg";
import pSecurity from "../../Attributes/pSecurity.svg";
import googleconn from '../../Attributes/googleconn.png'
import facebookconn from '../../Attributes/facebookconn.png'
import appleconn from '../../Attributes/appleconn.png'
import statusgroup from '../../Attributes/statusgroup.png'
import uploadimggroup from "../../Attributes/UploadImageGroup.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {GoChevronDown} from 'react-icons/go'
import {
  faShieldAlt,
  faSliders,
  faEyeSlash, faHeart, faEye
} from "@fortawesome/free-solid-svg-icons";
import p from '../../Attributes/person.svg'
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footerrent from "../Footerrent";
import { removetoken } from "../../Services/Token/token";
import Context from "../../Services/Context/Context";
import { getuserdetails, gettoken } from "../../Services/Token/token";
import { UpdateUserPassword, GetUserById, GetUserPreference } from "../../Services/UserApi/user.api";
import { ToastContainer, toast } from 'react-toastify';
import apiurl from "../../Services/apiendpoint/apiendpoint";
import { GetVendorAdvert } from "../../Services/VendorApi/vendor.api";
import { GetTenantAdvert } from "../../Services/TenantApi/tenant.api";
import { GetBuddyAdvert } from "../../Services/BuddyApi/buddy.api";
import { BiUser } from 'react-icons/bi'
import { VscLibrary } from 'react-icons/vsc'
import { MdOutlineLogout } from 'react-icons/md'
import { IoMdAnalytics } from 'react-icons/io'
import { PiDownloadSimpleLight } from 'react-icons/pi'
import GraphPage from "./GraphPage";
import {SlLocationPin} from 'react-icons/sl'
import {HiOutlineArrowLeft} from 'react-icons/hi'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProfilePage() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);
  const [expanded7, setExpanded7] = useState(false);
  const [expanded8, setExpanded8] = useState(false);
  const [expanded9, setExpanded9] = useState(false);
  const [profile, setProfile] = useState("profile")
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userId, setUserId] = useState("")
  const [image, setImage] = useState('')
  const [imgUrl, setimgUrl] = useState("")
  const [showImage, setShowImage] = useState('')
  const [adverts, setAdverts] = useState([])
  const [showReviewModal, setShowReviewModal]=useState(Boolean)

  const navigate = useNavigate()
  const toggleAccordion1 = () => {
    setExpanded1(!expanded1);
  };
  const toggleAccordion2 = () => {
    setExpanded2(!expanded2);
  };
  const toggleAccordion3 = () => {
    setExpanded3(!expanded3);
  };
  const toggleAccordion4 = () => {
    setExpanded4(!expanded4);
  };
  const toggleAccordion5 = () => {
    setExpanded5(!expanded5);
  };
  const toggleAccordion6 = () => {
    setExpanded6(!expanded6);
  };
  const toggleAccordion7 = () => {
    setExpanded7(!expanded7);
  };
  const toggleAccordion8 = () => {
    setExpanded8(!expanded8);
  };
  const toggleAccordion9 = () => {
    setExpanded9(!expanded9);
  };
  function logout() {
    removetoken()
    navigate("/LoginPage")
  }
  async function getUserInformation() {
    const userDetails = getuserdetails()
    const userDetailss = await GetUserById(userDetails?._id)
    console.log(userDetailss)
  }
  async function getUserPreference() {
    const userDetails = getuserdetails()
    const id =
      userDetails?._id
    const userDetailss = await GetUserPreference({ id: id })
    console.log(userDetailss)
  }
  useEffect(() => {
    const userDetails = getuserdetails()
    setUserId(userDetails?._id)
    getUserPreference()
    getUserInformation()
  }, [])
  async function onChangePassword() {
    if (newPassword === confirmPassword) {
      const data = { password: confirmPassword, id: userId }
      const updatePassword = await UpdateUserPassword(data)
      if (updatePassword.status === 200) {
        toast.success(updatePassword.data.message)
      }
      else if (updatePassword.status === 401) {
        toast.error(updatePassword.data.message)
      }
    } else {
      toast.error("Password and confirm password not match")
    }
  }
  async function onChangeImage() {
    const form = new FormData();
    form.append('file', image);
    form.append("id", userId)
    try {
      const value = await fetch(`£{apiurl()}/api/users/updateProfilePic`, {
        method: "PUT",
        body: form,
        headers: {
          Authorization: `Bearer £{gettoken()}`,
        },
      })
      console.log(value)
      if (value.status === 200) {
        toast.success("File Uploaded")
      } else {
        toast.error("Not Uploaded");
      }
    } catch (err) {
      console.log(err)
      toast.error("Not Uploaded");
    }
  }
  function updateImage(e) {
    const data = (e.target.files[0])
    const url = URL.createObjectURL(data)
    setImage(url)
    setShowImage(true)
  }
  async function onClickSavedAdverts() {
    const role = "tenant"
    if (role === "tenant") {
      const tenantAdvert = GetTenantAdvert(userId)
      console.log(tenantAdvert)
    } else if (role === "vendor") {
      const VendorAdvert = GetVendorAdvert(userId)
      console.log(VendorAdvert)
    } else if (role === "buddyup") {
      const BuddyUpAdvert = GetBuddyAdvert(userId)
      console.log(BuddyUpAdvert)
    }
    setProfile(false)
  }
  return (
    <Context.Consumer>
      {value => {
        const { toogletheme, theme } = value
        function checkColor(a){
          if(profile===a && theme==="dark-theme"){
            return "black"
          }
        else if(profile===a){
            return "white"
          }else if(theme==="dark-theme"){
            return "white"
          }
          return "black"
        }
        console.log(theme)
        return (
          <div className="main-container-profile  ">
            <Navbar toogletheme={toogletheme} theme={theme} />
            <button onClick={() => navigate(-1)} className=" back_button flex ml-11 mt-3"> <HiOutlineArrowLeft  className="text-xl mt-1 mr-2" /> Back</button>
            <ToastContainer />
            <div className="  main-container-profile-2  flex gap-2">
              <div className="basis-1/6   self-center ml-7">
                <div className="sidebar flex justify-center">
                  <div className=" flex flex-col justify-start    ">
                    <div className={profile === "report" ? "active sidebar-contants self-center " : "sidebar-contants  self-center"} style={{ cursor: "pointer" }} onClick={() => setProfile("report")}>
                      {/* {profile==="report"? <img src={analysis} className="text-white" alt="reports" /> : ""} */}
                      
                      <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V8.5C22.75 8.91421 22.4142 9.25 22 9.25H2C1.58579 9.25 1.25 8.91421 1.25 8.5V2.5ZM2.75 3.25V7.75H21.25V3.25H2.75Z" fill={checkColor("report")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8692 12.9692C15.1595 12.6794 15.6289 12.6766 15.9226 12.963L18.1629 15.147C18.4595 15.4361 18.4655 15.911 18.1764 16.2075C17.8872 16.5041 17.4124 16.5102 17.1158 16.221L15.4054 14.5535L11.9073 18.0458C11.6189 18.3338 11.1531 18.3387 10.8587 18.0567L8.10186 15.4166L2.53304 21.0427C2.24164 21.337 1.76678 21.3395 1.47239 21.0481C1.178 20.7567 1.17557 20.2818 1.46696 19.9874L7.55476 13.837C7.84276 13.5461 8.31087 13.5398 8.60654 13.823L11.3665 16.4662L14.8692 12.9692Z" fill={checkColor("report")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 7.33594C22.4142 7.33594 22.75 7.67172 22.75 8.08594V21.0859C22.75 21.5002 22.4142 21.8359 22 21.8359C21.5858 21.8359 21.25 21.5002 21.25 21.0859V8.08594C21.25 7.67172 21.5858 7.33594 22 7.33594Z" fill={checkColor("report")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.33594C2.41421 7.33594 2.75 7.67172 2.75 8.08594V15.0859C2.75 15.5002 2.41421 15.8359 2 15.8359C1.58579 15.8359 1.25 15.5002 1.25 15.0859V8.08594C1.25 7.67172 1.58579 7.33594 2 7.33594Z" fill={checkColor("report")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75781 21.5C5.75781 21.0858 6.0936 20.75 6.50781 20.75H22.0001C22.4143 20.75 22.7501 21.0858 22.7501 21.5C22.7501 21.9142 22.4143 22.25 22.0001 22.25H6.50781C6.0936 22.25 5.75781 21.9142 5.75781 21.5Z" fill={checkColor("report")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 5.5C7.75 5.08579 8.08579 4.75 8.5 4.75H19C19.4142 4.75 19.75 5.08579 19.75 5.5C19.75 5.91421 19.4142 6.25 19 6.25H8.5C8.08579 6.25 7.75 5.91421 7.75 5.5Z" fill={checkColor("report")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 5.49805C4.25 5.08383 4.58579 4.74805 5 4.74805H5.5C5.91421 4.74805 6.25 5.08383 6.25 5.49805C6.25 5.91226 5.91421 6.24805 5.5 6.24805H5C4.58579 6.24805 4.25 5.91226 4.25 5.49805Z" fill={checkColor("report")}/>
</svg>

                      <p className="sidebar-buttons" >
                        Reports
                      </p>
                    </div>
                    <div className={profile === "profile" ? "active sidebar-contants self-center" : "sidebar-contants self-center"} style={{ cursor: "pointer" }} onClick={() => setProfile("profile")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C10.2051 2.75 8.75 4.20507 8.75 6C8.75 7.79493 10.2051 9.25 12 9.25C13.7949 9.25 15.25 7.79493 15.25 6C15.25 4.20507 13.7949 2.75 12 2.75ZM7.25 6C7.25 3.37665 9.37665 1.25 12 1.25C14.6234 1.25 16.75 3.37665 16.75 6C16.75 8.62335 14.6234 10.75 12 10.75C9.37665 10.75 7.25 8.62335 7.25 6Z" fill={checkColor("profile")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 22C2.25 16.6152 6.61524 12.25 12 12.25C17.3848 12.25 21.75 16.6152 21.75 22C21.75 22.4142 21.4142 22.75 21 22.75C20.5858 22.75 20.25 22.4142 20.25 22C20.25 17.4437 16.5563 13.75 12 13.75C7.44366 13.75 3.75 17.4437 3.75 22C3.75 22.4142 3.41421 22.75 3 22.75C2.58579 22.75 2.25 22.4142 2.25 22Z" fill={checkColor("profile")}/>
</svg>
                      <p className="sidebar-buttons" >
                        Profile
                      </p>
                    </div>
                    <div className={profile === "adverts" ? "active sidebar-contants self-center" : "sidebar-contants self-center"} style={{ cursor: "pointer" }} onClick={() => (onClickSavedAdverts(), setProfile("adverts"))}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 3C10.25 2.58579 10.5858 2.25 11 2.25H16C16.4142 2.25 16.75 2.58579 16.75 3V21C16.75 21.4142 16.4142 21.75 16 21.75H11C10.5858 21.75 10.25 21.4142 10.25 21V3ZM11.75 3.75V20.25H15.25V3.75H11.75Z" fill={checkColor("adverts")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 3C15.25 2.58579 15.5858 2.25 16 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.4142 21.4142 21.75 21 21.75H16C15.5858 21.75 15.25 21.4142 15.25 21V3ZM16.75 3.75V20.25H20.25V3.75H16.75Z" fill={checkColor("adverts")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.53649 2.41043C4.69394 2.28663 4.89436 2.23095 5.09309 2.25579L9.09309 2.75579C9.49695 2.80628 9.78684 3.16965 9.74635 3.57463L7.99635 21.0746C7.97633 21.2748 7.87673 21.4586 7.71992 21.5846C7.56311 21.7106 7.36224 21.7684 7.16244 21.7449L2.91244 21.2449C2.50203 21.1966 2.208 20.8254 2.25492 20.4148L4.25492 2.91484C4.27766 2.71585 4.37905 2.53423 4.53649 2.41043ZM5.65915 3.83823L3.8301 19.8425L6.57973 20.166L8.18098 4.15345L5.65915 3.83823Z" fill={checkColor("adverts")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 6.75C18.9142 6.75 19.25 7.08579 19.25 7.5V9C19.25 9.41421 18.9142 9.75 18.5 9.75C18.0858 9.75 17.75 9.41421 17.75 9V7.5C17.75 7.08579 18.0858 6.75 18.5 6.75Z" fill={checkColor("adverts")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 6.75C13.9142 6.75 14.25 7.08579 14.25 7.5V9C14.25 9.41421 13.9142 9.75 13.5 9.75C13.0858 9.75 12.75 9.41421 12.75 9V7.5C12.75 7.08579 13.0858 6.75 13.5 6.75Z" fill={checkColor("adverts")}/>
</svg>
                      <p className="sidebar-buttons" >My Adverts</p>
                    </div>
                    <div className="sidebar-contants self-center ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H11.9958C12.4101 2.25 12.7458 2.58579 12.7458 3C12.7458 3.41421 12.4101 3.75 11.9958 3.75H3.75V20.25H12C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3Z" fill={checkColor("logout")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9697 6.96967C16.2626 6.67678 16.7374 6.67678 17.0303 6.96967L21.5303 11.4697C21.8232 11.7626 21.8232 12.2374 21.5303 12.5303L17.0303 17.0303C16.7374 17.3232 16.2626 17.3232 15.9697 17.0303C15.6768 16.7374 15.6768 16.2626 15.9697 15.9697L19.9393 12L15.9697 8.03033C15.6768 7.73744 15.6768 7.26256 15.9697 6.96967Z" fill={checkColor("logout")}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 11.9961C7.25 11.5819 7.58579 11.2461 8 11.2461H21C21.4142 11.2461 21.75 11.5819 21.75 11.9961C21.75 12.4103 21.4142 12.7461 21 12.7461H8C7.58579 12.7461 7.25 12.4103 7.25 11.9961Z" fill={checkColor("logout")}/>
</svg>
                      <button  className='sidebar-buttons' onClick={()=>{setShowReviewModal(true)}} >Log Out</button>
                    </div>
                  </div>
                </div>
              </div>
              {profile === "profile" &&
                <div className="basis-5/6 main-profile-container  p-3 flex self-center gap-4 ">
                  <div className=" mr-3 profile-container  w-2/4 ">
                    <div className="inner-profile-container flex flex-col self-center">
                    <img src={profile525} className="self-center" alt="image" />
                    <h1 className="mt-11 profile_name self-center"  >Rick Richard</h1>
                    <div className=" flex justify-between mt-11 ">
                    <div className="flex flex-col mb-5">
                          <p className="profile-side-headings mb-5">Phone Number</p>
                          <p className="profile-side-headings mb-5">Email</p>
                          <p className="profile-side-headings mb-5">ID Verification</p>
                        
                        </div>
                        <div className="flex  flex-col  ">
                        <p className="profile-side-headings-value mb-5 " >+91 9817635263</p>
                          <p className="profile-side-headings-value mb-5 " >rickrichards@gmail.com</p>
                          <p className="profile-side-headings-value mb-5 mt-3" >Verified</p>
                        </div>
                      
                      {/* <table className="Profile-Person-details">
                        <tr className="flex ">
                          <p className="profile-side-headings">Phone Number</p>
                          <p className="font-lg" >+91 9817635263</p>
                        </tr>
                        <tr>
                          <th style={{ padding: "15px 0px" }}>Email</th>
                          <p style={{ padding: "10px 0px 5px 20%" }}>
                            rickrichard@gmail.com
                          </p>
                        </tr>
                        <tr>
                          <th style={{ padding: "15px 0px" }}>ID Verification</th>
                          <p style={{ padding: "10px 0px 5px 20%" }}>Verified</p>
                        </tr>
                      </table> */}
                    </div>
                  </div>
                  </div>
                  <div className=" update-container w-2/4 ">
                    <div className="my-adverts-div">
                      <button className="w-full" onClick={toggleAccordion1}>
                        {
                          <div className=" flex justify-between">
                            <h2 className='upload-heading'>Change Profile Picture</h2>
                            <GoChevronDown className="text-2xl mt-2" />
                          </div>
                        }
                      </button>
                      {expanded1 && (
                        <div className="dropped-down-profile-picture-container">
                          <div className="flex justify-between">
                          <label className="upload-heading">Upload Image</label>
                          <div  >
    <label  for="file-input">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14V1M11 1L14 4.5M11 1L8 4.5"  stroke="var(--para-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 21H15C17.828 21 19.243 21 20.121 20.122C21 19.242 21 17.829 21 15V14C21 11.172 21 9.75795 20.121 8.87895C19.353 8.11095 18.175 8.01395 16 8.00195M6 8.00195C3.825 8.01395 2.647 8.11095 1.879 8.87895C1 9.75795 1 11.172 1 14V15C1 17.829 1 19.243 1.879 20.122C2.179 20.422 2.541 20.619 3 20.749"
 stroke="var(--para-color)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
    </label>

    <input id="file-input" className="d-none hidden" type="file"/>
</div>
                          {showImage && <img alt='as' style={{ maxWidth: "100px" }} src={image} />}
                          </div>
                          <br />
                          <div className="flex justify-end">
                          <button className="save-changes-button" onClick={() => { onChangeImage() }}>Save Changes</button>
                        </div>
                        </div>
                      )}
                    </div>
                    <div className="my-adverts-div">
                      <button  className="w-full" onClick={toggleAccordion8}>
                        {
                           <div className=" flex justify-between">
                           <h2 className='upload-heading'>Change Your Name</h2>
                           <GoChevronDown className="text-2xl mt-2" />
                         </div>
                         
                        }
                      </button>
                      {expanded8 && (
                        <div className="user-details">
                          <div class="user-box flex flex-col ">
                            <label className="input-profile-label ">First Name</label>
                            <br></br>
                            <input
                              className="email-in"
                              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                              type="text"
                              name="firstName"
                              required=""
                             
                              
                            />
                          </div>
                          <div class="user-box flex flex-col">
                            <label className="input-profile-label">Last Name</label>
                            <br></br>
                            <input
                              className="email-in"
                              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                              type="text"
                              name="lastname"
                              
                            />
                          </div>
                          <div class="user-box flex flex-col">
                            <label className="input-profile-label">Verify password</label>
                            <br></br>
                            <div className="pass-inputs">
                              <input
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                                placeholder="Enter your password"
                                className="pass-in"
                                type={showConfirmPassword ? "text" : "password"}
                                name="password"
                                required=""
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                              />
                              {showConfirmPassword ?
                                <FontAwesomeIcon className=" mr-3 text-color  self-center" icon={faEye} onClick={() => { setShowConfirmPassword(false) }} style={{ cursor: "pointer" }} /> :
                                <FontAwesomeIcon className=" mr-3 text-color self-center " icon={faEyeSlash} onClick={() => { setShowConfirmPassword(true) }} style={{ cursor: "pointer" }} />
                              }
                            </div>
                          </div>
                          <div className="flex justify-end">
                          <button className="save-changes-button" onClick={() => { onChangePassword() }}>Save Changes</button> <br />
                        </div>
                        </div>
                      )}
                    </div>
                    <div className="my-adverts-div">
                      <button  className="w-full" onClick={toggleAccordion9}>
                        {
                           <div className=" flex justify-between">
                           <h2 className='upload-heading'>Change Your Email</h2>
                           <GoChevronDown className="text-2xl mt-2" />
                         </div>
                         
                        }
                      </button>
                      {expanded9 && (
                        <div className="user-details">
                           <div class="user-box flex flex-col ">
                            <label className="input-profile-label ">Enter new Email</label>
                            <br></br>
                            <input
                              className="email-in"
                              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                              type="text"
                              name="firstName"
                              required=""
                              placeholder="Enter your email"
                             
                              
                            />
                          </div>
                          <div class="user-box flex flex-col">
                            <label className="input-profile-label">Verify password</label>
                            <br></br>
                            <div className="pass-inputs">
                              <input
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                                placeholder="Enter your password"
                                className="pass-in"
                                type={showConfirmPassword ? "text" : "password"}
                                name="password"
                                required=""
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                              />
                              {showConfirmPassword ?
                                <FontAwesomeIcon className=" mr-3 text-color  self-center" icon={faEye} onClick={() => { setShowConfirmPassword(false) }} style={{ cursor: "pointer" }} /> :
                                <FontAwesomeIcon className=" mr-3 text-color self-center " icon={faEyeSlash} onClick={() => { setShowConfirmPassword(true) }} style={{ cursor: "pointer" }} />
                              }
                            </div>
                          </div>
                          <div className="flex justify-end">
                          <button className="save-changes-button" onClick={() => { onChangePassword() }}>Save Changes</button> <br />
                        </div>
                        </div>
                      )}
                    </div>
                    <div className="my-adverts-div">
                      <button  className="w-full" onClick={toggleAccordion4}>
                        {
                           <div className=" flex justify-between">
                           <h2 className='upload-heading'>Change Your Password</h2>
                           <GoChevronDown className="text-2xl mt-2" />
                         </div>
                         
                        }
                      </button>
                      {expanded4 && (
                        <div className="user-details">
                          <div class="user-box flex flex-col">
                            <label className="input-profile-label">Enter Current Password</label>
                            <br></br>
                            <input
                              className="email-in"
                              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                              type="password"
                              name="password"
                              required=""
                              value={currentPassword}
                              onChange={(e) => { setCurrentPassword(e.target.value) }}
                            />
                          </div>
                          <div class="user-box flex flex-col">
                            <label className="input-profile-label">Enter New Password</label>
                            <br></br>
                            <input
                              className="email-in"
                              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                              type="password"
                              name="password"
                              required=""
                              value={newPassword}
                              onChange={(e) => { setNewPassword(e.target.value) }}
                            />
                          </div>
                          <div class="user-box flex flex-col">
                            <label className="input-profile-label">Verify password</label>
                            <br></br>
                            <div className="pass-inputs">
                              <input
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                                placeholder="Enter your password"
                                className="pass-in"
                                type={showConfirmPassword ? "text" : "password"}
                                name="password"
                                required=""
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                              />
                              {showConfirmPassword ?
                                <FontAwesomeIcon className=" mr-3 text-color  self-center" icon={faEye} onClick={() => { setShowConfirmPassword(false) }} style={{ cursor: "pointer" }} /> :
                                <FontAwesomeIcon className=" mr-3 text-color self-center " icon={faEyeSlash} onClick={() => { setShowConfirmPassword(true) }} style={{ cursor: "pointer" }} />
                              }
                            </div>
                          </div>
                          <div className="flex justify-end">
                          <button className="save-changes-button" onClick={() => { onChangePassword() }}>Save Changes</button> <br />
                        </div>
                        </div>
                      )}
                    </div>
                    <div className="my-adverts-div">
                      <button className="w-full"  onClick={toggleAccordion5}>
                        {
                     
                           <div className=" flex justify-between">
                           <h2 className='upload-heading'>Change your status</h2>
                           <GoChevronDown className="text-2xl mt-2" />
                         </div>
                        }
                      </button>
                      {expanded5 && (
                        <>
                          <div className="dropped-down-profile-picture flex">
                            <label className="input-profile-labels ">Looking to buddy up</label>
                            <div class="checkbox-wrapper-20 self-center">
                              <div class="switch ">
                                <input id="one-20" class="input" type="checkbox" />
                                <label for="one-20" class="slider"></label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="flex justify-end">
                          <button className="save-changes-button" >Save Changes</button> <br />
                        </div>
                        </>
                      )}
                    </div>
                    <div className="my-adverts-div">
                      <button className="w-full"  onClick={toggleAccordion6}>
                        {
                        
                          <div className=" flex justify-between">
                          <h2 className='upload-heading'>Verify your ID</h2>
                          <GoChevronDown className="text-2xl mt-2" />
                        </div>
                        }
                      </button>
                      {expanded6 && (
                        <div className="dropped-down-profile-picture">
                          <label className='upload-heading'>Upload your Documents</label>
                         
                          <div >
    <label  for="file-input">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14V1M11 1L14 4.5M11 1L8 4.5"  stroke="var(--para-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 21H15C17.828 21 19.243 21 20.121 20.122C21 19.242 21 17.829 21 15V14C21 11.172 21 9.75795 20.121 8.87895C19.353 8.11095 18.175 8.01395 16 8.00195M6 8.00195C3.825 8.01395 2.647 8.11095 1.879 8.87895C1 9.75795 1 11.172 1 14V15C1 17.829 1 19.243 1.879 20.122C2.179 20.422 2.541 20.619 3 20.749"
 stroke="var(--para-color)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
    </label>

    <input id="file-input" className="d-none hidden" type="file"/>
</div>
                        </div>
                      )}
                    </div>
                    <div className="my-adverts-div">
                      <button className="w-full"  onClick={toggleAccordion7}>
                        {
                          
                            <div className=" flex justify-between">
                            <h2 className='upload-heading'>Social accounts</h2>
                            <GoChevronDown className="text-2xl mt-2" />
                          </div>
                          
                        }
                      </button>
                      {expanded7 && (
                        <div className="social_handle-container">
                          <div className="dropped-down-profile-picture ">
                            <img src={facebookconn} alt="" />
                            <button className="connected-button">Connected</button>
                          </div>
                          <div className="dropped-down-profile-picture">
                            <img src={googleconn} alt="" />
                            <button className="connected-button">Connected</button>
                          </div>
                          <div className="dropped-down-profile-picture">
                            <img src={appleconn} alt="" />
                            <button className="connected-button">Connected</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              }
              {profile === "adverts" &&
                <div className="basis-5/6 ">
                  <div className='card-advert-container'>
                  <div className="card-for-fronts ">
                      <div className="front-product-image">
                        <Link to='/Profileinfo'>  <img src={p} alt="" /></Link>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <div className="flex gap-1 justify-end" style={{ cursor: 'pointer' }}>
                          <span style={{ color: "var(--para-color)", fontSize: '12px' }} className="mt-1" >Download Invoice</span>
                          <PiDownloadSimpleLight style={{ color: "#44C1F0", fontSize: '24px' }} />
                        </div>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between ">
              <div className="front-info-card">
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Rent</p> 
                   <span className="new-ren flex">£<span className="user-focus-home text-left mr-1"> 650 </span>  / month</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Available</p>  <span className="user-focus-home text-left">1 Dec</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Location</p>  <span className="user-focus-home text-left">Kensington</span>
                </div>
               
               
              </div>

                <h1 className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    </div>
                    <div className="card-for-fronts ">
                      <div className="front-product-image">
                        <Link to='/Profileinfo'>  <img src={p} alt="" /></Link>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <div className="flex gap-1 justify-end" style={{ cursor: 'pointer' }}>
                          <span style={{ color: "var(--para-color)", fontSize: '12px' }} className="mt-1" >Download Invoice</span>
                          <PiDownloadSimpleLight style={{ color: "#44C1F0", fontSize: '24px' }} />
                        </div>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between ">
              <div className="front-info-card">
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Rent</p> 
                   <span className="new-ren flex">£<span className="user-focus-home text-left mr-1"> 650 </span>  / month</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Available</p>  <span className="user-focus-home text-left">1 Dec</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Location</p>  <span className="user-focus-home text-left">Kensington</span>
                </div>
               
               
              </div>

                <h1 className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    </div>
                      <div className="card-for-fronts ">
                      <div className="front-product-image">
                        <Link to='/Profileinfo'>  <img src={p} alt="" /></Link>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <div className="flex gap-1 justify-end" style={{ cursor: 'pointer' }}>
                          <span style={{ color: "var(--para-color)", fontSize: '12px' }} className="mt-1" >Download Invoice</span>
                          <PiDownloadSimpleLight style={{ color: "#44C1F0", fontSize: '24px' }} />
                        </div>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between ">
              <div className="front-info-card">
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Rent</p> 
                   <span className="new-ren flex">£<span className="user-focus-home text-left mr-1"> 650 </span>  / month</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Available</p>  <span className="user-focus-home text-left">1 Dec</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Location</p>  <span className="user-focus-home text-left">Kensington</span>
                </div>
               
               
              </div>

                <h1 className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    </div>
                    <div className="card-for-fronts ">
                      <div className="front-product-image">
                        <Link to='/Profileinfo'>  <img src={p} alt="" /></Link>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <div className="flex gap-1 justify-end" style={{ cursor: 'pointer' }}>
                          <span style={{ color: "var(--para-color)", fontSize: '12px' }} className="mt-1" >Download Invoice</span>
                          <PiDownloadSimpleLight style={{ color: "#44C1F0", fontSize: '24px' }} />
                        </div>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between ">
              <div className="front-info-card">
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Rent</p> 
                   <span className="new-ren flex">£<span className="user-focus-home text-left mr-1"> 650 </span>  / month</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Available</p>  <span className="user-focus-home text-left">1 Dec</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Location</p>  <span className="user-focus-home text-left">Kensington</span>
                </div>
               
               
              </div>

                <h1 className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    </div>
                    <div className="card-for-fronts ">
                      <div className="front-product-image">
                        <Link to='/Profileinfo'>  <img src={p} alt="" /></Link>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <div className="flex gap-1 justify-end" style={{ cursor: 'pointer' }}>
                          <span style={{ color: "var(--para-color)", fontSize: '12px' }} className="mt-1" >Download Invoice</span>
                          <PiDownloadSimpleLight style={{ color: "#44C1F0", fontSize: '24px' }} />
                        </div>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between ">
              <div className="front-info-card">
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Rent</p> 
                   <span className="new-ren flex">£<span className="user-focus-home text-left mr-1"> 650 </span>  / month</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Available</p>  <span className="user-focus-home text-left">1 Dec</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Location</p>  <span className="user-focus-home text-left">Kensington</span>
                </div>
               
               
              </div>

                <h1 className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    </div>
                    <div className="card-for-fronts ">
                      <div className="front-product-image">
                        <Link to='/Profileinfo'>  <img src={p} alt="" /></Link>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <div className="flex gap-1 justify-end" style={{ cursor: 'pointer' }}>
                          <span style={{ color: "var(--para-color)", fontSize: '12px' }} className="mt-1" >Download Invoice</span>
                          <PiDownloadSimpleLight style={{ color: "#44C1F0", fontSize: '24px' }} />
                        </div>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between ">
              <div className="front-info-card">
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Rent</p> 
                   <span className="new-ren flex">£<span className="user-focus-home text-left mr-1"> 650 </span>  / month</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Available</p>  <span className="user-focus-home text-left">1 Dec</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Location</p>  <span className="user-focus-home text-left">Kensington</span>
                </div>
               
               
              </div>

                <h1 className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    </div>
                  </div>
                </div>
              }
              {profile === "report" &&
                <div className="basis-5/6">
                  <GraphPage />
                </div>
              }
            </div>
            {showReviewModal &&
   <div  className='bg-white bg-opacity-100  backdrop-blur-sm  fixed inset-0 flex justify-center'>
 <div className=' w-1/4 h-2/6  self-center'>
       
       <div className='bg-white shadow-2xl p-7 text-left '>
        <div className='modal-heading-container mb-3'>
         <h1 className='logout-modal-heading'>Are you sure you want to log out?
 </h1>
        
      </div>
      
      
   <div className="flex justify-end gap-4 mb-1">
          <button className="report-cancel-button" type="reset" onClick={()=>{setShowReviewModal(false)}}>No</button>
          <button className="report-submit-button " onClick={()=>{logout()}} >Yes</button>
          
   
           </div> 
       </div> 
          </div> 

    </div>
   }
          </div>
        );
      }}
    </Context.Consumer>
  )
}
export default ProfilePage;
