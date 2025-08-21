import React from 'react'
import { Link } from 'react-router-dom'
import '../ComponentsCSS/Home.css';
import Phone1 from "../Attributes/HomePage/Phone Mockup 1.png"
import Phone2 from "../Attributes/HomePage/Phone Mockup 2.png"
import applebadge from '../Attributes/HomePage/Store badge(apple).png'
import playstorebadge from '../Attributes/HomePage/Store badge(playstore).png'
import redirectrentaroom from '../Attributes/HomePage/RedirectRentaroom.png'
import redirectroomwalla from '../Attributes/HomePage/redirectroomwala.png'
import illustration from '../Attributes/HomePage/Illustration.png'
import symbol from '../Attributes/HomePage/symbol.png'
import group from '../Attributes/HomePage/Group 12.png'
import profile from '../Attributes/HomePage/Mask group.png'
import lefticon from '../Attributes/HomePage/Group 17.png'
import righticon from '../Attributes/HomePage/Group 18.png'

const Home = () => {
  return (
    <div className='relative'>
        <nav className='flex justify-between w-full  bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600   pt-5 pb-7 pl-7 shadow-lg '>
        <Link href="/" className="flex gap-2 flex-center">
        <p className="logo_text">SB</p>
       
      </Link>
      <div className='sm:flex hidden gap-11 mr-11 pr-5 pt-2 '>
        <Link className='nav_title'>Home</Link>
        <Link to='/about-us' className='nav_title'>About</Link>
        <Link to='/faq-page' className='nav_title'>FAQ</Link>
        <Link className='nav_title'>Blog</Link>

      </div>

        </nav>

    <div className='first-tap-container flex w-full   '>
        
<div className=' basis-1/2 flex flex-col justify-center items-center '>
<div className=' w-4/5 '>
<h1 className='main_heading_tab tab-text mb-3 '>Manage all Place need from your mobile</h1>
<p className='tab-text main_description_tab mb-11'>Download the app to manage your place, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
<p className='tab-text main_description_tab font-medium mb-1'>Get the App</p>
<div className='flex gap-4'>
<img alt='playstore badge' src={playstorebadge} />
<img alt='apple badge' src={applebadge} />
</div>
</div>
</div>
<div className='flex basis-1/2'>
<img alt="mobile" className='image_mobile1' src={Phone1}/>
<img alt="mobile" className='image_mobile2'  src={Phone2}/>
</div>
    </div>
    <div className='second-tab-container'>
        
        <h1 className='second-tab-heading'> Book your place</h1>
        <div className='flex justify-center gap-4 mt-11 '>
            <Link to="/rentaroom" className=''>
            <img src={redirectrentaroom} className='redirect-img1' alt ="redirect-rentaroom"/>
            <h1 className='second-tab-img-heading'>Rent a Room</h1>
            </Link>
            <div className=''>
            <img src={redirectroomwalla} className='redirect-img ' alt ="redirect-rentaroom"/>
            <h1 className='second-tab-img-heading mt-5'>Roomwala</h1>
            </div>
        </div>
        {/* <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-static-backdrop-modal">
  Open modal
</button> */}

<div id="hs-static-backdrop-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto [--overlay-backdrop:static]" data-hs-overlay-keyboard="false">
  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 className="font-bold text-gray-800 dark:text-white">
          Modal title
        </h3>
        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-static-backdrop-modal">
          <span className="sr-only">Close</span>
          <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
        <p className="mt-1 text-gray-800 dark:text-gray-400">
          This is a wider card with supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-static-backdrop-modal">
          Close
        </button>
        <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
          Understood
        </a>
      </div>
    </div>
  </div>
</div>
       
    </div>
    <div className='third-tab-container '>
        <div className='third-tab-first-container flex gap-4'>

            <img alt="illustraion" className='ml-11 mt-11' src={illustration}/>
            <div className='flex flex-col justify-center  w-6/12 ml-11 pl-11'>
                <h1 className='second-tab-heading text-left  mb-11 w-8/12'>We are committed
            to helping you in the process of achieving your dreams place</h1>
                <p className='text-left w-10/12 mb-11 '>Lorem ipsum dolor sit amet consectetur. Nibh proin proin eget neque. Tortor tempus massa dui viverra
                in justo gravida. At justo eget volutpat leo fermentum scelerisque cursus sit donec. Nisl id velit faucibus vel.
                Amet cras diam non habitasse a arcu. Urna nulla felis diam nisl et.</p>
                <button className='black_btn self-start' alt="see_details">See details</button>
            </div>
            
        </div>
    </div>
    <div className='footer-container '>
      <div className='flex justify-center gap-4 h-2/6'>
      <div className='footer-top-container-one mt-11'>
        <div className='flex flex-col '>
          <img src={symbol} alt="symbol" className='symbol-image '/>
          <h1 className='second-tab-heading  mb-3 '>what they say about SB</h1>
          <p>More than 3000 users have been helped by World Online Course.</p>
        </div>
      </div>
      <div className='footer-top-container-two '>
       
        <div className='flex flex-col justify-between h-full p-3 '>
          <div className='flex justify-between w-full'>
          <h1 className='text-lg font-medium'>what they say</h1>
          <img src={group} className='object-contain' alt="icon"/>
          </div>
          <p className='text-sm w-3/4'>“,Lorem ipsum dolor sit amet consectetur. Nibh proin scelerisque cursus sit donec. Nisl id velit faucibus vel. 
          Amet cras diam non habitasse a arcu. Urna nulla felis diam nisl et..”</p>
          <div className='flex justify-between'>
            <div className='flex'>
              <img src={profile}  alt="profile" />
              <div className='flex flex-col self-center ml-5'>
                <h1 className='text-sm font-medium'>Resky Fernanda</h1>
                <p className='text-sm'>Product Designer at Tokopedia</p>
              </div>
            </div>
            <div className='flex gap-2 self-center'>
    <img src ={lefticon} alt="left-icon" style={{cursor:'pointer'}} className='w-8 h-8'/>
    <img src={righticon} alt="right-icon" style={{cursor:'pointer'}} className='w-8 h-8'/>
            </div>
          </div>
        </div>
      
      </div>
      </div>
      <div className='bg-black h-4/5 mt-11'>
      
       <div className='flex flex-col justify-center h-full'>
        <h1 className='text-white second-tab-heading  w-1/2 self-center'>Find 3000+ space worldwide
and achieve your dream!</h1>
<button button type='submit' className='black_btn1 w-15 mt-5 self-center rounded' >Join us now!</button>
       </div>
       <div className='footer-bottom-container h-1/4 w-full flex justify-end'>
        <div className='flex justify-around self-center mt-4  w-1/2  gap-3'>
          <div className='text-left'>
            <p className='text-white mb-3 text-sm'>Technology Inc</p>
            <p className='text-white  mb-3 text-sm'>90B Wherever Street</p>
            <p className='text-white  mb-3 text-sm'>99122 Indonesia</p>
          </div>
          <div className='text-left'>
            <p className=' text-white  mb-3 text-sm' style={{cursor:'pointer'}}>+1 234 778 991</p>
            <p className='text-white  mb-1 text-sm mb-1' style={{cursor:'pointer'}}>hello@pp.com</p>
            <hr className='mb-1'/>
          </div>
          <div className='text-left'>

            <div className=''>
            <p className='text-white mb-1 text-sm 'style={{cursor:'pointer'}} >FAQ</p>
            <hr className='mb-1 w-8'/>
            </div>
            <p className='text-white mb-1 text-sm' style={{cursor:'pointer'}}>About Us</p>
            <hr className='mb-1 w-16'/>
            <p className='text-white mb-1 text-sm' style={{cursor:'pointer'}}>Command Center</p>
            <hr className=''/>
          </div>
        </div>

       </div>
      </div>
    </div>
    </div>
  )
}

export default Home