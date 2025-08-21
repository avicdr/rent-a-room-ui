import React, { useEffect, useState } from 'react';
import Context from '../../Services/Context/Context';
import Nav2 from '../Nav2';
 import Navbar from "../Navbar";
import Footerrent from '../Footerrent';


const AboutUs = () => {
    const [userLogedin, setUserLogedIn]=useState(false)
    useEffect(()=> {
     
      const tokens=localStorage.getItem("tokens")
      if(tokens){
        setUserLogedIn(true)
  
      }
  
    }, [])
    return(
        <Context.Consumer>
         {value=>{
          const {toogletheme,theme}=value
  return (
    <div>
        {userLogedin?  <Navbar toogletheme={toogletheme} theme={theme} />:
     <Nav2></Nav2>}
          <div className='flex mt-11 ml-11 text-slate-400'>
        <a href='/rentaroom'>Home &#x3e;</a>
        <a href=''>About Us </a>
        
      </div>
      <div className='policy-content-container p-3 flex flex-col text-sm gap-1 text-left ml-8 w-11/12'>
        <h2 className='text-xl font-medium mb-11'>About Us</h2>
        <p className='text-xs'>Effective Date: [Insert Date]</p>
        <p className='text-xs'>Thank you for visiting our place booking website (the "Website"). We value your privacy and are committed to protecting your personal information. This Privacy
Policy explains how we collect, use, disclose, and safeguard your personal data when you use our Website. By accessing or using our Website, you consent to
the practices described in this Privacy Policy!</p>
<h2 className='text-xl font-medium mt-3 ml-3 '> • Information We Collect</h2>
<p className='text-xs'> (a) Personal Information: We may collect personal information that you provide to us when using our Website, such as your name, email address, phone number,
and billing information. This information is necessary to process your bookings and to communicate with you regarding your reservations.</p>
<p className='text-xs'>(b) Usage Information: We may collect non-personal information about your interactions with the Website, such as your IP address, device type, browser type,
pages visited, and the date and time of access. This information helps us improve the functionality and performance of our Website.</p>
<p className='text-xs'>(c) Cookies and Tracking Technologies: We use cookies and similar tracking technologies to collect information about your usage patterns on our Website.
Cookies are small files stored on your device that help us remember your preferences and enhance your overall experience.</p>

<h2 className='text-xl font-medium mt-3 ml-3 '> • How We Use Your Information</h2>
<p className='text-xs'>(a) Booking and Reservation Processing: We use the personal information you provide to process your bookings and reservations, as well as to send you
important updates related to your reservations.</p>
<p className='text-xs'>(b) Communication: We may use your email address or phone number to send you service-related communications, promotional offers, or newsletters if you
have opted-in to receive them. You can opt-out of marketing communications at any time by following the unsubscribe instructions provided in the email.</p>
<p className='text-xs'>(c) Website Improvement: Your non-personal information and usage data help us analyze and improve the functionality and performance of our Website,
ensuring a better user experience.</p>
<p className='text-xs'>(d) Legal Compliance: We may use your information to comply with applicable laws, regulations, and legal processes or to respond to lawful requests from
governmental authorities.</p>
<h2 className='text-xl font-medium mt-3 ml-3 '> • How We Share Your Information</h2>
<p className='text-xs'>(a) Third-party Service Providers: We may share your personal information with trusted third-party service providers who assist us in operating the Website,
processing payments, analyzing data, or delivering services on our behalf. These providers are bound by confidentiality agreements and are not allowed to use
your personal information for any purpose other than providing services to us.</p>
<p className='text-xs'>(b) Legal Requirements: We may disclose your information if required by law or if we believe that such disclosure is necessary to protect our rights,
 your safety, orthe safety of others, investigate fraud, or respond to a government request.</p>
<p className='text-xs'>(c) Business Transfers: If our business is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction,
subject to the acquirer's commitment to respecting your privacy.</p>
<h2 className='text-xl font-medium mt-3 ml-3 '> • Data Security</h2>
<p className='text-xs'>We employ appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and
destruction. However, no data transmission over the internet or electronic storage system can be guaranteed to be 100% secure. Therefore, we cannot
guarantee the absolute security of your information.</p>
<h2 className='text-xl font-medium mt-3 ml-3 '> •  Your Choices and Rights</h2>
<p className='text-xs'>You have the right to access, update, or delete your personal information from our records. You may also withdraw your consent to the processing of your
personal information. To exercise these rights, please contact us using the contact information provided at the end of this Privacy Policy.</p>
<h2 className='text-xl font-medium mt-3 ml-3 '> • Children's Privacy</h2>
<p className='text-xs'>Our Website is not intended for children under the age of 18. We do not knowingly collect or store personal information from children. If you are a parent or
guardian and believe that your child has provided us with personal information, please contact us to have that information deleted.
</p>
<h2 className='text-xl font-medium mt-3 ml-3 '> • Third-Party Links</h2>
<p className='text-xs'>Our Website may contain links to third-party websites or services that are not operated or controlled by us. We are not responsible for the privacy practices of
these third-party websites. We encourage you to review the privacy policies of those third-party websites before providing any personal information</p>
<h2 className='text-xl font-medium mt-3 ml-3 '> • Changes to this Privacy Policy</h2>
<p className='text-xs'>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will 
beposted on this page with a revised effective date. We encourage you to review this Privacy Policy periodically.</p>
<h2 className='text-xl font-medium mt-3 ml-3 '> • Contact Us</h2>
<p className='text-xs'>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [Insert Contact Email Address]"
By using our Website, you signify your acceptance of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our Website.</p>
      </div>
      <Footerrent />

    </div>
  )
         }
        }
        </Context.Consumer>
        )
}

export default AboutUs
