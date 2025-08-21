import React from 'react'
import { Link } from 'react-router-dom'
import profile525 from "../Attributes/Ellipse 525.png";
import bedpic from "../Attributes/Rectangle 7.png";
import pProfile from "../Attributes/pProfile.svg";
import pReports from "../Attributes/pReports.svg";
import pHelp from "../Attributes/pHelp.svg";
import pLogOut from "../Attributes/pLogOut.svg";
import pSettings from "../Attributes/pSettings.svg";
import pSecurity from "../Attributes/pSecurity.svg";
import googleconn from '../Attributes/googleconn.png'
import facebookconn from '../Attributes/facebookconn.png'
import appleconn from '../Attributes/appleconn.png'
import statusgroup from '../Attributes/statusgroup.png'
import uploadimggroup from "../Attributes/UploadImageGroup.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../ComponentsCSS/Myadvert.css';
import Navbar from './Navbar';
import p from '../Attributes/person.svg'
import {
   
    faHeart
    
  } from "@fortawesome/free-solid-svg-icons";
import Footerrent from './Footerrent';

export default function Myadvert() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='My-advert-main'>
        <div className="">
          {/* <a className="sidebar-content" href="#">
          {" "}
          <FontAwesomeIcon icon={faSliders} /> Settings
        </a>
        <a className="sidebar-content" href="#">
          <FontAwesomeIcon icon={faShieldHalved} /> Security
        </a>
        <a className="sidebar-content" href="#">
          <FontAwesomeIcon icon={faBarsProgress} /> Reports
        </a>
        <a className="sidebar-content active" href="#">
          <FontAwesomeIcon icon={faUser} /> Profile
        </a>
        <a className="sidebar-content" href="#">
          <FontAwesomeIcon icon={faCircleQuestion} /> Help
        </a>
        <a className="sidebar-content" href="#">
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Log out
        </a> */}

          <div className="sidebar-contant">
            <img className="sidebar-photo" src={pReports} alt="image2" />
            {/* <a href="#">Report</a> */}
            <Link to="/GraphPage">Report</Link>
          </div>
          <div className="sidebar-contant ">
            <img className="sidebar-photo" src={pProfile} alt="image2" />
            
            <Link to="/ProfilePage">Profile</Link>
          </div>
          <div className="sidebar-contant active">
            <img className="sidebar-photo" src={pHelp} alt="image2" />
            {/* <a href="#">My Adverts</a> */}
            <a href="#" className="active">
              My Adverts
            </a>
          </div>
          <div className="sidebar-contant">
            <img className="sidebar-photo" src={pLogOut} alt="image2" />
            <Link to='/' >Log Out</Link>
          </div>
        </div>

        <div className='my-advert-cards'>
        <div className="card-for-front">
              <div className="front-product-image">
              <Link to='/AdvertDetails'>  <img src={bedpic} alt="" /></Link>
              </div>
              <FontAwesomeIcon className="front-heart" icon={faHeart} />
              <h1 className="front-card-head">Lovely room in Manhattan</h1>
              <h5 className="front-card-headfive">246 Mott St, Kingston</h5>
              {/* <br /> */}
              <p className="front-card-para">
                Wifi • Air conditioning • Kitchen • Recycling • Non smoking •
                Vegan friendly • Balcony • Party people
              </p>
              {/* <br /> */}
              <div className="front-cardkebuttons">
                <button className="front-card-buttons">
                  Looking for a male roommate
                </button>
                <button className="front-card-buttons">Sublet </button>
              </div>

              <div className="front-info-card">
                <div className="front-info">
                  <p  className="ren"> Rent</p>  <span style={{color:"var(--para-color)"}}  className="user-focus">$ 650/month{" "}</span>
                </div>
                <div className="front-info">
                <p  className="ren"> Available</p> <span style={{color:"var(--para-color)"}}  className="user-focus">1 Dec{" "}</span>
                </div>
                <div className="front-info">
                <p   className="ren"> Location</p> <span style={{color:"var(--para-color)"}} className="user-focus">Kingstan{" "}</span>  
                </div>
                <div style={{color:"var(--para-color)"}}  className="front-info">
                  {" "}
                  <span  style={{color:"var(--para-color)"}} className="front-card-spa">£2,40</span> /month
                </div>
              </div>
            </div>
            <div className="card-for-front">
              <div className="front-product-image">
              <Link to='/Profileinfo'>  <img src={p} alt="" /></Link>
              </div>
              <FontAwesomeIcon className="front-heart" icon={faHeart} />
              <h1 className="front-card-head">Lovely room in Manhattan</h1>
              <h5 className="front-card-headfive">246 Mott St, Kingston</h5>
              {/* <br /> */}
              <p className="front-card-para">
                Wifi • Air conditioning • Kitchen • Recycling • Non smoking •
                Vegan friendly • Balcony • Party people
              </p>
              {/* <br /> */}
              <div className="front-cardkebuttons">
                <button className="front-card-buttons">
                  Looking for a male roommate
                </button>
                <button className="front-card-buttons">Sublet </button>
              </div>

              <div className="front-info-card">
                <div className="front-info">
                  <p  className="ren"> Rent</p>  <span style={{color:"var(--para-color)"}}  className="user-focus">$ 650/month{" "}</span>
                </div>
                <div className="front-info">
                <p  className="ren"> Available</p> <span style={{color:"var(--para-color)"}}  className="user-focus">1 Dec{" "}</span>
                </div>
                <div className="front-info">
                <p   className="ren"> Location</p> <span style={{color:"var(--para-color)"}} className="user-focus">Kingstan{" "}</span>  
                </div>
                <div style={{color:"var(--para-color)"}}  className="front-info">
                  {" "}
                  <span  style={{color:"var(--para-color)"}} className="front-card-spa">£2,40</span> /month
                </div>
              </div>
            </div>

            
            {/* <div className="card-for-front">
              <div className="front-product-image">
              <Link to='/AdvertDetails'>  <img src={bedpic} alt="" /></Link>
              </div>
              <FontAwesomeIcon className="front-heart" icon={faHeart} />
              <h1 className="front-card-head">Lovely room in Manhattan</h1>
              <h5 className="front-card-headfive">246 Mott St, Kingston</h5>
              
              <p className="front-card-para">
                Wifi • Air conditioning • Kitchen • Recycling • Non smoking •
                Vegan friendly • Balcony • Party people
              </p>
             
              <div className="front-cardkebuttons">
                <button className="front-card-buttons">
                  Looking for a male roommate
                </button>
                <button className="front-card-buttons">Sublet </button>
              </div>

              <div className="front-info-card">
                <div className="front-info">
                  <p  className="ren"> Rent</p>  <span style={{color:"var(--para-color)"}}  className="user-focus">$ 650/month{" "}</span>
                </div>
                <div className="front-info">
                <p  className="ren"> Available</p> <span style={{color:"var(--para-color)"}}  className="user-focus">1 Dec{" "}</span>
                </div>
                <div className="front-info">
                <p   className="ren"> Location</p> <span style={{color:"var(--para-color)"}} className="user-focus">Kingstan{" "}</span>  
                </div>
                <div style={{color:"var(--para-color)"}}  className="front-info">
                  {" "}
                  <span  style={{color:"var(--para-color)"}} className="front-card-spa">£2,40</span> /month
                </div>
              </div>
            </div>
            <div className="card-for-front">
              <div className="front-product-image">
              <Link to='/AdvertDetails'>  <img src={bedpic} alt="" /></Link>
              </div>
              <FontAwesomeIcon className="front-heart" icon={faHeart} />
              <h1 className="front-card-head">Lovely room in Manhattan</h1>
              <h5 className="front-card-headfive">246 Mott St, Kingston</h5>
           
              <p className="front-card-para">
                Wifi • Air conditioning • Kitchen • Recycling • Non smoking •
                Vegan friendly • Balcony • Party people
              </p>
          
              <div className="front-cardkebuttons">
                <button className="front-card-buttons">
                  Looking for a male roommate
                </button>
                <button className="front-card-buttons">Sublet </button>
              </div>

              <div className="front-info-card">
                <div className="front-info">
                  <p  className="ren"> Rent</p>  <span style={{color:"var(--para-color)"}}  className="user-focus">$ 650/month{" "}</span>
                </div>
                <div className="front-info">
                <p  className="ren"> Available</p> <span style={{color:"var(--para-color)"}}  className="user-focus">1 Dec{" "}</span>
                </div>
                <div className="front-info">
                <p   className="ren"> Location</p> <span style={{color:"var(--para-color)"}} className="user-focus">Kingstan{" "}</span>  
                </div>
                <div style={{color:"var(--para-color)"}}  className="front-info">
                  {" "}
                  <span  style={{color:"var(--para-color)"}} className="front-card-spa">£2,40</span> /month
                </div>
              </div>
            </div> */}
            
        </div>
    </div>
    {/* <Footerrent></Footerrent> */}
    </div>
  )
}
