import React, { useState } from "react";
import Navbar from "./Nav2";
import Context from "../Services/Context/Context";
import "../ComponentsCSS/Contact.css";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoLocationOutline } from "react-icons/io5";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faFacebook,
  faInstagram,
  faSquareInstagram,
} from "@fortawesome/free-solid-svg-icons";
import { ContactUs } from "../Services/ChatApi/chat.api";
const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit() {
    const payload = { email, message };
    console.log(payload);
    const data = await ContactUs(payload);
    console.log(data);
  }
  return (
    <Context.Consumer>
      {(value) => {
        const { toogletheme, theme } = value;
        return (
          <div className="bg-card-contact">
            <Navbar toogletheme={toogletheme} theme={theme} />
            <div className="w-full   ">
              <div className="card flex">
                <div className="card-details pl-5 flex flex-col justify-between">
                  <div className=" ">
                    <h5 className=" htext">Contact Information</h5>
                    <p className=" ptext">
                      Contact directly to the main branch for any enquiry
                      regarding your booking issue or any other issues you are
                      facing
                    </p>
                    <h1 className="flex htext mt-5">
                      {" "}
                      <IoLocationOutline className="icon mr-3 mt-1" /> Main
                      Branch
                    </h1>
                    <p className="ptext  ml-7">123, Main Street, Suite200</p>
                    <p className="ptext ml-7">Toronto, Ontario</p>
                    <p className="ptext ml-7">M5V 2B7</p>
                    <h1 className=" htext mt-5 flex">
                      <FiPhoneCall className="mr-3 mt-1" /> Call us on
                    </h1>
                    <p className="ptext ml-7">+1 413-455-9812</p>
                    <p className="ptext ml-7"> +1 604-555-5678</p>
                    <p className="ptext ml-7">+1 613-555-9012</p>
                    <h1 className=" htext mt-5 flex ">
                      {" "}
                      <FiMail className="mr-3 mt-1" /> Mail us on
                    </h1>
                    <p className="ptext ml-7">xyz@gmail.com</p>
                  </div>
                  <div>
                    <h1 className=" htext mt-11">Our Socials</h1>
                    <div className="icon flex mt-6 ">
                      <FiFacebook className="mr-3" />{" "}
                      <FiInstagram className="mr-3" />{" "}
                      <FiTwitter className="mr-3" />
                    </div>
                  </div>
                </div>
                <div className="ml-11 mt-11">
                  <p className="label-contact">Full Name</p>
                  <input
                    className="contact-input mb-11"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="John Doe"
                  />
                  <p className="label-contact">Email</p>
                  <input
                    className="contact-input  mb-11"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="johndoe@gmail.com"
                  />
                  <p className="label-contact">Phone No</p>
                  <input
                    className="contact-input  mb-11"
                    type="text"
                    value={phoneNo}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                    placeholder="9000000000"
                  />
                  <p className="label-contact">Message</p>
                  <input
                    className="contact-input  mb-11"
                    type="text"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder="Please feel free to ask anything"
                  />
                  <div className="text-end w-full">
                    <button
                      className="send-buttton mb-7"
                      type="button"
                      onClick={onSubmit}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Contact;
