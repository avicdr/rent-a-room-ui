import React from 'react'
import { Link } from 'react-router-dom';
import "../ComponentsCSS/Navbar.css";
import logo from "../Attributes/navbarrentaroomlogo.svg";
import filter from "../Attributes/navfilter.svg";
import search from "../Attributes/Frame 1000004199.png";
import msg from "../Attributes/navmsg.svg";
import noti from "../Attributes/navbell.svg";
import fav from "../Attributes/navheart.svg";
import locIcon from "../Attributes/navIconLocation.svg";
import placehold from "../Attributes/placeholder.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { removetoken } from '../Services/Token/token';
import {AiOutlineClose} from 'react-icons/ai'

export default function Nav2() {
    const [theme, setTheme]= useState("light-theme");
    const [userLogedin, setUserLogedIn]=useState(true)
    const [inputText, setInputText]=useState('Kingston, London')
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
const navigate=useNavigate()
  
  const toggleTheme=()=>{
    if(theme==="light-theme"){
    setTheme("dark-theme");
    }
    else{
      setTheme("light-theme");
    }
  }
  function removeFilter(each){
    const filteredData=filterData.filter(eachs=>{
      return eachs!==each
    })
    setFilterData(filteredData)
  }

  useEffect(()=> {
    document.body.className= theme;
    const tokens=localStorage.getItem("tokens")
   

  }, [theme])
function onSignUp(){
  navigate('/LoginPage',{
    state:{
      data:"signup"
    }
  })
}

function onSignIn(){
  navigate('/LoginPage',{
    state:{
      data:"signin"
    }
  })
}
 
  return (
    <div  className=" ">
       <div className="topnav ">
        <div className='flex gap-11'>
        <div className="logo mr-5 self-center">
          <Link to='/rentaroom'><img src={logo} alt="img"></img></Link> 
        </div>
      
        <div className='search-container-n mr-10 self-center'>
            <div className='search-box-n'>
                <button><img src={search} alt='img'></img></button>
                <input className='input-box-n'
                type='text'
                onChange={(e)=>{setInputText(e.target.value)}}
                value={inputText}
                placeholder='search...'/>
                <button onClick={()=>{setShowFilterModel(true)}}><img src={filter} alt='img'></img></button>
            </div>
           
        </div>  
        <div className='current-loc ml-10 self-center'>
                <h1 className='current'>Current location</h1>
                <div className='locpara'><img className="locIcon" src={locIcon} alt="" />  Kingston, London</div>
            </div>
        </div>
          
       
      
        {/* <div className="nav-icons">
            
            
            <Link className="msg-box" to='/ChatPage'><img src={msg} alt="msg"/></Link>
            
            <button className="notification-box"><img src={noti} alt="noti"/></button>
            
            
            <button className="favorite-box"><img src={fav} alt="fav"/></button>
            
        </div> */}
        <div className='flex gap-11'>
        <div className="mode mr-11 self-center">
        <label  className="switch">
        <input onClick={()=> toggleTheme()}   type="checkbox"/>
         <span className="slider round"></span>
        </label>
        </div>
        <div className='flex gap-3 ml-11 self-center'>
        <button onClick={()=>{onSignIn()}}>
           <div style={{background:"#44C1F0", color:"#FFFFFF", fontFamily:"Gilroy-Medium", borderRadius:"8px", padding:"10px 20px", fontSize:'16px' }} className=" font-medium">
          Sign in
        </div>
        </button>
        <button  onClick={()=>onSignUp()}>
           <div style={{background:"#fff", color:"#303147", fontFamily:"Gilroy-Medium", borderRadius:"8px", padding:"10px 20px",  fontSize:'16px'}} className="">
         Signup
        </div>
        </button>
        </div>
        </div>
      </div>
      {showFilterModel &&
    
    <div  className='bg-white bg-opacity-100 fixed backdrop-blur-sm h-screen flex justify-center   inset-0  '>
  <div className=' w-2/6   shadow-lg overflow-auto'>
        
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
  )
}
