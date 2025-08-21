import React from 'react'
import { Link } from 'react-router-dom';
import "../ComponentsCSS/Roomwalanav.css"
import roomwalalogo from '../Attributes/roomwala-logo.svg'
import roomwalasearch from '../Attributes/Frame 1000004199.png'
import roomwalafilter from '../Attributes/roomwala-filter.svg'
import msgr from '../Attributes/roomwala-msg.svg'
import notir from '../Attributes/roomwala-noti.svg'
import favr from '../Attributes/roomwala-heart.svg'
import placehold from "../Attributes/placeholder.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
export default function Roomwalanav() {
  return (
    <div className='roomwala-nav-container'>
        <div className='roomwala-nav-logo'>
            <img src={roomwalalogo} alt='img'></img>
        </div>   

        {/* search container */}
      
        <div className='roomwala-search-container'>
            <div className='roomwala-search-box'>
                <button><img src={roomwalasearch} alt='img'></img></button>
                <input className='roomwala-input-box'
                type='text'
                placeholder='Kingston, London'/>
                <button><img src={roomwalafilter} alt='img'></img></button>
            </div>
            <div className='roomwala-current-loc'>
                <h1 className='roomwala-current'>Current location</h1>
                <span><p className='roomwala-locpara'><FontAwesomeIcon className="roomwala-location-icon" icon={faLocationDot} />  Kingston, London</p></span>
            </div>
        </div>  

        
         

        {/* icons     */}
        <div className="roomwalanav-icons">
            
            <button className="roomwalamsg-box"><img src={msgr} alt="msg"/></button>         
            
            
            <button className="roomwalanotification-box"><img src={notir} alt="noti"/></button>
            
            
            <button className="roomwalafavorite-box"><img src={favr} alt="fav"/></button>
            
        </div>

        {/* mode roomwala  */}
        <div className="roomwala-mode">
        <label  className="rswitch">
        <input type="checkbox"/>
         <span className="rslider rround"></span>
        </label>
        </div>

        {/* roomwala profile  */}
        <div className="roomwala-profile">
         <div className="roomwala-profile-circle">
            <img src={placehold} alt=".."/>
            </div>
            <div className="roomwala-text-container">
                <p className="roomwala-profile-name">Name Surname</p>
                <p className="roomwala-profile-designation">designation</p>
                <a className="roomwala-profile-link" href="..">View profile</a>
            </div>
        </div>
    </div>
  )
}