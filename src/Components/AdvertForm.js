import React from "react";
import Footerrent from "./Footerrent";
import { Link } from 'react-router-dom';
import "../ComponentsCSS/AdvertForm.css"
import pic from "../Attributes/Ellipse 525.png"
import frame5 from '../Attributes/Frame 5.png'
import Context from "../Services/Context/Context";
const AdvertForm=()=>{
    return(
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
                <div className="pic-container">
                {/* <div className="pic-block"> */}
                    <img src={frame5} alt="img"></img>
                    {/* </div> */}
                    <h2 className="fname">Barney</h2>
                </div>
                {/* <div className="message"> */}
                <h2 className="fmessage">Message</h2><br></br>
                {/* <form action=".."> */}
                <textarea placeholder="Enter here" ></textarea>
                <button className="submit-button" type="submit">Send Enquiry</button>
                {/* </form> */}
               {/* </div> */}
            </div>
            <div className="right-container">
            In a hurry?<a className="AdvertForm-link" href="#">Show interest</a>and we will send the advertiser your profile
            </div>
            </div>
            {/* <Footerrent/> */}
        </div>
    )
}

export default AdvertForm;