import React from 'react';

import {Link} from 'react-router-dom'
import pic2 from "../Attributes/not-found.jpg";

const NotFound = () => (
  <div className="flex flex-col items-center " data-testid="NotFound">
    <h1 className='font-bold mt-11 text-3xl'>URL Not Found!</h1>
    <div className=' h-75 ' >
    
    <img src={pic2} className='h-1/2' style={{maxHeight:"700px"}} alt='not-found'/>
    </div>
    <div>
    
    <p>Back to the Main Page </p>
    <Link className='link  font-medium text-blue-600 dark:text-blue-500 hover:underline' to='/'>Click Here</Link>
    </div>
  </div>
);

export default NotFound;
