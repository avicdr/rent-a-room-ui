import React from "react";
import Footerrent from "../Footerrent";
import { Link } from 'react-router-dom';
import { useState } from "react";
import "../../ComponentsCSS/ChatPage.css";
import cpProfileImage1 from '../../Attributes/cp Ellipse 105.png';
import paperclip from '../../Attributes/paperclip.svg'
import smile from '../../Attributes/smile.png'
import sendImg from '../../Attributes/sendImg.png'
import Navbar from "../Navbar";
import Context from "../../Services/Context/Context";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
function ChatPage() {
    const [message, setMessage] = useState("");
    const [messageActive, setMessageActive]=useState("2")

    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSendClick = () => {
      // Handle sending message logic here
      console.log(`Sending message: ${message}`);
      setMessage("");
    };
    return(
    <Context.Consumer>
     {value=>{
      const {toogletheme,theme}=value
  return (
    <div className="chat-main-container">
    <Navbar toogletheme={toogletheme} theme={theme} />
    <div className="cp-flex-container">
      <div className="cp-flex-item cp-item-1 ml-11">
         <div className={`cp-profile-container ${messageActive ==="1"&& "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("1")}}>
     
        <div className="flex justify-between">
          <div className="flex gap-1">
              <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
              <div className="flex flex-col gap-1">
              <h2 className="cp-profile-name">Leslie Alexander</h2>
              <h2 className="cp-profile-name2">Marketing Coordinator</h2>
              </div>
              </div>
              <h2 className={`cp-time ${messageActive==="1" &&"cp-time-active"}`}>5m</h2>
              </div>
             
              
              <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
        </div>
        <div className={`cp-profile-container ${messageActive ==="2"&& "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("2")}}>
     
        <div className="flex justify-between">
          <div className="flex gap-1">
              <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
              <div className="flex flex-col gap-1">
              <h2 className="cp-profile-name">Leslie Alexander</h2>
              <h2 className="cp-profile-name2">Marketing Coordinator</h2>
              </div>
              </div>
              <h2 className={`cp-time ${messageActive==="2" &&"cp-time-active"}`}>5m</h2>
              </div>
             
              
              <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
        </div>
         <div className={`cp-profile-container ${messageActive ==="3" && "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("3")}}>
     
        <div className="flex justify-between">
          <div className="flex gap-1">
              <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
              <div className="flex flex-col gap-1">
              <h2 className="cp-profile-name">Leslie Alexander</h2>
              <h2 className="cp-profile-name2">Assistant</h2>
              </div>
              </div>
              <div >
              <h2 className="msg-count ">5</h2>
              </div>
              </div>
             
              
              <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
        </div>
         <div className={`cp-profile-container ${messageActive  ==="4" && "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("4")}}>
     
     <div className="flex justify-between">
       <div className="flex gap-1">
           <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
           <div className="flex flex-col gap-1">
           <h2 className="cp-profile-name">Leslie Alexander</h2>
           <h2 className="cp-profile-name2">Marketing Coordinator</h2>
           </div>
           </div>
           <h2 className={`cp-time ${messageActive==="4" &&"cp-time-active"}`}>5m</h2>
           </div>
          
           
           <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
     </div>
      <div className={`cp-profile-container ${messageActive  ==="5" && "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("5")}}>
  
     <div className="flex justify-between">
       <div className="flex gap-1">
           <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
           <div className="flex flex-col gap-1">
           <h2 className="cp-profile-name">Leslie Alexander</h2>
           <h2 className="cp-profile-name2">Marketing Coordinator</h2>
           </div>
           </div>
           <h2 className={`cp-time ${messageActive==="5" &&"cp-time-active"}`}>5m</h2>
           </div>
          
           
           <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
     </div>
      <div className={`cp-profile-container ${messageActive  ==="6" && "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("6")}}>
  
     <div className="flex justify-between">
       <div className="flex gap-1">
           <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
           <div className="flex flex-col gap-1">
           <h2 className="cp-profile-name">Leslie Alexander</h2>
           <h2 className="cp-profile-name2">Marketing Coordinator</h2>
           </div>
           </div>
           <h2 className={`cp-time ${messageActive==="6" &&"cp-time-active"}`}>5m</h2>
           </div>
          
           
           <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
     </div>
      <div className={`cp-profile-container ${messageActive  ==="7" && "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("7")}}>
     
     <div className="flex justify-between">
       <div className="flex gap-1">
           <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
           <div className="flex flex-col gap-1">
           <h2 className="cp-profile-name">Leslie Alexander</h2>
           <h2 className="cp-profile-name2">Marketing Coordinator</h2>
           </div>
           </div>
           <h2 className={`cp-time ${messageActive==="7" &&"cp-time-active"}`}>5m</h2>
           </div>
          
           
           <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
     </div>
      <div className={`cp-profile-container ${messageActive  ==="8" && "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("8")}}>
  
     <div className="flex justify-between">
       <div className="flex gap-1">
           <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
           <div className="flex flex-col gap-1">
           <h2 className="cp-profile-name">Leslie Alexander</h2>
           <h2 className="cp-profile-name2">Marketing Coordinator</h2>
           </div>
           </div>
           <h2 className={`cp-time ${messageActive==="8" &&"cp-time-active"}`}>5m</h2>
           </div>
          
           
           <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
     </div>
      <div className={`cp-profile-container ${messageActive  ==="9" && "cp-profile-active"} self-center`} onClick={()=>{setMessageActive("9")}}>
  
     <div className="flex justify-between">
       <div className="flex gap-1">
           <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
           <div className="flex flex-col gap-1">
           <h2 className="cp-profile-name">Leslie Alexander</h2>
           <h2 className="cp-profile-name2">Marketing Coordinator</h2>
           </div>
           </div>
           <h2 className={`cp-time ${messageActive==="9" &&"cp-time-active"}`}>5m</h2>
           </div>
          
           
           <p className="cp-profile-container-desc">Lorem, ipsum dolor sit</p>
     </div>
       
      </div>
      <div className=" cp-item-2 flex flex-col justify-between">
        <div className="message-from-sender-container flex flex-col">
        
        
         

          <div class="separator self-center">August 21</div>
          <div className="flex gap-2 mt-4">
          <img className="cp-profile-container-image" src={cpProfileImage1} alt="image" />
          <div className="flex flex-col gap-2 justify-start message-send-container ml-4 mt-4">
          <p className="message-text text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.
           Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique
            mi eget eget tristique orci.</p>
            <p className="message-time text-left">10:15 pm</p>
            </div>
            
          </div>
          <div className="flex flex-row justify-end gap-2  mr-4 mt-4">
            <div className="message-receive-container flex flex-col gap-2">
          <p className="message-text text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo
           proin turpis eu hac. Tortor dolor eu at
           bibendum suspendisse. </p>
            <p className="message-time text-right">12:15 pm</p>
            </div>
            </div>
            <div class="separator self-center mt-11">Today</div>
        </div>
      <div className="message-box-footer ">
      <input
     
        type="text"
        placeholder="Start Typing"
        className="message-text"
        value={message}
        onChange={handleMessageChange}
      />
      <img src={paperclip} alt="img" />
      <img src={smile} alt="img" />
      <img src={sendImg} className="mr-2" alt="img" />

      {/* <button onClick={handleSendClick}>Send</button> */}
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

export default ChatPage;
