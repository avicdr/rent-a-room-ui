import React from 'react'
import bot from '../Attributes/bot.svg'
import '../ComponentsCSS/chatbot.css'
const Chatboat = () => {
  return (
    <div className='bot__container'>
        <div className="bot__container-image">
       <img src={bot} alt='bot'></img>
       </div>
    </div>
  )
}

export default Chatboat