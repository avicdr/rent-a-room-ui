import React, { useEffect, useRef, useState } from 'react'
import Footerrent from './Footerrent';
import { Link } from 'react-router-dom';
import '../ComponentsCSS/Saved.css';
import Advertphoto from "../Attributes/MoreAdvertImg.png";
import hall from "../Attributes/Rectangle 7.png"
import "../ComponentsCSS/HomePage.css";
import "../ComponentsCSS/FrontPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faHeart,
 
} from "@fortawesome/free-solid-svg-icons";
import {LuHeart} from 'react-icons/lu'

import {SlLocationPin} from 'react-icons/sl'

import Navbar from './Navbar';
import Context from '../Services/Context/Context';
import { DeleteSavedTenantAdvert, DeleteSavedVBuddyAdvert, DeleteSavedVendorAdvert, GetSavedBuddyAdvert, GetSavedTenantAdvert, GetSavedVendorAdvert } from '../Services/SavedAdvertApi/saved.advert.api';
export default function Saved() {
  const [AdvertData, setAdvertData]=useState()
  const [id]=useState("648a0bf0cffd72faf039ff4f")
  useEffect(()=>{
   const data= getTenantAdvert()
  },[id])
  async function getTenantAdvert(){
   const advert=await GetSavedTenantAdvert({id,"page":1,"perPage":10})
   console.log(advert)

  }
async function getAdvert(){
  let type="vendor"
  if(type==="vendor"){
const advertVendor= await GetSavedVendorAdvert({id,"page":1,"perPage":10})
  }else if(type==="tenant"){
    const advert=await GetSavedTenantAdvert({id,"page":1,"perPage":10})
  }else if(type==="buddyup"){
    const advertBuddyUp=await GetSavedBuddyAdvert({id,"page":1,"perPage":10})
  }

}

async function removeAdvert(){
  let type="vendor"
  if(type==="vendor"){
const advertVendor= await DeleteSavedVendorAdvert({id,"page":1,"perPage":10})
  }else if(type==="tenant"){
    const advert=await DeleteSavedTenantAdvert({id,"page":1,"perPage":10})
  }else if(type==="buddyup"){
    const advertBuddyUp=await DeleteSavedVBuddyAdvert({id,"page":1,"perPage":10})
  }

}
  return (
    <Context.Consumer>
       {value=>{
      const {toogletheme,theme}=value
    return(
    <div> 
       <Navbar toogletheme={toogletheme} theme={theme} />
    <div className='saved-main'>
      <div className="saved-container">

        <div className="saved-left">
            <h1 className='saved-head'>Saved Advert</h1>

        <div className='saved-cards-con-main'>
        <div className="card-for-front">
              <div className="front-product-image">
              <Link to='/AdvertDetails'>  <img src={hall} alt="" /></Link>
              </div>

           <div className='flex justify-between'>
              <h1 className="front-card-head">Lovely room in Manhattan</h1>
              <LuHeart className="card-icons "/>
              </div>
              <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
              {/* <br /> */}
              <p className="front-card-paras">
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

              <div className="flex justify-between ">
              <div className="front-info-card">
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Rent</p> 
                   <span className="new-ren flex">£<span className="user-focus-home text-left mr-1"> 650 </span>  / month</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Available</p>  <span className="user-focus-home text-left">1 Dec</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="new-ren text-left"> Location</p>  <span className="user-focus-home text-left">Kensington</span>
                </div>
               
               
              </div>

                <h1 style={{color:"var(--para-color)"}} className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
            </div>
            <div className="card-for-front">
              <div className="front-product-image">
              <Link to='/AdvertDetails'>  <img src={hall} alt="" /></Link>
              </div>
              <div className='flex justify-between'>
              <h1 className="front-card-head">Lovely room in Manhattan</h1>
              <LuHeart className="card-icons "/>
              </div>
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
                  <p  className="ren"> Rent</p>  <span style={{color:"var(--para-color)"}}  className="user-focus">£ 650/month{" "}</span>
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
              <Link to='/AdvertDetails'>  <img src={hall} alt="" /></Link>
              </div>
              <div className='flex justify-between'>
              <h1 className="front-card-head">Lovely room in Manhattan</h1>
              <LuHeart className="card-icons "/>
              </div>
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
                  <p  className="ren"> Rent</p>  <span style={{color:"var(--para-color)"}}  className="user-focus">£ 650/month{" "}</span>
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
              <Link to='/AdvertDetails'>  <img src={hall} alt="" /></Link>
              </div>
              <div className='flex justify-between'>
              <h1 className="front-card-head">Lovely room in Manhattan</h1>
              <LuHeart className="card-icons "/>
              </div>
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
                  <p  className="ren"> Rent</p>  <span style={{color:"var(--para-color)"}}  className="user-focus">£ 650/month{" "}</span>
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
            </div>
         </div>
         
       
        <div className="saved-right">
          <Link className='saved-button' to='/Compare'>Compare Advert</Link>
          <div className='saved-paras'>
          <div className='saved-borderfirst'>
          In a hurry?<a className='show-interest' href='..'> Show interest </a> and we will send the advertiser your profile
          </div>
          <div className='second-border'>
            <div className='saved-desc'>
          <p>More from the same advertiser</p><br></br>
          <p>1 Room Studio, Message Now: </p>
            <p>Birmingham from £617</p>
          </div>
          <img src={Advertphoto} alt='img'></img>
          </div>
          </div>
        </div>
      </div>
      {/* <Footerrent/> */}
    </div>
    </div>
    )
}

}
    </Context.Consumer>
  )
}