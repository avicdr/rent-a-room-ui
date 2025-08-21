import React, { useState } from 'react'
import Footerrent from './Footerrent';
import { Link } from 'react-router-dom';
import '../ComponentsCSS/AdvertDetails.css';
import hall from "../Attributes/roomadvert.svg"
import you from "../Attributes/youtube.svg"
import roomimg from "../Attributes/Rectangle.svg";
import bnda from "../Attributes/bnda.svg";
import avatar from "../Attributes/Avatar.svg"
import rev1 from "../Attributes/rev 1.svg"
import rev2 from "../Attributes/rev 2.svg"
import rev3 from "../Attributes/rev 3.svg"
import { Map, GoogleApiWrapper } from "google-maps-react";
import { FontAwesomeIcon,} from "@fortawesome/react-fontawesome";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill,BsExclamationCircle } from "react-icons/bs"
import {IoIosCheckmarkCircleOutline,IoIosClose} from 'react-icons/io'
import {HiOutlineDocumentPlus} from 'react-icons/hi2'

import {
  faStar
} from "@fortawesome/free-solid-svg-icons";
import Context from "../Services/Context/Context";
import Navbar from './Navbar';

const AdvertRoomsDetails = (props) => {
  const [showModal, setShowModal]=useState(Boolean)
  const [count, setCount]=useState(1)
  const [showReviewModal, setShowReviewModal]=useState(Boolean)
  const [rating , setRating]=useState(0)

  const { google } = props;

  function scrollRight(){
    if(count<3){
      
    
    setCount((prevState) => (
     prevState+1
    ));
    }
    
    document.getElementById('scroll-container').scrollLeft += 830;
    document.getElementById("scroll-container").style.transition = "all 5s";
  }

  function scrollLeft(){
    if(count>1){
    setCount((prevState) => (
     prevState-1
    ));
    }
    document.getElementById('scroll-container').scrollLeft -= 830;
  }
  return(
    <Context.Consumer>
     {value=>{
      const {toogletheme,theme}=value
      console.log(showModal)
  return (
    <div>
    <Navbar toogletheme={toogletheme} theme={theme} />
    <div className='AdvertDetails-links'>
    
      <div className='advert-links'>
        <a href='/rentaroom'>Home &#x3e;</a>
        <a href=''>Search &#x3e;</a>
        <a href=''>Kingston &#x3e;</a>
        <a href=''>Double Room </a>
      </div>
   
    <div className='AdvertRoomsDetails-maincontainer'>
               
      {/* left container */}
      <div className='AdvertRooms-left'>

        {/* first border */}
      <div className='rooms-details'>
        <h1 className='rooms-desc'>Double Room in House share | All bills included</h1>
        <div className='flex  justify-between'>
        <p className='deliever-date'>1 Day ago</p>
        <div className='flex mt-4' style={{cursor:'pointer'}}  onClick={()=>{setShowModal(true)}}>
        <p className='text_report ' style={{color:'#5C5C5C'}}>Report</p>
        < BsExclamationCircle className='text-base mt-1 ml-3 text-sky-400  '/>
        </div>
        </div>
      </div>

         {/* second border */}
      <div className='rooms-location'>
        <div className='AdvertRoomsDetails-map'>
        <Map 
            className="ADgoogle-map"
            google={google}
            style={
              {
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px'
              }
            }
            zoom={10}
            initialCenter={{
              lat: 28.70406,
              lng: 77.102493,
            }}
          />
        </div>
        <div className='rooms-location-right pt-3 flex flex-col justify-between  '>
        <h5 className='Advert-room-maploc'>1995 Broadway, Kingston, London</h5>
        <a className='AdvertRooms-mapView text-sky-400' href='..'>View on Map</a>
        </div>
      </div>

         {/* table  */}
      <table className='roomsDetails-tab'>
        <tr className='roomsDetails-row' >
          <th className='room_details_heading'>Rent</th>
          <td className='roomsDetails-data'>£650 /month</td>
        </tr>
        <tr className='roomsDetails-row'>
          <th className='room_details_heading'>Available</th>
          <td className='roomsDetails-data'>1 Dec</td>
        </tr>
        <tr className='roomsDetails-row'>
          <th className='room_details_heading'>Location</th>
          <td className='roomsDetails-data'>Kingston</td>
        </tr>
        <tr className='roomsDetails-row'>
          <th className='room_details_heading'>Occupation</th>
          <td className='roomsDetails-data'>Dont mind</td>
        </tr>
        <tr className='roomsDetails-row'>
          <th className='room_details_heading'>Room size</th>
          <td className='roomsDetails-data'>Double Room</td>
        </tr>
        <tr className='roomsDetails-row'>
          <th className='room_details_heading'>Gender</th>
          <td className='roomsDetails-data'>Dont mind</td>
        </tr>
      </table>

         {/* features table */}
         <table className='features-tab'>
        <tr>
          <th className='room_details_headings' >Features Amenities</th>
        </tr>
        <tr>
          <th >
             &nbsp;
          </th>
        </tr>
        <tr>
          <td className='roomsDetails-data'>• Wifi</td>
        </tr>
        <tr>
          <td className='roomsDetails-data'>• Pets Allowed</td>
        </tr>
        <tr>
          <td className='roomsDetails-data'>• Kitchen</td>
        </tr>
        <tr>
          <td className='roomsDetails-data'>• Gym nearby</td>
        </tr>
        <tr>
          <td className='roomsDetails-data'>• Bathroom ensuite</td>
        </tr>
        <tr>
          <td className='roomsDetails-data'>• Parking available</td>
        </tr>
      </table>

      

       {/* review */}
       
      </div>


       
       {/* right container */}
      <div className='AdvertRooms-right'>
        {/* room image */}
        <img className='AdvertRooms-photo' src={roomimg} alt='img'>
        </img>
      
        
{/* <div id="indicators-carousel" className="relative w-full" data-carousel="static">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
     
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
     
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
   
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
   
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}

      


        {/* advert profile */}
        <div className=' flex mt-7 advertroom-saved-borderfirst'>
         <img className='AdvertRooms-person-photo  border-2 border-black rounded-full' src={bnda} alt='img'></img>
         <div  className='ml-3'>
         <h3 className='person-name'>Richard Lucas </h3> 
         <Link   className='person-contact-button mt-2' to='/AdvertForm' ><button >Contact</button></Link>
         </div>
        </div>

        {/* rooms detail */}
        <p className='Detailsof-room'>
        Newly refurbished house in one of the best roads and areas in Edgbaston Birmingham! Just off the Hagley road, great transport links to city centreNew furniture, Beds and mattresses in every room!! Must be in receipt of Universal credit in order to be accepted. Message or call today to secure your room!
        </p>

        {/* extra info */}
        <div className='advert-room-saved-paras '>
          <div className='advertroom-saved-borderfirst'>
          In a hurry?<a className='advertroom-show-interest' href='..'> Show interest </a> and we will send the advertiser your profile
          </div>
          {/* <div className='advertroom-second-border'>
            <div className='advertroom-saved-desc'>
          <p>More from the same advertiser</p><br></br>
          <p>1 Room Studio, Message Now: </p>
            <p>Birmingham from $617</p>
          </div>
          <img className='hall-photo' src={hall} alt='img'></img>
          </div> */}
          
         
       </div>
       
      </div>
      
    </div>
    <div className='review-container'>
        {/* <h5>Review</h5>
        <div className='reviewed-ratings-stars'>
        <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <p className='review-filter'>Filter</p>
        <div className='review-third'>
        <p className='customer-numberofviews'>32 Customers reviewed</p>
        <a className='see-all'>See all</a>
        </div>

        </div> */}

        <div className='flex justify-between '>
     
     <h5 className='room_details_headings'>Review</h5>
        <button className='mr-11 reveiw_text flex' onClick={()=>{setShowReviewModal(true)}} >Give Reviews <HiOutlineDocumentPlus className='ml-1 mt-1' /></button>
        </div>
     <div id='scroll-container' className='review-internal-container flex '>


       <div className='each-review w-1/2'>
        <div className='reviewed-profile'>


        
          <div className='reviewed-persondetails'>
            <div className='reivew-profile'>
            <img className='reviewed-personphoto' src={avatar} alt='img'></img>
            <div className='profile-name'>
            <p style={{display:"flex", gap:"5px"}} className='reviewed-name'>Kristin Watson 1
           </p>
           <small className='reviewed-location'>London</small>
            </div>
            </div>
          <div className='ratings'>
          <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
          </div>
        </div>
        </div>

        
        <p className=' review-font-black'>“It is wonderful associating with Garden of Eden property Developers. Right from our decision of investing till the end their assistance was fabulous, though we live here abroad, registration went so smoothly and we are really very happy with Garden of Eden”</p>
        {/* <div className='reviewed-photos'>
          <img src={rev1} alt='img'></img>
          <img src={rev2} alt='img'></img>
          <img src={rev3} alt='img'></img>
        </div> */}

        {/* <div className='reviewed-photo-desc'>
          <p>Helpful ?</p>
          <div className='review-options'>
          <label className="'ad-label-checkbox">
        
           <span className="label-text">Yes(2)</span>
          </label>
          <hr className='ad-checkbox-line'></hr>
          <label className='ad-label-checkbox' >
           
           <span className="label-text">NO(0)</span>
          </label>
          </div>
          <p className='date-review'>Nov 9</p>
        </div> */}
        </div>
        <div className='each-review w-1/2'>
        <div className='reviewed-profile'>


        
          <div className='reviewed-persondetails'>
            <div className='reivew-profile'>
            <img className='reviewed-personphoto' src={avatar} alt='img'></img>
            <div className='profile-name font-black'>
            <p style={{display:"flex", gap:"5px"}} className='reviewed-name'>Kristin Watson 2
           </p>
           <small className='reviewed-location'>London</small>
            </div>
            </div>
          <div className='ratings'>
          <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
          </div>
        </div>
        </div>

        
        <p className=' review-font-black'>“It is wonderful associating with Garden of Eden property Developers. Right from our decision of investing till the end their assistance was fabulous, though we live here abroad, registration went so smoothly and we are really very happy with Garden of Eden”</p>
        {/* <div className='reviewed-photos'>
          <img src={rev1} alt='img'></img>
          <img src={rev2} alt='img'></img>
          <img src={rev3} alt='img'></img>
        </div> */}

        {/* <div className='reviewed-photo-desc'>
          <p>Helpful ?</p>
          <div className='review-options'>
          <label className="'ad-label-checkbox">
        
           <span className="label-text">Yes(2)</span>
          </label>
          <hr className='ad-checkbox-line'></hr>
          <label className='ad-label-checkbox' >
           
           <span className="label-text">NO(0)</span>
          </label>
          </div>
          <p className='date-review'>Nov 9</p>
        </div> */}
        </div>
        <div className='each-review w-1/2'>
        <div className='reviewed-profile'>


        
          <div className='reviewed-persondetails'>
            <div className='reivew-profile'>
            <img className='reviewed-personphoto' src={avatar} alt='img'></img>
            <div className='profile-name'>
            <p style={{display:"flex", gap:"5px"}} className='reviewed-name'>Kristin Watson 3
           </p>
           <small className='reviewed-location'>London</small>
            </div>
            </div>
          <div className='ratings'>
          <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
          </div>
        </div>
        </div>

        
        <p className=' review-font-black'>“It is wonderful associating with Garden of Eden property Developers. Right from our decision of investing till the end their assistance was fabulous, though we live here abroad, registration went so smoothly and we are really very happy with Garden of Eden”</p>
        {/* <div className='reviewed-photos'>
          <img src={rev1} alt='img'></img>
          <img src={rev2} alt='img'></img>
          <img src={rev3} alt='img'></img>
        </div> */}

        {/* <div className='reviewed-photo-desc'>
          <p>Helpful ?</p>
          <div className='review-options'>
          <label className="'ad-label-checkbox">
        
           <span className="label-text">Yes(2)</span>
          </label>
          <hr className='ad-checkbox-line'></hr>
          <label className='ad-label-checkbox' >
           
           <span className="label-text">NO(0)</span>
          </label>
          </div>
          <p className='date-review'>Nov 9</p>
        </div> */}
        </div>
        <div className='each-review'>
        <div className='reviewed-profile'>


        
          <div className='reviewed-persondetails'>
            <div className='reivew-profile'>
            <img className='reviewed-personphoto' src={avatar} alt='img'></img>
            <div className='profile-name'>
            <p style={{display:"flex", gap:"5px"}} className='reviewed-name'>Kristin Watson 4
           </p>
           <small className='reviewed-location'>London</small>
            </div>
            </div>
          <div className='ratings'>
          <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span ><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
        <span><FontAwesomeIcon className="rating-stars" icon={faStar}/></span>
          </div>
        </div>
        </div>

        
        <p className=' review-font-black'>“It is wonderful associating with Garden of Eden property Developers. Right from our decision of investing till the end their assistance was fabulous, though we live here abroad, registration went so smoothly and we are really very happy with Garden of Eden”</p>
        {/* <div className='reviewed-photos'>
          <img src={rev1} alt='img'></img>
          <img src={rev2} alt='img'></img>
          <img src={rev3} alt='img'></img>
        </div> */}

        {/* <div className='reviewed-photo-desc'>
          <p>Helpful ?</p>
          <div className='review-options'>
          <label className="'ad-label-checkbox">
        
           <span className="label-text">Yes(2)</span>
          </label>
          <hr className='ad-checkbox-line'></hr>
          <label className='ad-label-checkbox' >
           
           <span className="label-text">NO(0)</span>
          </label>
          </div>
          <p className='date-review'>Nov 9</p>
        </div> */}
        </div>
        </div>
        <div className='pagination-container'>
      
       
      
          <button type="button" className='btn-arrow ' onClick={()=>{ scrollLeft()}} > <BsFillArrowLeftCircleFill /> </button>
        <p className='page-text'>{count} / 4</p>
       
        <button type="button" className='btn-arrow' onClick={()=>{ scrollRight()}}> < BsFillArrowRightCircleFill /> </button>
        </div>
        
       </div>
    {/* <Footerrent/> */}
    </div>
    {showModal&& 
     <div className='bg-white bg-opacity-100  backdrop-blur-sm w-full h-full fixed inset-0 flex justify-center'>
      
     <div className=' w-2/6 h-2/6 '>
       
    <div className='bg-white p-7 text-left shadow-xl '>
      <h1 className='report_heading mb-4'>Content Reporting and Moderation</h1>
    <div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Abusive or Harassing Content: </p>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Hate Speech and Discrimination:</p>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Violence and Self-Harm: </p>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Explicit or Adult Content:</p>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Spam or Misleading Content:</p>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Copyright Infringement: </p>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Impersonation: </p>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Privacy Violation: </p>
</div>
<div className="flex items-center mb-6">
    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <p for="default-checkbox" className="ml-2 report_text" style={{color:"#414141"}}>Scams or Fraudulent Content: </p>
</div>
<div className="flex gap-4">
       <button className="report-cancel-button" type="reset" onClick={()=>{setShowModal(false)}}>Cancel</button>
       <button className="report-submit-button" onClick={()=>{setShowModal(false)}} >Submit</button>
       

        </div> 
    </div> 
       </div>   
   </div>
   }

   {showReviewModal &&
   <div  className='bg-white bg-opacity-25  backdrop-blur-sm w-full h-full fixed inset-0 flex justify-center'>
 <div className='w-2/6 h-2/6 '>
       
       <div className='bg-white p-7 text-left '>
        <div className='modal-heading-container mb-3'>
         <h1 className=' review-modal-heading'>User Reviews and Feedback</h1>
         <p className='mb-1 review_sub'>Please complete this document to help us improve future sessions.</p>
      </div>
      <h1 className='mb-3 review_label'>1.Please let us know about your experince.</h1>
      <textarea className='h-1/2 text_area_review w-full'  />
      <h1 className='mb-3 review_label'>2.Rate your experince. </h1>
      <div className='flex gap-4 mb-9'>
      <button className={`rating-button ${rating>=1&&"rating-active-button"} `} type="reset" onClick={()=>{setRating(1)}}>1</button>
      <button className={`rating-button ${rating>=2&&"rating-active-button"} `} type="reset" onClick={()=>{setRating(2)}}>2</button>
      <button className={`rating-button ${rating>=3&&"rating-active-button"} `} type="reset" onClick={()=>{setRating(3)}}>3</button>
      <button className={`rating-button ${rating>=4&&"rating-active-button"} `} type="reset" onClick={()=>{setRating(4)}}>4</button>
      <button className={`rating-button ${rating>=5&&"rating-active-button"} `} type="reset" onClick={()=>{setRating(5)}}>5</button>

      </div>
   <div className="flex justify-end gap-4 mb-1">
          <button className="report-cancel-button" type="reset" onClick={()=>{setShowReviewModal(false)}}>Cancel</button>
          <button className="report-submit-button " onClick={()=>{setShowReviewModal(false)}} >Submit</button>
          
   
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
// export default AdvertRoomsDetails
export default GoogleApiWrapper({
  apiKey: "AIzaSyAHZ8-Ovxvgpl_9NmgT0y7kMcQC94ZR1kI",
})(AdvertRoomsDetails);
