import React, { useState } from "react";
import Footerrent from "./Footerrent";
import { Link } from 'react-router-dom';
import "../ComponentsCSS/AdvertFormNew.css";
import upload_image from '../Attributes/upload_image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,faXmark
 
} from "@fortawesome/free-solid-svg-icons";
function AdvertFormNew() {
  const [showReviewModal, setShowReviewModal]=useState(Boolean)
  const [rating , setRating]=useState(0)
  const [amenitiesList, setAmentiesList]=useState([])
  const [intrestList, setIntrestList]=useState([])
  const [existingRoommateDetails,setExistingRoommateDetails]=useState()
  const [showScheduleModal,setShowScheduleModal]=useState(Boolean)
  const getAmenties = (data) => {
   
    
    if(amenitiesList.indexOf(data) === -1){
     setAmentiesList([...amenitiesList, data])
   
  }
     //setAmentiesListShow(false);
     //setToLocation('')
   }
   const intestData=[
    "Playing a Musical Instrument",
    "Reading,",
    "Writing,",
    "Painting/Drawing",
   "Cooking",
    "Photography",
    "Gardening",
    "Traveling",
    "Hiking",
    "Fitness and Exercise",
    "Yoga",
    "Meditation",
    "Gaming",
    "Watching Movies/TV Shows",
    "Collecting Art or Antiques",
    "Wine Tasting",
    "Fashion",
    "Sports (e.g. Soccer, Basketball, Tennis)",
    "Dancing",
    "Birdwatching",
    "Astronomy",
    "Volunteering",
    "Home DIY Projects",
    "Camping",
    "Playing Chess",
    "Surfing",
    "Sailing",
    "Coding/Programming",
    "Cooking/Baking",
    "Learning a New Language "
   
    ]
   

   const occupationData=[
    "Actor/Actress",
  "Musician",
  "Author",
  "Athlete",
  "Scientist",
   "Politician",
   "Doctor/Physician",
   "Lawyer",
   "Artist",
   "Chef",
   "Engineer",
   "Journalist",
   "Teacher/Professor",
  " Architect",
   "Fashion Designer",
   "Entrepreneur",
   "Filmmaker",
   "Astronaut",
  "Psychologist",
   "Police Officer",
   "Singer",
   "Director",
   "Comedian",
   "CEO (Chief Executive Officer)",
   "Environmentalist",
   "Economist",
   "Philanthropist",
   "Diplomat",
   "Fashion Model",
   "Screenwriter" ,
  
   ]
   const getIntrest = (e) => {
    let _existingRoommateDetails={...existingRoommateDetails}
    
    if(intrestList.indexOf(e.target.value) === -1){
     setIntrestList([...intrestList, e.target.value])
     _existingRoommateDetails["intrest"]=intrestList
     setExistingRoommateDetails(_existingRoommateDetails)
     
  }else{
   
  }
  
  
  }
   function removeIntrest(index) {
    setIntrestList(intrestList.filter((el, i) => i !== index))
    
  }
   
   function removeTo(index) {
     setAmentiesList(amenitiesList.filter((el, i) => i !== index))
   }
  return (
    <div>
      <div className="afnpage">
        <div className="afnpage-container">
        <div style={{display:"flex"}} className="home_and_register">
           <Link to='/'><h4 className="home_and_register">Home &gt;</h4></Link>
           <h4> Register </h4>
          
           </div>
          <h1 className="advert-form-heading">Advert Form</h1>
          <div className="afn-sections">
            <h3 className="sub-heading-advert-form">Advert For</h3>
            {/* <h4 className="activee">Room wanted</h4>
            <h4>Buddy Ups</h4>
            <h4>Room for rent</h4> */}
            <Link className="activee" to="/AdvertFormNew">Room Wanted</Link>
            <Link to="/AdvertFormRWBuddyUp">Buddy Ups</Link>
            <Link to="/AdvertFormRoomWanted">Room for rent</Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">State/Location</label> <br /> 
              <select className="selects" placeholder="Your text here">
                <option className="options" value="1">Your text here</option>
                <option className="options" value="2">Option 2</option>
                <option className="options" value="3">Option 3</option>
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">City</label> <br />
              <select className="selects">
                <option className="options" value="1">Your text here</option>
                <option className="options" value="2">Option 2</option>
                <option className="options" value="3">Option 3</option>
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Land Mark</label> <br />
              <input type="text" placeholder="Your text here" />
            </div>
          </div>

          <div className="afn-sections">
            <h3 >Property preferences</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Room Size</label> <br />
              <select className="selects" placeholder="Your text here">
                 <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="Single">Single</option>
                <option className="options" value="Double">Double</option>
                <option className="options" value="Any">Any</option>
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Rooms for</label> <br />
              <select className="selects">
               <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="Male">Male</option>
                <option className="options" value="Female">Female</option>
                <option className="options" value="Couple">Couple</option>
                <option className="options" value="Bisexual">Bisexual</option>
                <option className="options" value="Gay">Gay</option>
                <option className="options" value="Don't Mind">Don't Mind</option>
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Rooms required</label> <br />
              <select className="selects">
               <option className="options" value="" selected disabled hidden>Select</option>
               <option className="options" value="1">1</option>
                  <option className="options" value="2">2</option>
                  <option className="options" value="3">3</option>
                  <option className="options" value="4">4</option>
                  <option className="options" value="5">5</option>
                  <option className="options" value="6">6</option>
                  <option className="options" value="7">7</option>
                  <option className="options" value="8">8</option>
                  <option className="options" value="9">9</option>
                  <option className="options" value="10">10</option>
                  <option className="options" value="11">11</option>
                  <option className="options" value="12">12</option>
                </select>
               
            </div>
          </div>
          <div className="afn-sections">
            <h3>Room preferences</h3>
          </div>
          <div className="">
          <div className="grid grid-cols-3 gap-4">
          <div className="afc-section-content-container">
              <label className="label-form-text"for="">Occupation of tenant</label> <br />
              <select className="selects" placeholder="selects">
              <option className="options" disabled selected value> Select Occupation</option>
                {occupationData.map(each=>{
                  return(
                   <option className="options" value={each}>{each}</option>
                  )
                })}
               
               
              </select>
                {/* <input type="text" name ='occupation' onChange={(e)=>{changeRoomPreference(e)}}/>  */}
            </div>
            <div className="afc-section-content-container">
            <label className='label-form-text'for="">Landlord occupancy status</label> <br />
            <select className="selects">
                <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="Live In">Live In</option>
                <option className="options" value="Live Out">Live Out</option>
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Interest</label> <br />
              {/* <input type="text" value={intrest} onChange={(e)=>{onChangeIntrest(e)}} onKeyDown={(e)=>{getIntrest(e)}}/> */}
               <select className="selects" placeholder="Your text here" onChange={(e)=>{getIntrest(e)}}>
               <option className="options" value="" selected disabled hidden>Select</option>
                {intestData.map(each=>{
                  return(
                    <option className="options" value={each} > {each}</option>
                  )
                })}
                
                
               
               
               
              </select> <br />
              
              <div className=" grid grid-cols-3 ">
              {intrestList.map((tag, index) => (
                 <div className="afn-gardens-container"  key={index}> 
                 <span>{tag}</span>
                  <span className="afn-cross-icon ml-3" style={{ cursor: "pointer" }} onClick={() => removeIntrest(index)}>&times;</span>
                   </div>
                              
                              ))}
                               </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Bathroom</label> <br />
              <select className="selects" placeholder="Your text here">
               <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="En-suite">En-suite</option>
                <option className="options" value="Shared">Shared</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Smoking</label> <br />
              <select className="selects">
               <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="No">No</option>
                <option className="options" value="No Preference">No Preference</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Pet</label> <br />
              <select className="selects">
               <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="Yes">Yes</option>
                <option className="options" value="No">No</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Youtube Link</label> <br />
              <input type="text" placeholder="paste url link" name ="pets" />
            </div>
            <div className="afc-section-content-container">
            <label className='label-form-text'for="">Furnishing</label> <br />
              <select className="selects" clas>
               <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="Professional">Furnished</option>
                <option className="options" value="Student">Partly furnished</option>
                <option className="options" value="Other">Unfurnished</option>
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Bill</label> <br />
              <select className="selects">
               <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="Shared">Shared</option>
                <option className="options" value="Inclusive">Inclusive</option>
               
              </select>
            </div>
         
          </div>
          
          <div className="grid grid-cols-3 gap-4">
          <div className="afc-section-content-container">
              <label className='label-form-text'for="">Age</label> <br />
              <input type="Number" placeholder="Enter the age" />
            </div>
            <div className="afc-section-content-container">
            <label className='label-form-text'for="">Length of stay</label> <br />
             
              <div className="length-input-div grid grid-cols-2 gap-3">
                <input type="date" className="length-select"></input>
                <input type="date" className="length-select"></input>
             
              </div>
            </div>
            
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Budget</label> <br />
              <input type="text" placeholder="Your text here" />
            </div>
           
          </div>
          </div>
         
          
          <div className="grid grid-cols-3 gap-4">
          <div className="afc-section-content-container">
            <label className='label-form-text'for="">Advert title</label> <br />
              <input type="text" placeholder="Your text here" />
            </div>
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Amenities</label> <br />
              <select className="selects" placeholder="Your text here" onChange={(e)=>{getAmenties(e.target.value)}}>
               <option className="options" value="" selected disabled hidden>Select</option>
         
                <option className="options" value="  Wi-Fi">  Wi-Fi</option>
                <option className="options" value=" Garden-Access"> Garden Access</option>
                <option className="options" value="  Parking"> Parking</option>
                <option className="options" value="Disability-Access"> Disability Access</option>
               
                <option className="options" value="Kitchen">  Kitchen</option>
                <option className="options" value="  Bike Storage"> Bike Storage</option>
                <option className="options" value="  Pets">  Pets</option>
                <option className="options" value=" Electric Charging Point"> Electric Charging Point</option>
                <option className="options" value="  Cleaner">  Cleaner</option>
                <option className="options" value=" Balcony / Patio"> Balcony / Patio</option>
               
               
              </select> 
              <div className=" grid grid-cols-3 ">
              {amenitiesList.map((tag, index) => (
                 <div className="afn-gardens-container"  key={index}> 
                 <span>{tag}</span>
                  <span className="afn-cross-icon ml-3" style={{ cursor: "pointer" }} onClick={() => removeTo(index)}>&times;</span>
                   </div>
                              
                              ))}
              </div>
            
          
           
            </div>
            <div className="afc-section-content-container">
              
              <label className='label-form-text'for="">Upload image</label> <br />
              <input type="file"  placeholder="Select your images"/>
              <div className="afn-photos-div">
                <div className="afn-photos"> 
               
                 </div>
                <p className="afn-view-image">View image</p>
              </div>
            </div>
            </div>
            <div className=" grid grid-cols-3  gap-4 ">
          
            <div  className="afc-section-content-container ">
            <label className='label-form-text' for="">Household</label> <br />
              <select className="selects">
                <option className="options" value="" selected disabled hidden>Select</option>
                <option className="options" value="GBT Household">LGBT Household</option>
                <option className="options" value="Vegetarian Household">Vegetarian Household</option>
                <option className="options" value="Other">Other</option>
              </select>
            </div>
           
            <div className="afc-section-content-container">
              <label className='label-form-text'for="">Descriptions</label> <br />
              <textarea className="bg-white " style={{margin:"0px", resize:"none"}} name="" id="" cols="3" rows="2" placeholder="Your text here"></textarea>
            </div>
            </div>
        </div>
        <div className="cancel-and-submit">
        <Link ><button className="afn-cancel-button" type="reset">Cancel</button></Link>
        <Link><button className="afn-submit-button" onClick={()=>{setShowScheduleModal(true)}} type="submit">Submit</button></Link>
        </div>
      </div>
      {/* <Footerrent/> */}
      {showReviewModal &&
   <div  className='bg-white bg-opacity-100  backdrop-blur-sm  fixed inset-0 flex justify-center'>
 <div className=' w-2/6 h-2/6 mt-11 pt-11'>
       
       <div className='bg-white p-7 text-left '>
        <div className='modal-heading-container mb-3'>
         <h1 className='text-2xl font-semibold review-modal-heading'>Thank you for taking part </h1>
         <p className='text-base mb-1 review_sub w-3/5'>Please complete this document to help us improve future sessions.</p>
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

{showScheduleModal &&
   <div  className='bg-white bg-opacity-100  backdrop-blur-sm  fixed inset-0 flex justify-center'>
 <div className=' w-1/4 h-2/6  self-center'>
       
       <div className='bg-white shadow-2xl p-7 text-left '>
      
      <div className="afc-section-content-container">
              <label className="label-form-texts-schedule mb-4"for="">Schedule for submit later</label> <br />
              <input type="datetime-local" className="mt-2" placeholder="Select Date and Time" />
            </div>

            <p className="or_text mb-2">or</p>
            <div className="flex gap-4">
            <input type="checkbox" className=" checkbox_schedule" /> 
            <label className="label-form-texts-schedule"  for="">Go Live Now</label>
      </div>
      
   <div className="flex grid grid-cols-2  gap-4 mb-1 mt-4">
          <button className="report-cancel-button " style={{width:'100%'}} type="reset" onClick={()=>{setShowScheduleModal(false)}}>Cancel</button>
          <button className="report-submit-button " style={{width:'100%'}} onClick={()=>{setShowReviewModal(true);setShowScheduleModal(false)}} >Submit</button>
          
   
           </div> 
       </div> 
          </div> 

    </div>
   }
    </div>
  );
}

export default AdvertFormNew;
