import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../ComponentsCSS/Navbar.css";
import logo from "../Attributes/navbarrentaroomlogo.svg";
import filter from "../Attributes/navfilter.svg";
import search from "../Attributes/search-normal.svg";
import msg from "../Attributes/navmsg.svg";
import noti from "../Attributes/navbell.svg";
import locIcon from "../Attributes/navIconLocation.svg";
import fav from "../Attributes/navheart.svg";
import placehold from "../Attributes/placeholder.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Context from "../Services/Context/Context";
// import Proptypes from 'prop-types';
import {AiOutlineClose} from 'react-icons/ai'


// const element = <FontAwesomeIcon icon={faMessage} />




function Navbar(props) {
    const [showFilterModel,setShowFilterModel]=useState(false)
    const [filterData, setFilterData]=useState([
      "Usa", "20km", "335088", "Vandor"
    ])

    function removeFilter(each){
      const filteredData=filterData.filter(eachs=>{
        return eachs!==each
      })
      setFilterData(filteredData)
    }
const value=props
const theme=value.theme
const toogletheme=value.toogletheme

   

    document.body.className= theme;

  
  return (
    
   
        <div className="topnav">
             <div className='flex gap-11'>
        <div className="logo mr-5 self-center">
          <Link to='/rentaroom'><img src={logo} alt="img"></img></Link> 
        </div>
      
        <div className='search-container-n mr-10 self-center'>
            <div className='search-box-n'>
            <Link to="/FrontPage"><button className="srch"><img  src={search} alt='img'></img></button></Link>
                <input className='input-box-n'
                type='text'
                placeholder='Kingston, London'/>
                <button onClick={()=>{setShowFilterModel(true)}}><img src={filter} alt='img'></img></button>
            </div>
           
        </div>  
         
          
        <div className='current-loc ml-10 self-center'>
                <h1 className='current'>Current location</h1>
                <div className='locpara'><img className="locIcon" src={locIcon} alt="" />  Kingston, London</div>
            </div>
            </div>

        <div className="nav-icons self-center">
            
            {/* <button className="msg-box"><img src={msg} alt="msg"/></button>          */}
            <Link className="msg-box" to='/ChatPage'><img src={msg} alt="msg"/></Link>
            
            <button className="notification-box"><img src={noti} alt="noti"/></button>
            
            
            <Link className="favorite-box" to='/Saved'><img src={fav} alt="fav"/></Link>
            
        </div>
        <div className='flex gap-11'>
        <div className="mode mr-11 self-center">
        <label  className="switch">
        <input onClick={()=> toogletheme()} checked={theme==="dark-theme"}   type="checkbox"/>
        
         <span className="slider round"></span>
        </label>
        </div>
        <div className="profile  ml-11 self-center">
        
            <img style={{width:"38px", height:"38px"}} src={placehold} alt=".."/>

            <div className="text-container">
                <p className="profile-name-navbar">Name Surname</p>
                {/* <a className="profile-link" href="..">View profile</a> */}
                <Link className="profile-link" to="/ProfilePage">View Profile</Link>
            </div>
        </div>
        </div>
        {showFilterModel &&
    
    <div  className='bg-white bg-opacity-100  model-navbar backdrop-blur-sm h-screen flex justify-center z-40   inset-0  '>
  <div className=' w-2/6 absolute   shadow-lg overflow-auto'>
        
        <div className='bg-white p-5 mt-3 text-left  '>
          <ul className="flex gap-4 mb-5">
            {filterData.map(each=>{
              return(
                <li className="each_filter flex">{each} <span><AiOutlineClose style={{cursor:'pointer'}} onClick={()=>{removeFilter(each)}} className="ml-4 mt-1" /></span></li>

              )
            })}
          </ul>
          <h5 className="search_text">Search For</h5>
          <div className="flex gap-4">
            <div className="flex gap-2">
            <input className="filter_checkbox " value="ac" name="vendor" type="radio"/>
            <label className="checkbox_filter_label " htmlFor="ac">Apartment</label><br></br>
            {/* <input className="filter_checkbox" value="ab" type="radio"/>
            <label className="checkbox_filter_label" name="vendor" htmlFor="ab">Apartment</label><br></br> */}
            </div>
            <div className="flex gap-2">
            <input className="filter_checkbox " value="ac" name="vendor" type="radio"/>
            <label className="checkbox_filter_label " htmlFor="ac">Vendor</label><br></br>
            </div>
            <div className="flex gap-2">
            <input className="filter_checkbox " value='ad' name="vendor" type="radio" />
            <label className="checkbox_filter_label" htmlFor="ad">Buddy up</label><br></br>
            </div>
            </div> 
            <div className="afc-section-content-container">
              <label className="label-form-texts"for="">Search By Location Name</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-texts"for="">Search By City</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-texts"for="">Search By Postcode / Zip Code</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-texts"for="">Search By Distance</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-texts"for="">Search By Advertisment Type</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-texts"for="">Search By Advertised Rent / Affordability</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
               
              </select>
            </div>
            

       
    <div className="flex justify-end gap-4 ">
           <button className="report-cancel-button" type="reset" onClick={()=>{setShowFilterModel(false)}}>Cancel</button>
           <button className="report-submit-button " onClick={()=>{setShowFilterModel(false)}} >Filter</button>
           
    
            </div> 
        </div> 
           </div> 
 
     </div>
    
    }
      </div>
    
  );
}

// Navbar.Proptype= {
//   title: Proptypes.string
//   //we can set title as required value by using syntax= title: Proptypes.string.isRequired
// }

// //we can also set default values for our props

// Navbar.defaultProps= {
//   title: "Default title"
// }

export default Navbar