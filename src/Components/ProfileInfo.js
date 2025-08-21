import React, { useState, useEffect } from 'react';
import Footerrent from './Footerrent';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../ComponentsCSS/ProfileInfo.css';
import Context from "../Services/Context/Context";
import profilepic from '../Attributes/Rectangle 7 (2).png'
import Navbar from './Navbar';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill,BsExclamationCircle } from "react-icons/bs"
import '../ComponentsCSS/AdvertDetails.css';

const ProfileInfo = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal]=useState(Boolean)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://google.co.in',
      );
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return(
    <Context.Consumer>
     {value=>{
      const {toogletheme,theme}=value
  return (
    <div>
    <Navbar toogletheme={toogletheme} theme={theme} />
    <div className="page">
        <p className='profileInfo-paragraph'>Home &gt; Search &gt; Kingston &gt; Barney</p>
      <div className="flex gap-4">
        <div className="w-4/5">
        {/* <div className="card"> */}
          <div className="cbody">
              <div className="alert">
                <h1>27 Professional Male •  <br />
                  Double room wanted</h1><br />
                <h3>1 day ago</h3>
                <div className='flex justify-end mt-4' style={{cursor:'pointer'}}  onClick={()=>{setShowModal(true)}}>
        <p className='text_report' style={{color:'#5C5C5C'}}>Report</p>
        < BsExclamationCircle className='text-base mt-1 ml-3 text-sky-400  '/>
        </div>

              </div>
              <table className="table">
                
                  <tr>
                    <td> Budget</td>
                    <td>{isLoading ? <p> <span> £650 </span> /month</p>  : data.budget}</td>
                  </tr>
                  <tr>
                    <td>Available</td>
                    <td>{isLoading ? '1 Dec' : data.available}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>{isLoading ? 'Kingston' : data.location}</td>
                  </tr>
                  <tr>
                    <td>Occupation</td>
                    <td>{isLoading ? 'Dont mind' : data.occupation}</td>
                  </tr>
                  <tr>
                    <td>Room Size</td>
                    <td>{isLoading ? 'Double Room' : data.roomSize}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{isLoading ? 'Dont mind' : data.budget}</td>
                  </tr>
                
              </table>
            {/* </div> */}
          </div>
          {/* <div className="card"> */}
          <div className="cbody mt-5">
              <h5 className="cardtitle">Features Amenities</h5>
              <ul>
                {/* {isLoading ? ( */}
                  <li>Wifi</li>
                  <li>Pets Allowed</li>
                  <li>Kitchen</li>
                  <li>Gym Nearby</li>
                  <li>Bathroom ensuites</li>
                  <li>Parking available</li>
                {/* ) : (
                  data.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  )) 
                )}*/}
              </ul>
            </div>
          {/* </div> */}
        </div>
        <div className="w-3/5 mr-11">
          {/* <div className="card"> */}
            <img className="dp" src={profilepic} alt="Profile Pic"/>
            <div className="cbody">
            <p className='last-active' >
                {isLoading ? 'Active 1 hr ago' : data.lastActiveStatus}
              </p>
              <h5 className="cardtitle mb-4">{isLoading ? 'Barney' : data.name}</h5>
              
            <Link to="/AdvertForm"   >
            <button className="contant-button mb-4 ">Contact</button>
                
              </Link>
              {/* <Link className="contant-button" to="/ProfilePage">Contact</Link> */}
             
              <div className="bio">
              <p>
                {isLoading ? 'I am a professional looking for a room in January.I work in the media and have been in London since Uni - a while now.After a double room in a social house.But if that is not possible, I am happy keeping myself to myself.I get along with everyone and I am looking forward to moving in to a new place.' : data.bio}
              </p>
              <br/>
            
              </div>
             
            {/* </div> */}
          </div>
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
       <button className="rating-button" type="reset" onClick={()=>{setShowModal(false)}}>Cancel</button>
       <button className="rating-active-button " onClick={()=>{setShowModal(false)}} >Submit</button>
       

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
export default ProfileInfo;