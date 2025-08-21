import React, { useState } from "react";
import Footerrent from "../Footerrent";
import { Link } from "react-router-dom";
import "../../ComponentsCSS/FrontPage.css";
import prize from "../../Attributes/price2.svg";
import apart from "../../Attributes/apartment.svg";
import floor from "../../Attributes/floor.svg";
import more from "../../Attributes/more.svg";
import gridview from "../../Attributes/gridView.svg";
import listview from "../../Attributes/listView.svg";
import Context from "../../Services/Context/Context";
import "../../ComponentsCSS/AdvertFormNew.css";
import "../../ComponentsCSS/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHeart,
  faList,
  faTag,
  faBuilding,
  faStairs,
  faLocation,
  faLocationArrow,
  faLocationPin,
  faLocationCrosshairs,
  faMapLocationDot,
  faSearchLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { LuHeart } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import hall from "../../Attributes/Rectangle 7.png";

import { Map, GoogleApiWrapper } from "google-maps-react";
import bedpic from "../../Attributes/Rectangle 7.png";
import Navbar from "../Navbar";
import { color } from "highcharts";
import {
  AddSavedBuddyAdvert,
  AddSavedTenantAdvert,
  AddSavedVendorAdvert,
} from "../../Services/SavedAdvertApi/saved.advert.api";
import { AiOutlineClose } from "react-icons/ai";
const FrontPage = (props) => {
  const [showFilterModel, setShowFilterModel] = useState(false);
  const { google } = props;
  const [filterData, setFilterData] = useState([
    "Usa",
    "20km",
    "335088",
    "Vandor",
  ]);
  const data = {
    user: {
      email: "sakshamgarg.s.k.36@gmail.com",
      _id: "648a0bf0cffd72faf039ff4f",
    },
    advertId: "64984860beb1f819a72f39dd",
    advertType: "tenant",
  };
  async function SavedAdvert(value) {
    const type = value.advertType;
    if (type === "vendor") {
      const advertVendor = await AddSavedVendorAdvert(data);
    } else if (type === "tenant") {
      const advert = await AddSavedTenantAdvert(data);
    } else if (type === "buddyup") {
      const advertBuddyUp = await AddSavedBuddyAdvert(data);
    }
  }

  function removeFilter(each) {
    const filteredData = filterData.filter((eachs) => {
      return eachs !== each;
    });
    setFilterData(filteredData);
  }
  return (
    <Context.Consumer>
      {(value) => {
        const { toogletheme, theme } = value;
        return (
          <div>
            <Navbar toogletheme={toogletheme} theme={theme} />
            <div className="frontpage-outer">
              <div className="">
                <h1 className="frontpage-outerhead  text-left">
                  Tenant in Kingston, London
                </h1>
                <p className="frontpage-outerpara   text-left mt-4">
                  1248 results{" "}
                </p>
              </div>
              <div className="flex gap-4 ">
                <div className="basis-1/2   ">
                  {/* <h1>Tenant in Kingston, London</h1>
          <p>1248 results </p> */}
                  <div className="flex justify-between ml-5 mb-5 mt-5  ">
                    <div className="flex">
                      <button className="content-button content mr-2 ">
                        <img className="" src={prize} alt="img" /> Price
                      </button>
                      <button className="content-button content mr-2">
                        <img src={apart} alt="img" /> Apartment
                      </button>
                      <button className="content-button content mr-2">
                        {" "}
                        <img src={floor} alt="img" /> Floor
                      </button>{" "}
                      <button className="content-button content mr-2">
                        {" "}
                        <img src={more} alt="img" /> More
                      </button>
                    </div>
                    <div className="flex mr-3 ">
                      <div className="content icon">
                        <button className="content-button">
                          <img src={listview} alt="img" />
                        </button>
                      </div>
                      <p className="mt-1 title">
                        Sort by: <span className="description-text">Price</span>
                      </p>
                    </div>
                  </div>
                  <div className=" front-card-container">
                    <div className=" card-for-front">
                      <div className="front-product-image">
                        <Link to="/AdvertDetails">
                          {" "}
                          <img src={hall} alt="" />
                        </Link>
                      </div>

                      <div className="flex justify-between">
                        <h1 className="front-card-head">
                          Lovely room in Manhattan
                        </h1>
                        <LuHeart className="card-icons " />
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1" />
                        246 Mott St, Kingston
                      </h5>
                      {/* <br /> */}
                      <p style={{ width: "97%" }} className="front-card-paras">
                        Wifi • Air conditioning • Kitchen • Recycling • Non
                        smoking • Vegan friendly • Balcony • Party people
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
                            <span className="new-ren flex">
                              £
                              <span className="user-focus-home text-left mr-1">
                                {" "}
                                650{" "}
                              </span>{" "}
                              / month
                            </span>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="new-ren text-left"> Available</p>{" "}
                            <span className="user-focus-home text-left">
                              1 Dec
                            </span>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="new-ren text-left"> Location</p>{" "}
                            <span className="user-focus-home text-left">
                              Kensington
                            </span>
                          </div>
                        </div>

                        <h1
                          style={{ color: "var(--para-color)" }}
                          className="card-price mt-3"
                        >
                          £3,00 <small className="text-base">/month</small>
                        </h1>
                      </div>
                    </div>
                    <div className=" card-for-front">
                      <div className="front-product-image">
                        <Link to="/AdvertDetails">
                          {" "}
                          <img src={hall} alt="" />
                        </Link>
                      </div>

                      <div className="flex justify-between">
                        <h1 className="front-card-head">
                          Lovely room in Manhattan
                        </h1>
                        <LuHeart className="card-icons " />
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1" />
                        246 Mott St, Kingston
                      </h5>
                      {/* <br /> */}
                      <p style={{ width: "97%" }} className="front-card-paras">
                        Wifi • Air conditioning • Kitchen • Recycling • Non
                        smoking • Vegan friendly • Balcony • Party people
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
                            <span className="new-ren flex">
                              £
                              <span className="user-focus-home text-left mr-1">
                                {" "}
                                650{" "}
                              </span>{" "}
                              / month
                            </span>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="new-ren text-left"> Available</p>{" "}
                            <span className="user-focus-home text-left">
                              1 Dec
                            </span>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="new-ren text-left"> Location</p>{" "}
                            <span className="user-focus-home text-left">
                              Kensington
                            </span>
                          </div>
                        </div>

                        <h1
                          style={{ color: "var(--para-color)" }}
                          className="card-price mt-3"
                        >
                          £3,00 <small className="text-base">/month</small>
                        </h1>
                      </div>
                    </div>
                    <div className=" card-for-front">
                      <div className="front-product-image">
                        <Link to="/AdvertDetails">
                          {" "}
                          <img src={hall} alt="" />
                        </Link>
                      </div>

                      <div className="flex justify-between">
                        <h1 className="front-card-head">
                          Lovely room in Manhattan
                        </h1>
                        <LuHeart className="card-icons " />
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1" />
                        246 Mott St, Kingston
                      </h5>
                      {/* <br /> */}
                      <p style={{ width: "97%" }} className="front-card-paras">
                        Wifi • Air conditioning • Kitchen • Recycling • Non
                        smoking • Vegan friendly • Balcony • Party people
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
                            <span className="new-ren flex">
                              £
                              <span className="user-focus-home text-left mr-1">
                                {" "}
                                650{" "}
                              </span>{" "}
                              / month
                            </span>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="new-ren text-left"> Available</p>{" "}
                            <span className="user-focus-home text-left">
                              1 Dec
                            </span>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="new-ren text-left"> Location</p>{" "}
                            <span className="user-focus-home text-left">
                              Kensington
                            </span>
                          </div>
                        </div>

                        <h1
                          style={{ color: "var(--para-color)" }}
                          className="card-price mt-3"
                        >
                          £3,00 <small className="text-base">/month</small>
                        </h1>
                      </div>
                    </div>
                    <div className=" card-for-front">
                      <div className="front-product-image">
                        <Link to="/AdvertDetails">
                          {" "}
                          <img src={hall} alt="" />
                        </Link>
                      </div>

                      <div className="flex justify-between">
                        <h1 className="front-card-head">
                          Lovely room in Manhattan
                        </h1>
                        <LuHeart className="card-icons " />
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1" />
                        246 Mott St, Kingston
                      </h5>
                      {/* <br /> */}
                      <p style={{ width: "97%" }} className="front-card-paras">
                        Wifi • Air conditioning • Kitchen • Recycling • Non
                        smoking • Vegan friendly • Balcony • Party people
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
                            <span className="new-ren flex">
                              £
                              <span className="user-focus-home text-left mr-1">
                                {" "}
                                650{" "}
                              </span>{" "}
                              / month
                            </span>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="new-ren text-left"> Available</p>{" "}
                            <span className="user-focus-home text-left">
                              1 Dec
                            </span>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="new-ren text-left"> Location</p>{" "}
                            <span className="user-focus-home text-left">
                              Kensington
                            </span>
                          </div>
                        </div>

                        <h1
                          style={{ color: "var(--para-color)" }}
                          className="card-price mt-3"
                        >
                          £3,00 <small className="text-base">/month</small>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-div basis-1/2">
                  <Map
                    className="google-map"
                    google={google}
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    zoom={10}
                    initialCenter={{
                      lat: 28.70406,
                      lng: 77.102493,
                    }}
                  />
                </div>
              </div>
              {/* <Footerrent/> */}
            </div>
            {/* {showFilterModel &&
    
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
            <label className="checkbox_filter_label" name="vendor" htmlFor="ab">Apartment</label><br></br> 
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
              <label className="label-form-texts"for="">Search By State Name</label> <br />
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
    
    } */}
          </div>
        );
      }}
    </Context.Consumer>
  );
};

// export default FrontPage;
export default GoogleApiWrapper({
  apiKey: "AIzaSyAHZ8-Ovxvgpl_9NmgT0y7kMcQC94ZR1kI",
})(FrontPage);
