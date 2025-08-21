import React from 'react';
import { Link } from 'react-router-dom';
import "../ComponentsCSS/Footerrent.css";
import logofoot from '../Attributes/logoFooter.svg';
import footertop from "../Attributes/buildingFooter.svg"
import play from '../Attributes/googlePlay.svg';
import applelogo from '../Attributes/appleStore.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faFacebookF, faInstagram} from "@fortawesome/free-solid-svg-icons";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
function Footerrent() {
  return (
    <div className='footerrent-block'>
         <div className="footerrent-footcontainer">
      
        <img className='footer-topphoto' src={footertop} alt="footertop"></img>
     
        </div>
    <div className="footer-top">
        {/* left column footer */}
    <div className='footerrent-columns'>
        <img className='footer-logoimage' src={logofoot} alt='img'></img>
        <p className='Download-description mb-3'>Download the app by clicking the link below :</p>
        <div className='Download-links'>
            <img src={play} alt='play'></img>
            <img src={applelogo} alt='apple'></img>
        </div>
    </div>

        {/* company footer column */}
        <div className='footerrent-columns'>
            <h1 className='footer-heading'>Company</h1>
            <a className='footer-links' href='about-us'>About</a>
            <a className='footer-links' href=' '>Features</a>
            <a className='footer-links' href=' '>Partners</a>
            <a className='footer-links' href=' '>Career</a>
        </div>

        {/* help footer column */}
        <div className='footerrent-columns'>
            <h1 className='footer-heading'>Help</h1>
            <a className='footer-links' href=' '>Customer Support</a>
            <a className='footer-links' href='faq-page'>FAQ - Hint & Tips</a>
            <a className='footer-links' href=' '>Terms & conditions</a>
            <a className='footer-links' href='./privacy-policy'>Privacy Policy</a>
        </div>

        {/* right footer column */}
        <div className='footerrent-columns footer-userbox'>
            <h1 className='footer-heading'>Subscribe to newsletter</h1>
            <div className='flex flex-col gap-8'>
            <div className='footerrentsearchbox-container '>
            <input
              className="footerrent-inputbox"
              type="text"
              placeholder="Enter email address"
            />
            <button className='footerrent-joinbutton'>Join</button>
            </div>
            <div className='footerent-contact gap-11 '>
               <span className='phonenumber'><p>Call Us</p><p className='detailsss' >(+1) 456-4933</p></span>
               <span className='phonenumber'><p>Email Us</p><p className='detailsss'>@example.com</p></span>
            </div>
            </div>
        </div>
    </div>
    <div className='foot-line'>
    <hr className='footerent-line'/>
    </div>
    <div className="footer-bottom">
    <p className="copyrighttag">© Copyright 2022, All Rights Reserved</p>

    <div className="bottom-icons">
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faInstagram} />
    </div>
    </div>
    </div>
  )
}

export default Footerrent