
import { Navigate } from 'react-router-dom';
import { gettoken,getuserdetails } from '../Token/token';
const Authguard = (props) => {
  const { children }=props;
  var token=gettoken();
  // return token ?children : <Navigate to="/LoginPage" />; 
  return children
};

export default Authguard;
