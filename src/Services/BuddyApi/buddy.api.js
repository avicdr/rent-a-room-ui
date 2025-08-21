import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";
export const AddBuddyAdvert = async data => {
  try {
    return await axios.post(`${apiurl()}/api/buddyUpAdvert/addAdvert`, data);
  } catch (error) {
    console.error("Error:", error);
  }
};
export const GetBuddyAdvert = async id => {
  try {
    return await axios.get(`${apiurl()}/api/buddyUpAdvert/getBuddyUpAdvertDetails?${id}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
  