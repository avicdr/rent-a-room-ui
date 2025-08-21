
import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";


export const AddTenantAdvert = async data => {
  try {
    return await axios.post(`${apiurl()}/api/tenantAdvert/addAdvert`, data);
  } catch (error) {
    console.error("Error:", error);
  }
};
export const GetTenantAdvert = async id => {
  try {
    return await axios.get(`${apiurl()}/api/tenantAdvert/getTenantAdvertDetails?${id}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
export const UpdateTenantAdvert = async data => {
  try {
    return await axios.put(`${apiurl()}/api/tenantAdvert/editAdvert`, data, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
export const DeleteTenantAdvert = async id => {
  try {
    return await axios.delete(`${apiurl()}/api/tenantAdvert/deleteAdvert?${id}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
  