import React, { useState } from "react";
import Footerrent from "./Footerrent";
import { Link } from 'react-router-dom';
import "../ComponentsCSS/AdvertFormNew.css";
import upload_image from '../Attributes/upload_image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,faXmark
 
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';

import { getuserdetails,gettoken } from "../Services/Token/token";
import apiurl from "../Services/apiendpoint/apiendpoint";
import PriceModal from "./PriceModal";

function AdvertFormNew() {
  const [amenitiesList, setAmentiesList]=useState([])
  const [intrestList, setIntrestList]=useState([])
  const [zipCode,setZipCode]=useState("")
  const [address, setAddress]=useState('')
  const [houseNumber,setHouseNumber]=useState('')
  const [street, setStreet]=useState('')
  const [city,setCity]=useState('')
  const [intrest,setIntrest]=useState('')
  const [datas, setDatas]=useState()
  const [location,setLocation]=useState()
  const [existingRoommateDetails,setExistingRoommateDetails]=useState()
  const [roommatePreferences, setRoommatePreferences]=useState()
  const [room,setRoom]=useState()
  const [image,setImage]=useState('')
  const[showImage, setShowImage]=useState('')
  const [showModal, setShowModal]=useState(false)
  const data=getuserdetails()
  const userId=(data?._id)
  const [showReviewModal, setShowReviewModal]=useState(Boolean)
  const [rating , setRating]=useState(0)

  
  var user= {
    email: "sathiyaibe@gmail.com",
    _id: '64b6160e993bf2fbcfc6cc90',
  }
  // var location=
  // {
  //   "pincode": "",
  //   "state": "",
  //   "city": "",
  // }
  // var roommatePreferences ={
  //   "sizeAvailable": "",
  //   "genderAllowed": "",
  //   "yourRole": "",
  //   "occupation": "",
  //   "gender": "",
  //   "landlordOccupancy": "",
  //   "bathroom": "",
  //   "smoking": "",
  //   "housingBenefit": "",
  //   "availibility": "",
  //   "bill": "",
  //   "lengthOfStay": {
  //     "minimum": "",
  //     "maximum": ""
    
  // },
  
  //   "studentAccomodation": "",
  //   "furnishing": "",
  
   
  //   "amenities": [],
  //   "pets": ""
  // }
    var rent= {
      "amount": ""
    }

  let age= {
    "minimum": "",
    "maximum": ""
  }
 let ageOfExisitingTenants= {
    "minimum": "",
    "maximum": ""
  }

  // var existingRoommateDetails= {
  //   "occupation": "",
  //   "intrest": [],
  //   "age": "",
  //   "smoking": "",
  //   "pets": "",
  //   "images": [],
  //   "advertTitle": "",
  //   "description": ""
  // }




const getAmenties = (data) => {
 
  let _roommatePreferences={...roommatePreferences}
  if(amenitiesList.indexOf(data) === -1){
   setAmentiesList([...amenitiesList, data])
   _roommatePreferences["amenities"]=amenitiesList
  setRoommatePreferences(_roommatePreferences)
}
else{
  toast.error("Already Present")
}

 }
 function removeTo(index) {
   setAmentiesList(amenitiesList.filter((el, i) => i !== index))
 }
 const getIntrest = (e) => {
  let _existingRoommateDetails={...existingRoommateDetails}
  
  if(intrestList.indexOf(e.target.value) === -1){
   setIntrestList([...intrestList, e.target.value])
   _existingRoommateDetails["intrest"]=intrestList
   setExistingRoommateDetails(_existingRoommateDetails)
   
}else{
  toast.error("Already Present")
}


}
 

//  function onChangeIntrest(e){
//   setIntrest(e.target.value)
// }
 function removeIntrest(index) {
   setIntrestList(intrestList.filter((el, i) => i !== index))
   
 }
 function changeLocation(e){
  let _location={...location}
  _location[e.target.name]=e.target.value
  setLocation(_location)

 }

 function changeRoom(e){
  let _room={...room}
  _room[e.target.name]=e.target.value
  setRoom(_room)

 }

 function changeRoomPreference(e){
  let _roommatePreferences={...roommatePreferences}
  if(e.target.value==="true"){
    _roommatePreferences[e.target.name]=true
  }else if(e.target.value==="false"){

    _roommatePreferences[e.target.name]=false

  }else{
    _roommatePreferences[e.target.name]=e.target.value
  }
 
  setRoommatePreferences(_roommatePreferences)
 
 
 }

 function changeExistingRoommate(e){

  let _existingRoommateDetails={...existingRoommateDetails}
  if(e.target.value==="true"){
    _existingRoommateDetails[e.target.name]=true
  }else if(e.target.value==="false"){

    _existingRoommateDetails[e.target.name]=false

  }else{
    _existingRoommateDetails[e.target.name]=e.target.value
  }
 
  setExistingRoommateDetails(_existingRoommateDetails)
 }

 function changeAge(e){
 
  
 
  age[e.target.name]=e.target.value

  if(age["minimum"].length>0&&age["maximum"].length>0){
    let _roommatePreferences={...roommatePreferences}
    _roommatePreferences["age"]=age
    setRoommatePreferences(_roommatePreferences)
  }
 


 }

 function changeAgeExisting(e){
 
  
 
  ageOfExisitingTenants[e.target.name]=e.target.value

  if(ageOfExisitingTenants["minimum"].length>0&&ageOfExisitingTenants["maximum"].length>0){
    let _roommatePreferences={...roommatePreferences}
    _roommatePreferences["age"]=age
    setRoommatePreferences(_roommatePreferences)
  }
 


 }
 function changeAmount(e){
  let _roommatePreferences={...roommatePreferences}

  rent[e.target.name]=e.target.value
  _roommatePreferences["rent"]=rent
  setRoommatePreferences(_roommatePreferences)
 }

 function handleClose(){
  setShowModal(false)
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

async  function OnSubmit(){


const payload={
user,location:location,vendorPreferences:roommatePreferences,currentHouseholdDetails:existingRoommateDetails, 
}
console.log(payload)

const form = new FormData();
form.append('file', image);
form.append("advert", payload)
// try {
//   console.log(gettoken())
//   const value = await fetch(`${apiurl()}/api/vendorAdvert/addAdvert`, {
//     method: "POST",
//     body: form,
//     headers: {
//       Authorization: `Bearer ${gettoken()}`,
//     },
//   })
//   console.log(value)

//  }catch(err){
// console.log(err)
//  }
// }
setShowModal(true)
}

function updateImage(e){
  const data=(e.target.files[0])
 
   const url=URL.createObjectURL(data)
  
   setImage(url)
   setShowImage(true)
   
 }
  return (
    <div className="">
      <div className="afnpage">
        <div className="afnpage-container">
        <div style={{display:"flex"}} className="home_and_register">
           <Link to='/'><h4 className="home_and_register">Home &gt;</h4></Link>
           <h4> Advertisement &gt; </h4>
           <h4> Room for rent</h4>
           </div>
          <h1 className="advert-form-heading">Advert Form</h1>
          <div className="afn-sections">
            <h3>Advert For</h3>
            <Link to="/AdvertFormNew">Room Wanted</Link>
            <Link to="/AdvertFormRWBuddyUp">Buddy Ups</Link>
            <Link className="activee" to="/AdvertFormRoomWanted">Room for rent</Link>
          </div>
          <div  className="grid grid-cols-3 gap-4">
          <div className="afc-section-content-container">
              <label className="label-form-text"for="">Zip Code</label> <br /> 
           
            <select className="selects" placeholder="Your text here" name="sizeAvailable" onChange={changeRoomPreference}>
                 <option value="" selected disabled hidden>Select</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option> 
                             </select>
            </div>
            <div  className="afc-section-content-container">
              <label className="label-form-text"for="">Select Address</label> <br />
              
            <select className="selects" placeholder="Your text here" name="sizeAvailable" onChange={changeRoomPreference}>
                 <option value="" selected disabled hidden>Select</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option> 
                             </select>
            </div>
           
          </div>

          <div className="afn-sections">
            <h3>Custom Address</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">House name or number*</label> <br />
              <input type="text" placeholder="Your text here" name ='houseNumber' onChange={(e)=>{changeLocation(e)}}/>
            </div>
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">Street number*</label> <br />
              <input type="text" placeholder="Your text here"  name ='streetNumber' onChange={(e)=>{changeLocation(e)}}/>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Town or City*</label> <br />
              <input type="text" name ='city' placeholder="Your text here" onChange={(e)=>{changeLocation(e)}}/> 
            </div>
          </div>
          <div className="afn-sections">
            <h3>Property preferences</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
          <div className="afc-section-content-container">
              <label className='label-form-text'for="">Room Size</label> <br />
              <select className="selects" placeholder="Your text here">
                 <option value="" selected disabled hidden>Select</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Any">Any</option>
              </select>
            </div>
          <div className="afc-section-content-container">
              <label className="label-form-text"for="">Room Dimensions</label> <br />
              {/* <select className="selects" placeholder="Your text here" name="sizeAvailable" onChange={changeRoom}>
                 <option value="" selected disabled hidden>Select</option>
                <option value="Single">aa</option>
                <option value="Double">Double</option>
                <option value="Any">Any</option>
              </select> */}
              <div className="grid grid-cols-3 flex gap-3">
              <input type="text" placeholder="width" name ="availibility"  />
              <input type="text" placeholder="length" name ="availibility" />
              <select className="selects" placeholder="Your text here" name="sizeAvailable" onChange={changeRoom}>
                 <option value="" selected disabled hidden>Select</option>
                <option selected value="cm">cm</option>
                <option value="m">m</option>
                <option value="feet">feet</option>
              </select>
              </div>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Room Available</label> <br />
              <select className="selects" placeholder="Your text here" name="available" onChange={changeRoom}>
                 <option value="" selected disabled hidden>Select</option>
              <option value="Yes">Yes</option>
                <option value="No ">No </option>
                </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Rooms for</label> <br />
              <select className="selects"  name="genderAllowed" onChange={changeRoom}>
               <option value="" selected disabled hidden>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Couple">Couple</option>
                <option value="Bisexual">Bisexual</option>
                <option value="Gay">Gay</option>
                <option value="Don't Mind">Don't Mind</option>
              </select>
            </div>
         
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">I am a?</label> <br />
              <select className="selects" placeholder="Your text here"  name="yourRole" onChange={changeRoom}>
              <option value="" selected disabled hidden>Select</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
             
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Occupation of tenant</label> <br />
              <select className="selects" placeholder="selects">
              <option disabled selected value> Select Occupation</option>
                {occupationData.map(each=>{
                  return(
                   <option value={each}>{each}</option>
                  )
                })}
               
               
              </select>
                {/* <input type="text" name ='occupation' onChange={(e)=>{changeRoomPreference(e)}}/>  */}
            </div>
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">Landlord occupancy status</label> <br />
            <select className="selects">
                <option name="landlordOccupancy" value="" selected disabled hidden onChange={changeRoomPreference}>Select</option>
                <option value="Live In">Live In</option>
                <option value="Live Out">Live Out</option>
              </select>
            </div>
          
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">Age of tenant</label> <br />
              <div className="length-input-div">
              <input type="text" name ="minimum" placeholder="Minimum Age" onChange={(e)=>{changeAge(e)}}/>
              <input type="text" name ='maximum'  placeholder="Maximum Age" onChange={(e)=>{changeAge(e)}}/>
              </div>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Bathroom</label> <br />
              <select className="selects" placeholder="Your text here" name="bathroom" onChange={changeRoomPreference}>
               <option value="" selected disabled hidden>Select</option>
                <option value="En-suite">En-suite</option>
                <option value="Shared">Shared</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Smoking</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden name="smoking" onChange={changeRoomPreference}>Select</option>
                <option value="false" >No</option>
                <option value="true">No Preference</option>
               
              </select>
            </div>
         
          <div className="afc-section-content-container">
              <label className="label-form-text"for="">Housing Benefit Tenant?</label> <br />
              
           
              <div className="grid grid-cols-2 gap-3">
                <select className="selects length-select">
                <option selected>Minimum Months</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select className="selects length-select">
                <option selected>Maximum Months </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
             
            </div>
            </div>  
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">Availibility of property</label> <br />
              <input type="date" placeholder="Your text here" name ="availibility" onChange={(e)=>{changeRoomPreference(e)}} />
            </div>
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">Length to stay</label> <br />
              <div className="length-input-div">
                <input type="date" className="length-select"></input>
                <input type="date" className="length-select"></input>
              </div>
            </div>
         
          <div className="afc-section-content-container">
              <label className="label-form-text"for="">Bill</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden name="bill" onChange={changeRoomPreference}>Select</option>
                <option value="Shared">Shared</option>
                <option value="Inclusive">Inclusive</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">Furnishing</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden name="furnishing" onChange={changeRoomPreference}>Select</option>
                <option value="Professional">Furnished</option>
                <option value="Student">Partly furnished</option>
                <option value="Other">Unfurnished</option>
              </select>
            </div>
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">Rent</label> <br />
              <input type="number" placeholder="Your text here" name="amount" onChange={(e)=>{changeAmount(e)}} />
            </div>
          
          <div  className="afc-section-content-container ">
            <label className="label-form-text" for="">Student accomodation property?</label> <br />
              <select className="selects"  name="studentAccomodation" onChange={changeRoomPreference}>
                <option value="" selected disabled hidden>Select</option>
                <option value="true">YES</option>
                <option value="false">NO</option>
              </select>
            </div>
            <div className="afc-section-content-container ">
              <label className="label-form-text"for="">Amenities</label> <br />
              <select className="selects" placeholder="Your text here" onChange={(e)=>{getAmenties(e.target.value)}}>
               <option value="" selected disabled hidden>Select</option>
         
                <option value="Wi-Fi">  Wi-Fi</option>
                <option value="Garden-Access"> Garden Access</option>
                <option value="Parking"> Parking</option>
                <option value="Disability-Access"> Disability Access</option>
               
                <option value="Kitchen">  Kitchen</option>
                <option value="Bike Storage"> Bike Storage</option>
                <option value="Pets">  Pets</option>
                <option value="Electric Charging Point"> Electric Charging Point</option>
                <option value="Cleaner">  Cleaner</option>
                <option value="Balcony / Patio"> Balcony / Patio</option>
               
               
              </select> <br />
              <div className=" grid grid-cols-3 ">
              {amenitiesList.map((tag, index) => (
                 <div className="afn-gardens-container"  key={index}> 
                 <span>{tag}</span>
                  <span className="afn-cross-icon ml-3" style={{ cursor: "pointer" }} onClick={() => removeTo(index)}>&times;</span>
                   </div>
                              
                              ))}
                               </div>
            
           
            
            
            </div>
            <div  className="afc-section-content-container ">
            <label className="label-form-text" for="">Accepts Government Grants</label> <br />
              <select className="selects" name="acceptGovernmentGrants" onChange={changeRoomPreference}>
                <optio nvalue="" selected disabled hidden>Select</optio>
                <option value="true">YES</option>
                <option value="false">NO</option>
              </select>
            </div>
           
       
            <div  className="afc-section-content-container ">
            <label className="label-form-text" for="">Household</label> <br />
              <select className="selects"  name="household" onChange={changeRoomPreference}>
                <option value="" selected disabled hidden>Select</option>
                <option value="GBT Household">LGBT Household</option>
                <option value="Vegetarian Household">Vegetarian Household</option>
                <option value="Other">Other</option>
              </select>
            </div>
            </div>
          <div className="afn-sections">
            <h3>Property preferences</h3>
          </div>

          <div className="grid grid-cols-3 gap-4">
          <div className="afc-section-content-container">
              <label className="label-form-text"for="">Occupation </label> <br />
              <select className="selects" placeholder="selects">
              <option disabled selected value> Select Occupation</option>
                {occupationData.map(each=>{
                  return(
                   <option value={each}>{each}</option>
                  )
                })}
               
               
              </select>
                {/* <input type="text" name ='occupation' onChange={(e)=>{changeRoomPreference(e)}}/>  */}
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Interest</label> <br />
              {/* <input type="text" value={intrest} onChange={(e)=>{onChangeIntrest(e)}} onKeyDown={(e)=>{getIntrest(e)}}/> */}
               <select className="selects" placeholder="Your text here" onChange={(e)=>{getIntrest(e)}}>
               <option value="" selected disabled hidden>Select</option>
                {intestData.map(each=>{
                  return(
                    <option value={each} > {each}</option>
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
            <div className="afc-section-content-container">
            <label className="label-form-text"for="">Number of housemates</label> <br />
            <input type="text" placeholder="Your text here" name="numberOfHousemates" onChange={(e)=>{changeExistingRoommate(e)}} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
          <div className="afc-section-content-container">
              <label className="label-form-text"for="">Smoking</label> <br />
               <select className="selects" name="smoking"  onChange={(e)=>{changeExistingRoommate(e)}}>
               <option value="" selected disabled hidden >Select</option>
                <option value="false" >No</option>
                <option value="true">No Preference</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Pets</label> <br />
              <select className="selects">
               <option value="" selected disabled hidden>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
               
              </select>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Youtube Link</label> <br />
              <input type="text" placeholder="paste url link" name ="pets" onChange={(e)=>{changeExistingRoommate(e)}} />
            </div>
          
          </div>
          <div
  data-te-modal-init
  className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalCenter"
  tabindex="-1"
  aria-labelledby="exampleModalCenterTitle"
  aria-modal="true"
  role="dialog">
  <div
    data-te-modal-dialog-ref
    className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
    <div
      className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
       
        <h5
          className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalScrollableLabel">
          Modal title
        </h5>
        <button
          type="button"
          className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

   
      <div className="relative p-4">
        <p>This is a vertically centered modal.</p>
      </div>

    
      <div
        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button"
          className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
          <div className="grid grid-cols-3 gap-4">
          <div className="afc-section-content-container">
            <label className="label-form-text"for="">Age of Existing Roommates</label> <br />
              <div className="length-input-div">
              <input type="number" placeholder="minimum" name ="minimum" onChange={(e)=>{changeAgeExisting(e)}}/>
              <input type="number" placeholder="maximum" name ='maximum' onChange={(e)=>{changeAgeExisting(e)}}/>
              </div>
            </div>
          <div className="afc-section-content-container">
            <label className="label-form-text"for="">Advert title</label> <br />
              <input type="text" placeholder="Your text here" name ="advertTitle" onChange={(e)=>{changeExistingRoommate(e)}} />
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Upload image</label> <br />
              <input type="file" name=""  accept="image/*" id="" placeholder="Select your images" onChange={updateImage}/>
              {showImage&& <img alt='as' style={{maxWidth:"100px"}} src={image} />}
              <div className="afn-photos-div">

                <div className="afn-photos"> 
               
                 </div>
                <p className="afn-view-image">View image</p>
              </div>
            </div>
            <div className="afc-section-content-container">
              <label className="label-form-text"for="">Descriptions</label> <br />
              <textarea className="bg-white" style={{margin:"0px", resize:"none"}}  id="" cols="3" rows="2" placeholder="Your text here" name ="description" onChange={(e)=>{changeExistingRoommate(e)}} ></textarea>
            </div>
           
          
          </div>
        </div>
        <div className="cancel-and-submit">
        <Link ><button className="afn-cancel-button" type="reset">Cancel</button></Link>
        <Link><button className="afn-submit-button" onClick={()=>{setShowModal(true)}} type="submit">Submit</button></Link>
 
       

        </div>
      </div>
      {showReviewModal &&
    
   <div  className='bg-white bg-opacity-100 fixed backdrop-blur-sm h-screen flex justify-center   inset-0  '>
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
      {/* <Footerrent/> */}
      {showModal &&<PriceModal close={handleClose} firstSelected={"passfunction"} />}
    </div>
  );
}

export default AdvertFormNew;
