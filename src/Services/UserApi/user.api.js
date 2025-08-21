import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";



export const GetUserById = async (id) => {
  try {
  
    console.log(id)
    return await axios.get(`${apiurl()}/api/users/getUserById?${id}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
export const UpdateUser = async data => {
  try {
    return await axios.put(`${apiurl()}/api/users/updateUser`, data, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
export const UpdateUserPassword = async data => {
  try {
    return await axios.put(`${apiurl()}/api/users/updatePassword`, data, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
export const UpdateUserProfileImage = async data => {
  try {
    return await axios.put(`${apiurl()}/api/users/updateProfilePic`, data, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
export const UpdateUserPreference = async data => {
  try {
    return await axios.put(`${apiurl()}/api/users/updateUserPreferences`, data, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const LoginUserAPI=async data=>{
  try {
    return await axios.post(`${apiurl()}/login`, data);
  } catch (error) {
   return await error.response
  }

}
export const SignUpUserAPI=async data=>{
  try {
    return await axios.post(`${apiurl()}/signup`, data);
  } catch (error) {
   return await error.response
  }

}

export const GetUserPreference = async id => {
  try {
    return await axios.put(`${apiurl()}/api/users/updateUserPreferences?${id}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};