import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";
export const AddVendorAdvert = async data => {
  try {
    return await axios.post(`${apiurl()}/api/vendorAdvert/addAdvert`, data);
  } catch (error) {
    console.error("Error:", error);
  }
};
export const GetVendorAdvert = async id => {
  try {
    return await axios.get(`${apiurl()}/api/vendorAdvert/getVendorAdvertDetails?${id}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
  