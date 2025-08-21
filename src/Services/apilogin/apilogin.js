
import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";


//*****************USER***************** //
const APILogin = async (data) => {
  try {
    console.log(data)
    return await axios.post(`${apiurl()}/api/users/login`,data);
  } catch (error) {
    console.error("Error:", error);
  }
};






export {APILogin,};
