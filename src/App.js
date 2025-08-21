import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Components/Navbar";
import FrontPage from "./Components/Pages/FrontPage";
import ProfilePage from "./Components/Pages/ProfilePage";
import SavedAdvert from "./Components/SavedAdvert";
import RegistrationForm from "./Components/RegistrationForm";
import ProfileInfo from "./Components/ProfileInfo";
import AdvertForm from "./Components/AdvertForm";
import GraphPage from "./Components/Pages/GraphPage";
import RegistrationTenant from "./Components/RegistrationTenant";
import HomePage from "./Components/Pages/HomePage";
import CardForFrontPage from "./Components/CardForFrontPage";
import Footerrent from "./Components/Footerrent";
import "./fonts/Gilroy-Regular.ttf";
// import Nav2 from "./Components/Nav2";
import AdvertDetails from "./Components/AdvertDetails";
import MoreAdvert from "./Components/MoreAdvert";
import Saved from "./Components/Saved";
import ChatPage from "./Components/Pages/ChatPage";
import Loginpage from "./Components/Pages/Loginpage";
import Roomwalanav from "./Components/Roomwalanav";
import SignUpPage from "./Components/Pages/SignUpPage";
import SignUp2 from "./Components/SignUp2";
import AdvertFormNew from "./Components/AdvertFormNew";
import AdvertFormRoomWanted from "./Components/AdvertFormRoomWanted";
import AdvertFormRWBuddyUp from "./Components/AdvertFormRWBuddyUp";
import Nav2 from "./Components/Nav2";
import Myadvert from "./Components/Myadvert";
import NotFound from "./Components/NotFound";
import Authguard from "./Services/Auth/authguard";
import { useState } from "react";
import Context from "./Services/Context/Context"
import Contact from "./Components/contact";
import Home from "./Components/Home";
import Scrolltop from "./Components/Scrolltop";
import Privacypolicy from "./Components/privacypolicy";
import AboutUs from "./Components/Pages/AboutUs";
import PlatformRelease from "./Components/PlatformRelease";
import FaqPage from "./Components/Pages/FaqPage";
import EulaPage from "./Components/Pages/EulaPage";
import Corporate from "./Components/Corporate";
import CookiesPolicy from "./Components/CookiesPolicy";
import Chatboat from "./Components/Chatboat";
function App() {
  const [theme, setTheme]= useState("light-theme");
  console.log(theme)

  function toggleTheme(){
    if(theme==="light-theme"){
    setTheme("dark-theme");
    }
    else{
      setTheme("light-theme");
    }
  }
  return (
    <div className="App">
      <Context.Provider
       value={{toogletheme:toggleTheme, theme}} >
      <BrowserRouter >
      <Scrolltop />
        <Routes>
        <Route exact path="/rentaroom" element={<HomePage/>} />
        <Route exact path='/' element={<Home/>}/>
         <Route path="/ProfilePage"  element={  <Authguard> <ProfilePage/> </Authguard>}  />
          <Route path="/ChatPage" element={  <Authguard> <ChatPage/> </Authguard>}  />
          {/* <Route path="/GraphPage" element={  <Authguard><GraphPage/> </Authguard>}  /> */}
          <Route path="/AdvertFormNew" element={  <AdvertFormNew/> }  />
          <Route path="/AdvertFormRWBuddyUp" element={  <AdvertFormRWBuddyUp/>}  />
          <Route path="/AdvertFormRoomWanted" element={  <AdvertFormRoomWanted/>}  />
          <Route path="/AdvertDetails" element={  <Authguard><AdvertDetails></AdvertDetails> </Authguard>}  />
          <Route path="/AdvertForm" element={  <Authguard><MoreAdvert></MoreAdvert> </Authguard>}  />
          {/* <Route path="/SignupPage" element={  <Authguard><SignUpPage></SignUpPage> </Authguard>}  /> */}
          <Route path="/LoginPage" element={  <Loginpage></Loginpage> }  />
          {/* <Route path="/SignupPage2" element={  <Authguard><SignUp2></SignUp2> </Authguard>}  /> */}
          <Route path="/Frontpage" element={  <Authguard><FrontPage></FrontPage> </Authguard>}  />
          <Route path="/Saved" element={  <Authguard><Saved></Saved> </Authguard>}  />
          {/* <Route path="/Saved" element={  <Authguard><SavedAdvert></SavedAdvert> </Authguard>}  /> */}
           <Route path="/Compare" element={  <Authguard><SavedAdvert></SavedAdvert> </Authguard>}  /> 
          {/* <Route path="/MyAdvert" element={  <Authguard><Myadvert></Myadvert> </Authguard>}  /> */}
          <Route path="/Profileinfo" element={  <Authguard><ProfileInfo></ProfileInfo> </Authguard>}  />
          <Route path="/ContactPage" element={  <Authguard><Contact ></Contact> </Authguard>}  />
          <Route path="/privacy-policy" element={  <Privacypolicy/> }  />
          <Route path="/about-us" element={  <AboutUs/> }  />
          <Route path="/platform-release" element={  <PlatformRelease/> }  />
          <Route path="/faq-page" element={  <FaqPage/> }  />
          <Route path="/eula-page" element={  <EulaPage/> }  />
          <Route path="/corporate" element={  <Corporate/> }  />
          <Route path="/cookies-policy" element={  <CookiesPolicy/> }  />
          <Route path='*' element={<NotFound />}></Route>
       
          
        </Routes>
      </BrowserRouter>
      </Context.Provider>
<Chatboat></Chatboat>
    </div>
  );
}

export default App;
