import React from "react";
import Footerrent from "./Footerrent";
import { Link } from 'react-router-dom';
import "../ComponentsCSS/AdvertForm.css"
import pic from "../Attributes/Ellipse 525.png"
import frame5 from '../Attributes/Frame 5.png'
import MoreAdvertImg from "../Attributes/MoreAdvertImg.png"
import Navbar from "./Navbar";
import Context from "../Services/Context/Context";

const MoreAdvert=()=>{
  return(
  <Context.Consumer>
  {value=>{
   const {toogletheme,theme}=value
return (
 <div className="mian-container-advertform">
 <Navbar toogletheme={toogletheme} theme={theme} />
        <div className="contact-container">
          
            {/* <div className="links">
                <a href="..">home</a>
                <a href="..">register</a>
            </div>
            <div className="head">Advertise your room</div>
            <form className="form-block" action="..">
            
            
            
            
            
            
            
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

             <input type="submit" value="Submit"/>

             <table>
            <tr>
              <th><div className="fname">
            <label className="name-label">Name</label></div></th>
              <td><div className="name-input">
            <input type="text" id="fname" name="firstname" placeholder="Enter text"></input>
            </div></td>
            </tr>
            <tr>
              <th> <label className="preference-label">What are you looking for ?</label></th>
              <td><div className="fpreference">               
                <label className="checkbox-label">Rent my place
                  <input type="checkbox" checked=""/>
                 <span className="checkmark"></span>
                </label>
                <label className="checkbox-label">Find roommate
                  <input type="checkbox" checked="checked"/>
                 <span className="checkmark"></span>
                </label>
                <label className="checkbox-label">Rent a place
                  <input type="checkbox" checked="checked"/>
                 <span className="checkmark"></span>
                </label>
            </div></td>
            </tr>
            <tr>
              <th><label className="preference-label">Amenities</label></th>
              <td><div className="famenities">
                <label className="checkbox-label">Wifi
                  <input type="checkbox" checked="checked"/>
                 <span className="checkmark"></span>
                </label>
                <label className="checkbox-label">Water
                  <input type="checkbox" checked="checked"/>
                 <span className="checkmark"></span>
                </label>
                <label className="checkbox-label">Bathroom
                  <input type="checkbox" checked="checked"/>
                 <span className="checkmark"></span>
                </label>
                <label className="checkbox-label">Pool
                  <input type="checkbox" checked="checked"/>
                 <span className="checkmark"></span>
                </label>
                <label className="checkbox-label">Kitchen
                  <input type="checkbox" checked="checked"/>
                 <span className="checkmark"></span>
                </label>
                <label className="checkbox-label">Ac
                  <input type="checkbox" checked="checked"/>
                 <span className="checkmark"></span>
                </label>
            </div></td>
            </tr>
            <tr>
              <th><label className="desc">Description</label></th>
              <td><div className="name-input">
            <input type="text" id="fname" name="firstname" placeholder="Enter text"></input>
            </div></td>
            </tr>
          </table>

            </form> */}
            <div className="alinks-div">
            <a className="alinks" href="..">Home &#x3e; </a>
                <a className="alinks" href=".."> Search &#x3e; </a>
                <a className="alinks" href=".."> Kingstone &#x3e; </a>
                <a className="alinks" href=".."> Barney &#x3e; </a>
                <a className="alinks" href=".."> Contact </a>
            </div>
                
                <br/>
           
        <div className="contents">
            <div className="left-container">
                <div className=" flex mt-5 mb-5"> 
                {/* <div className="pic-block"> */}
                    <img className="border-2 border-black rounded-full image_profile" src={frame5} alt="img"></img>
                    {/* </div> */}
                    <h2 className="fname  mt-5 ml-5">Rechard Lucas</h2>
                </div>
                {/* <div className="message"> */}
                <h2 className="fmessage">Message</h2>
                {/* <form action=".."> */}
                <textarea placeholder="Enter here" ></textarea>
                <Link to='/ChatPage'><button className="submit-button-m" type="submit">Send Enquiry</button></Link>
                {/* </form> */}
               {/* </div> */}
            </div>
            <div className="two-containers">
            <div className="right-container">
              <p className="right_text" >
            In a hurry? <span style={{textDecoration:'underline'}}> Show interest </span> and we will send the advertiser your profile
            </p></div>
            
            <div className="right-container flex">
                <div className="textBox w-1/2">
                <p className="mb-7">More from the same advertiser</p>
              
                <p>1 Room Studio, Message Now: </p>
                <p>Birmingham from $617</p>
                </div>
                <div className="w-1/2">
                <img src={MoreAdvertImg} alt="" />
            </div>
            </div>
            </div>
            
            </div>
            {/* <Footerrent/> */}
        </div>
        </div>
   );
  }}
    </Context.Consumer>
      )
  }
export default MoreAdvert;