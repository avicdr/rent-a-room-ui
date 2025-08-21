import React, { useState } from "react";
import Footerrent from "../Footerrent";
import { Link } from 'react-router-dom';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "../../ComponentsCSS/GraphPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee, faShareNodes

} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass, faHeart,faLocationDot } from "@fortawesome/free-solid-svg-icons";

import twitterPic from '../../Attributes/icons8-twitter-480 1.png'
import instagramPic from '../../Attributes/instagram.png'
import facebookPic from '../../Attributes/facebook.png'
import Navbar from "../Navbar";
import Context from "../../Services/Context/Context";
import { Line, line } from 'react-chartjs-2';
import adver_list_img from '../../Attributes/adver_list_img.png'
import repeated_image from '../../Attributes/repeated_view.png'
import view_img from '../../Attributes/view_img.png'
import {PiNotebook} from 'react-icons/pi'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)



// const options = {
//   title: 
//    'none'
//   ,

//   xAxis: 
//   {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//   }
//   ,
//   yAxis: {
//     title: {
//       text: "Values",
//     },
//   },
//   data:[{
//     lineColor: "red",
//    },
//   ],
//   series: [
//     {
//       type: "areaspline",
//       name: "Series 1",
//       data: [3, 4, 3, 5, 4, 10, 12, 8, 10, 11, 9, 7],
//     },
//   ],
// };

const options2 = {
  title:
    'none'
  ,
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  series: [
    {
      name: "Series 1",
      data: [1, 3, 2],
    },
  ],
};

const options3 = {
  title:
    'none'
  ,
  xAxis: {
    categories: ["Red", "Green", "Blue"],
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  series: [
    {
      name: "Series 1",
      data: [4, 2, 5],
    },
  ],
};

const GraphPage = () => {
  const [check, setCheck] = useState("Month")
  const [activeCard,setActiveCard]=useState('2')
  const data10 = {
    // labels : Utils.months({count: 7}),
    labels: ["Jan 1", "Jan 5", "Jan 10", "Jan 15", "Jan 20", "Jan 25", "Jan 31"],
    datasets: [{
      data: [10, 50, 40, 80, 70, 50, 80],
      // backgroundColor: 'transparent', 
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      borderColor: '#1F244A',
      pointBorderColor: 'transparent',
      pointBorderWidth: 4,
      tension: 0.5
    }]
  };
  const options10 = {
    plugins: {
      legends: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: 10,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => value
        },
        grid: {
          borderDash: [10]
        }
      }
    }
  };
  return (
    <Context.Consumer>
      {value => {
        const { toogletheme, theme } = value
        return (
          <div className="w-ful ml-11 mr-11">
            {/* <Navbar toogletheme={toogletheme} theme={theme} /> */}
            <div className="advert-list-container mb-2">
              <h1 className="advert_list_header">Advert List</h1>

              <div className='list_container_advert mt-3'>

               <div  onClick={()=>setActiveCard("1")} className={`advert_list ${activeCard==="1"&&"active_advert_list"} mb-3 flex justify-between pr-3 pl-3`}>
                <div className="flex ">
                <img src={adver_list_img} alt="img" className="self-center h-4/6"/>
                <div className="flex flex-col ml-3 text-left self-center">
                  <h1 className="list_text_color">The People's Brownstone</h1>
                  <p className=" list_text_color2"> <FontAwesomeIcon className=" mr-1" icon={faLocationDot} />1995 Broadway, Kingston</p>
                </div>
                </div>
                <div className="flex flex-col justify-center text-left">
                  <p className="text-xs" style={{color:'#525252'}}>Publish date</p>
                  <p className="text-xs font-bold "style={{color:'#000'}}>26/7/2023</p>
                </div>
                <div className="flex flex-col justify-center text-center" >
                  <PiNotebook className=" self-center" style={{color:'#44C1F0'}} />
                  <p className="text-xs" style={{color:'#44C1F0'}}>view report</p>
                </div>

               </div>
               <div onClick={()=>setActiveCard("2")}  className={`advert_list ${activeCard==="2"&&"active_advert_list"} mb-3 flex justify-between pr-3 pl-3`}>
                <div className="flex ">
                <img src={adver_list_img} alt="img" className="self-center h-4/6"/>
                <div className="flex flex-col ml-3 text-left self-center">
                  <h1 className="list_text_color">The People's Brownstone</h1>
                  <p className=" list_text_color2"> <FontAwesomeIcon className=" mr-1" icon={faLocationDot} />1995 Broadway, Kingston</p>
                </div>
                </div>
                <div className="flex flex-col justify-center text-left">
                  <p className="text-xs" style={{color:'#525252'}}>Publish date</p>
                  <p className="text-xs font-bold "style={{color:'#000'}}>26/7/2023</p>
                </div>
                <div className="flex flex-col justify-center text-center" >
                  <PiNotebook className=" self-center" style={{color:'#44C1F0'}} />
                  <p className="text-xs" style={{color:'#44C1F0'}}>view report</p>
                </div>

               </div>
               <div onClick={()=>setActiveCard("3")}  className={`advert_list ${activeCard==="3"&&"active_advert_list"} mb-3 flex justify-between pr-3 pl-3`}>
                <div className="flex ">
                <img src={adver_list_img} alt="img" className="self-center h-4/6"/>
                <div className="flex flex-col ml-3 text-left self-center">
                  <h1 className="list_text_color">The People's Brownstone</h1>
                  <p className=" list_text_color2"> <FontAwesomeIcon className=" mr-1" icon={faLocationDot} />1995 Broadway, Kingston</p>
                </div>
                </div>
                <div className="flex flex-col justify-center text-left">
                  <p className="text-xs" style={{color:'#525252'}}>Publish date</p>
                  <p className="text-xs font-bold "style={{color:'#000'}}>26/7/2023</p>
                </div>
                <div className="flex flex-col justify-center text-center" >
                  <PiNotebook className=" self-center" style={{color:'#44C1F0'}} />
                  <p className="text-xs" style={{color:'#44C1F0'}}>view report</p>
                </div>

               </div>
               <div onClick={()=>setActiveCard("4")}  className={`advert_list ${activeCard==="4"&&"active_advert_list"} mb-3 flex justify-between pr-3 pl-3`}>
                <div className="flex ">
                <img src={adver_list_img} alt="img" className="self-center h-4/6"/>
                <div className="flex flex-col ml-3 text-left self-center">
                  <h1 className="list_text_color">The People's Brownstone</h1>
                  <p className=" list_text_color2"> <FontAwesomeIcon className=" mr-1" icon={faLocationDot} />1995 Broadway, Kingston</p>
                </div>
                </div>
                <div className="flex flex-col justify-center text-left">
                  <p className="text-xs" style={{color:'#525252'}}>Publish date</p>
                  <p className="text-xs font-bold "style={{color:'#000'}}>26/7/2023</p>
                </div>
                <div className="flex flex-col justify-center text-center" >
                  <PiNotebook className=" self-center" style={{color:'#44C1F0'}} />
                  <p className="text-xs" style={{color:'#44C1F0'}}>view report</p>
                </div>

               </div>
              
              </div>
            </div>
            <div className="first-container mb-2">
              <div className="bg-transparent flex  justify-between ">
                <h1 className="graph_heading">The People's Brownstone
                </h1>
                <div className="period-container">
                  <button className={`period-button ${check === "Day" && "actives"}`} onClick={() => (setCheck("Day"))}>Day</button>
                  <button className={`period-button ${check === "Month" && "actives"}`} onClick={() => (setCheck("Month"))}>Month</button>
                  <button className={`period-button ${check === "All" && "actives"}`} onClick={() => (setCheck("All"))}>All</button>
                </div>
              </div>
              <Line className="first-line-graph" data={data10} options={options10}></Line>
              {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
            </div>
            <div className="view-container">
              <div className="flex gap-2">
                <img src={repeated_image}/>
                <p className="repeated_text">Repeated view</p>
              </div>
              <ul className="view_list_container mt-2">

             
              <li className="view_list flex justify-between p-2 mb-2">
                <div className="flex gap-2">
                  <img src={view_img} alt="img"/>
                  <div className="flex flex-col text-left justify-center">
                  <p className=" username_text ">Username</p>
                  <p className="view_text" style={{color:'#525252'}}>view <span className="">(<span style={{color:'#44C1F0'}}>s</span>)</span></p>

                  </div>
                </div>
               <Link to ='/ChatPage' className="contact_button"> <button type="button"  >Contact</button></Link>
              </li>
              <li className="view_list flex justify-between p-2 mb-2">
                <div className="flex gap-2">
                  <img src={view_img} alt="img"/>
                  <div className="flex flex-col text-left justify-center">
                  <p className=" username_text ">Username</p>
                  <p className="view_text" style={{color:'#525252'}}>view <span className="">(<span style={{color:'#44C1F0'}}>s</span>)</span></p>

                  </div>
                </div>
               <Link to ='/ChatPage' className="contact_button"> <button type="button"  >Contact</button></Link>
              </li>
              <li className="view_list flex justify-between p-2 mb-2">
                <div className="flex gap-2">
                  <img src={view_img} alt="img"/>
                  <div className="flex flex-col text-left justify-center">
                  <p className=" username_text ">Username</p>
                  <p className="view_text" style={{color:'#525252'}}>view <span className="">(<span style={{color:'#44C1F0'}}>s</span>)</span></p>

                  </div>
                </div>
               <Link to ='/ChatPage' className="contact_button"> <button type="button"  >Contact</button></Link>
              </li>
              <li className="view_list flex justify-between p-2 mb-2">
                <div className="flex gap-2">
                  <img src={view_img} alt="img"/>
                  <div className="flex flex-col text-left justify-center">
                  <p className=" username_text ">Username</p>
                  <p className="view_text" style={{color:'#525252'}}>view <span className="">(<span style={{color:'#44C1F0'}}>s</span>)</span></p>

                  </div>
                </div>
               <Link to ='/ChatPage' className="contact_button"> <button type="button"  >Contact</button></Link>
              </li>
              <li className="view_list flex justify-between p-2 mb-2">
                <div className="flex gap-2">
                  <img src={view_img} alt="img"/>
                  <div className="flex flex-col text-left justify-center">
                  <p className=" username_text ">Username</p>
                  <p className="view_text" style={{color:'#525252'}}>view <span className="">(<span style={{color:'#44C1F0'}}>s</span>)</span></p>

                  </div>
                </div>
               <Link to ='/ChatPage' className="contact_button"> <button type="button"  >Contact</button></Link>
              </li>
              <li className="view_list flex justify-between p-2 mb-2">
                <div className="flex gap-2">
                  <img src={view_img} alt="img"/>
                  <div className="flex flex-col text-left justify-center">
                  <p className=" username_text ">Username</p>
                  <p className="view_text" style={{color:'#525252'}}>view <span className="">(<span style={{color:'#44C1F0'}}>s</span>)</span></p>

                  </div>
                </div>
               <Link to ='/ChatPage' className="contact_button"> <button type="button"  >Contact</button></Link>
              </li>
              </ul>
            </div>

            {/* <h1>hiii</h1> */}
            {/* <div className="second-container" >
        <div className="little-graph" >
        <div className="second-graph-container">
          <p>Total spent  <br />
          <span>$682.5</span></p>
          <FontAwesomeIcon className="share-icon" icon={faShareNodes} />
        </div>
          <HighchartsReact highcharts={Highcharts} options={options2} />
        </div>
        <div className="little-graph" >
        <div className="second-graph-container">
          <p>Social Media  <br />
          <span>35%</span></p>
        <div className="social">
          <img src={instagramPic} alt="" />
          <h4>15%</h4>
        </div>
        <div className="social">
        <img src={facebookPic} alt="" />
          <h4>15%</h4>
        </div>
        <div className="social">
        <img src={twitterPic} alt="" />
          <h4>15%</h4>
        </div>
        </div>
          <HighchartsReact highcharts={Highcharts} options={options3} />
        </div>
      </div> */}

            {/* <Footerrent/> */}
          </div>
        );
      }}
    </Context.Consumer>
  )
}

export default GraphPage;
