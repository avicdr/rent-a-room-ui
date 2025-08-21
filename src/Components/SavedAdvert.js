import React from "react";
import Footerrent from "./Footerrent";
import { Link } from 'react-router-dom';
import checkimg from '../Attributes/SavedAdvertscheckbox.svg'
import Navbar from "./Navbar";
import '../ComponentsCSS/Saved.css'
import Context from "../Services/Context/Context";
import persentage1 from "../Attributes/percentage1.png"
import persentage2 from "../Attributes/percentage2.png"
import '../ComponentsCSS/FrontPage.css'
import '../ComponentsCSS/HomePage.css'
import p from '../Attributes/person.svg'
import hall from "../Attributes/Rectangle 7.png"
import {LuHeart} from 'react-icons/lu'

import { PiDownloadSimpleLight } from 'react-icons/pi'
import {SlLocationPin} from 'react-icons/sl'
const SavedAdvert = () => {
 
    return(
    <Context.Consumer>
     {value=>{
      const {toogletheme,theme}=value
  return (
    <div style={{minWidth:"100vw"}}>
    <Navbar toogletheme={toogletheme} theme={theme} />
    <div  className="mt-10"  >
      <div className="flex flex-col mx-auto my-4 mr-4 ml-10  ">
      <h1 className="compare_heading mb-8 text-left" > Compare Adverts</h1>
      <div style={{backgroundColor:'var(--bg-card)'}} className=" flex w-full md:w-auto relative  p-6 pl-8 pr-20 mb-8 box-shadow rounded-lg">
         <div className="flex w-[60%]  pt-3 "> 
          <img className="absolute top-0 left-2 pt-3" src={checkimg} alt="image"/>
          <div className="front-product-image">
                        <Link >  <img src={hall} alt="" /></Link>
                      </div>
        <div className="ml-6 mt-2 flex-1 max-w-[100%]  border-r-2 border-slate-300 pr-8 left">
        <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <LuHeart className="card-icons"/>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para text-left">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons mt-2">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between mt-2">
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

                <h1 style={{color:"var(--para-color"}} className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    {/* <div className="flex justify-between">
            <div className="flex flex-col mb-3">
              
              <h1 className="front-card-head mb-2">Lovely room in Manhattan</h1>
              <h2 className="mb-2 text-xl text-left mb-2">246 Mott St, Kingston</h2>
           
           
          
        
            <p className="text-gray-500 text-left text-md mb-2">
            Wifi • Air conditioning • Kitchen • Recycling  • Non smoking
• Vegan friendly • Balcony  • Party people
            </p>
            </div>
            <div className="text-4xl text-zinc-400 hover:text-black-600 hover:font-bolder hover:cursor-pointer me-10 pe-10 ">♡</div>
          </div>
          <div className="flex mb-2">
            <div className="bg-gray-300 px-3 py-1 rounded-xl text-gray-500">
              New Building
            </div>
            <div className="bg-gray-300 px-3 py-1 rounded-xl text-gray-500 ml-3">
              Lush green area
            </div>
          </div>

          <div className="flex gap-10 left">
            <div className="text-gray-500">
              <h2>Rent</h2>
              <h4 className="flex ">
                <span className="text-gray-700">£650</span> /month
              </h4>
            </div>
            <div className="text-gray-500">
              <h2>Accomodation</h2>
              <h4 className="text-gray-700">1 BHK</h4>
            </div>
            <div className="text-gray-500">
              <h2>Location</h2>
              <h4 className="text-gray-700">Birmingham</h4>
            </div>
            <div className="text-gray-800 text-xl pt-4">
              <div className="flex">
                <span className="font-bold">£2,40 </span>
                <p className="text-gray-500">/month</p>
              </div>
            </div>
          </div> */}

        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        
        </div>
        <div className="ml-12 w-[30%]  pt-6  flex flex-col  items-center pt-6   text-gray-700 ">
        <div className="flex gap-11 self-center mt-11">
          <div className="flex flex-col">
        <div class="pie animate" style={{"--p":98-13,"--c":"var(--para-color)"}}><p className="text_pie"> 98% </p></div>
        <h4 className="pie_heading">Requirement Matched</h4>
        </div>
        <div className="flex flex-col">
        <div class="pie animate" style={{"--p":98-13,"--c":"var(--para-color)"}}><p className="text_pie"> 98% </p></div>
        <h4 className="pie_heading">Budget Save</h4>
        </div>
          </div>
      </div>
      </div>
      
      <div style={{backgroundColor:'var(--bg-card)'}} className=" flex w-full md:w-auto relative  p-6 pl-8 pr-20 mb-8 box-shadow rounded-lg">
         <div className="flex w-[60%]  pt-3 "> 
          <img className="absolute top-0 left-2 pt-3" src={checkimg} alt="image"/>
          <div className="front-product-image">
                        <Link >  <img src={hall} alt="" /></Link>
                      </div>
        <div className="ml-6 mt-2 flex-1 max-w-[100%]  border-r-2 border-slate-300 pr-8 left">
        <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <LuHeart className="card-icons"/>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para text-left">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons mt-2">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between mt-2">
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

                <h1 style={{color:"var(--para-color"}} className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    {/* <div className="flex justify-between">
            <div className="flex flex-col mb-3">
              
              <h1 className="front-card-head mb-2">Lovely room in Manhattan</h1>
              <h2 className="mb-2 text-xl text-left mb-2">246 Mott St, Kingston</h2>
           
           
          
        
            <p className="text-gray-500 text-left text-md mb-2">
            Wifi • Air conditioning • Kitchen • Recycling  • Non smoking
• Vegan friendly • Balcony  • Party people
            </p>
            </div>
            <div className="text-4xl text-zinc-400 hover:text-black-600 hover:font-bolder hover:cursor-pointer me-10 pe-10 ">♡</div>
          </div>
          <div className="flex mb-2">
            <div className="bg-gray-300 px-3 py-1 rounded-xl text-gray-500">
              New Building
            </div>
            <div className="bg-gray-300 px-3 py-1 rounded-xl text-gray-500 ml-3">
              Lush green area
            </div>
          </div>

          <div className="flex gap-10 left">
            <div className="text-gray-500">
              <h2>Rent</h2>
              <h4 className="flex ">
                <span className="text-gray-700">£650</span> /month
              </h4>
            </div>
            <div className="text-gray-500">
              <h2>Accomodation</h2>
              <h4 className="text-gray-700">1 BHK</h4>
            </div>
            <div className="text-gray-500">
              <h2>Location</h2>
              <h4 className="text-gray-700">Birmingham</h4>
            </div>
            <div className="text-gray-800 text-xl pt-4">
              <div className="flex">
                <span className="font-bold">£2,40 </span>
                <p className="text-gray-500">/month</p>
              </div>
            </div>
          </div> */}

        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        
        </div>
        <div className="ml-12 w-[30%]  pt-6  flex flex-col  items-center pt-6   text-gray-700 ">
        <div className="flex gap-11 self-center mt-11">
          <div className="flex flex-col">
        <div class="pie animate" style={{"--p":98-13,"--c":"var(--para-color)"}}><p className="text_pie"> 98% </p></div>
        <h4 className="pie_heading">Requirement Matched</h4>
        </div>
        <div className="flex flex-col">
        <div class="pie animate" style={{"--p":98-13,"--c":"var(--para-color)"}}><p className="text_pie"> 98% </p></div>
        <h4 className="pie_heading">Budget Save</h4>
        </div>
          </div>
      </div>
      </div>
      <div style={{backgroundColor:'var(--bg-card)'}} className=" flex w-full md:w-auto relative  p-6 pl-8 pr-20 mb-8 box-shadow rounded-lg">
         <div className="flex w-[60%]  pt-3 "> 
          <img className="absolute top-0 left-2 pt-3" src={checkimg} alt="image"/>
          <div className="front-product-image">
                        <Link >  <img src={hall} alt="" /></Link>
                      </div>
        <div className="ml-6 mt-2 flex-1 max-w-[100%]  border-r-2 border-slate-300 pr-8 left">
        <div className="flex justify-between">
                        <h1 className="front-card-head mb-2 mt-0">Lovely room in Manhattan</h1>
                        <LuHeart className="card-icons"/>
                      </div>
                      <h5 className="front-card-headfive flex mb-2">
                        <SlLocationPin className=" mt-1 mr-1"/>
                        246 Mott St, Kingston</h5>
                      <p className="front-card-para text-left">
                      27 • Professional • Male • Double room wanted
Wifi • Balcony • Kitchen
                      </p>
                      <div className="front-cardkebuttons mt-2">
                        <button className="front-card-buttons">
                          Looking for a male roommate
                        </button>
                        <button className="front-card-buttons">Sublet </button>
                      </div>
                      <div className="flex justify-between mt-2">
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

                <h1 style={{color:"var(--para-color"}} className="card-price mt-3">
                  £3,00 <small className="text-base">/month</small>
                </h1>
              </div>
                    {/* <div className="flex justify-between">
            <div className="flex flex-col mb-3">
              
              <h1 className="front-card-head mb-2">Lovely room in Manhattan</h1>
              <h2 className="mb-2 text-xl text-left mb-2">246 Mott St, Kingston</h2>
           
           
          
        
            <p className="text-gray-500 text-left text-md mb-2">
            Wifi • Air conditioning • Kitchen • Recycling  • Non smoking
• Vegan friendly • Balcony  • Party people
            </p>
            </div>
            <div className="text-4xl text-zinc-400 hover:text-black-600 hover:font-bolder hover:cursor-pointer me-10 pe-10 ">♡</div>
          </div>
          <div className="flex mb-2">
            <div className="bg-gray-300 px-3 py-1 rounded-xl text-gray-500">
              New Building
            </div>
            <div className="bg-gray-300 px-3 py-1 rounded-xl text-gray-500 ml-3">
              Lush green area
            </div>
          </div>

          <div className="flex gap-10 left">
            <div className="text-gray-500">
              <h2>Rent</h2>
              <h4 className="flex ">
                <span className="text-gray-700">£650</span> /month
              </h4>
            </div>
            <div className="text-gray-500">
              <h2>Accomodation</h2>
              <h4 className="text-gray-700">1 BHK</h4>
            </div>
            <div className="text-gray-500">
              <h2>Location</h2>
              <h4 className="text-gray-700">Birmingham</h4>
            </div>
            <div className="text-gray-800 text-xl pt-4">
              <div className="flex">
                <span className="font-bold">£2,40 </span>
                <p className="text-gray-500">/month</p>
              </div>
            </div>
          </div> */}

        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        
        </div>
        <div className="ml-12 w-[30%]  pt-6  flex flex-col  items-center pt-6   text-gray-700 ">
        <div className="flex gap-11 self-center mt-11">
          <div className="flex flex-col">
        <div class="pie animate" style={{"--p":98-13,"--c":"var(--para-color)"}}><p className="text_pie"> 98% </p></div>
        <h4 className="pie_heading">Requirement Matched</h4>
        </div>
        <div className="flex flex-col">
        <div class="pie animate" style={{"--p":98-13,"--c":"var(--para-color)"}}><p className="text_pie"> 98% </p></div>
        <h4 className="pie_heading">Budget Save</h4>
        </div>
          </div>
      </div>
      </div>
      </div>
    
     
    
      </div>
      {/* <Footerrent/> */}
    </div>
  );
}}
  </Context.Consumer>
    )
}
export default SavedAdvert;