import React, { useState } from 'react'
import '../ComponentsCSS/PriceModal.css'
import {IoIosCheckmarkCircleOutline,IoIosClose} from 'react-icons/io'
const PriceModal = ({close}) => {
    const [firstCard,setFirstCard]=useState(false)
    const [secnondCard, setSecondCard]=useState(true)
    const [thirdCard, setThirdCard]=useState(false)
  
    function clickedFirst(e){
        console.log(e)
        switch(e){
            case  ("first"):
                console.log(e)
                setFirstCard(true)
                setSecondCard(false)
                setThirdCard(false)
                break;
                case  ("second"):
                    setFirstCard(false)
                    setSecondCard(true)
                    setThirdCard(false)
                    break;
                    case  ("third"):
                        setFirstCard(false)
                        setSecondCard(false)
                        setThirdCard(true)
                        break;
                        default:
                            break;

        }
    }
  return (
    <div className='bg-white bg-opacity-25  backdrop-blur-sm w-full h-full fixed inset-0 flex justify-center '>
      
      <div className=' w-2/3 self-center h-2/6'>
        <div className='flex justify-end ml-11 mb-4'>
      <button className='text-2xl '  onClick={()=>close()}> <IoIosClose/></button>
      </div>
      <div className='flex  gap-8 '>
        <div className= {`${firstCard?"select_card":"unselect_card"}`} onClick={()=>clickedFirst("first")} >
        <h1 className={`${firstCard?"select_heading":"unselect_heading"}`}> £15.00 both sites </h1>
            <h5 className={`${firstCard?"select_title":"unselect_title"}`}> £10 singe site </h5>
           
            <p className='sub_heading'>
            It offers a reliable and cost-effective hosting solution with all the essentials you need to get started.
            </p>
            <div className='flex mt-4'>
                <IoIosCheckmarkCircleOutline  className={ `mr-2  ${firstCard?"select_icon":"unselect_icon "}`}/>
                <p className='price_text '>2 - 4 Rooms</p>
            </div>
            <div className='flex justify-center mt-4'>
            <button className='choose-button' type="button"> Choose</button>
            </div>
        </div>
        <div className= {`${secnondCard?"select_card":"unselect_card"}`}  onClick={()=>clickedFirst("second")}>
        <h1 className={`${secnondCard?"select_heading":"unselect_heading"}`}> £18.00 both sites  </h1>
       <h5 className={`${secnondCard?"select_title":"unselect_title"}`}>£13.00 singe site </h5> 
       
            <p className='sub_heading'>
            It includes a range of advanced features and resources to support and grow your online presence.
            </p>
            <div className='flex mt-4'>
                <IoIosCheckmarkCircleOutline  className={ `mr-2  ${secnondCard?"select_icon":"unselect_icon "}`}/>
                <p className='price_text '>4 - 8 Rooms</p>
            </div>
            <div className='flex justify-center mt-4'>
            <button className='choose-button' type="button"> Choose</button>
            </div>
            
        </div>
        <div className= {`${thirdCard?"select_card":"unselect_card"}`}  onClick={()=>clickedFirst("third")}>
        <h1 className={`${thirdCard?"select_heading":"unselect_heading"}`}>£30.00 both sites  </h1>
        <h5 className={`${thirdCard?"select_title":"unselect_title"}`}>£20.00 singe site </h5> 
      
            <p className='sub_heading'>
            It offers the most robust set of features and resources to ensure the smooth operation and growth of your website.
            </p>
            <div className='flex mt-4'>
                <IoIosCheckmarkCircleOutline  className={ `mr-2  ${thirdCard?"select_icon":"unselect_icon "}`}/>
                <p className='price_text '>8 - 12 Rooms</p>
            </div>
         
            <div className='flex justify-center mt-4'>
            <button className='choose-button' type="button"> Choose</button>
            </div>
        </div>
        </div>
        </div>   
    </div>
  )
}

export default PriceModal
