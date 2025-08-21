
import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";


export const AccessChat = async data => {
  try {
    return await axios.post(`${apiurl()}/api/chat/accessChat`, data);
  } catch (error) {
    console.error("Error:", error);
  }
};
export const GetChatUser = async id => {
  try {
    return await axios.get(`${apiurl()}/api/chat/fetchChat?${id}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
export const SendMessage = async data => {
  try {
    return await axios.put(`${apiurl()}/api/message/sendMessage`, data, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
export const DeleteTenantAdvert = async (chatId) => {
  try {
    return await axios.delete(`${apiurl()}/api/message/allMessage?${chatId}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
  

export const ContactUs = async data => {
    try {
      return await axios.post(`${apiurl()}/api/contactUs/sendMail`, data);
    } catch (error) {
      console.error("Error:", error);
    }
  };