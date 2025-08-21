
import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";



//*****************************TENANT*********************//
export const AddSavedTenantAdvert = async data => {
  try {
    return await axios.post(`${apiurl()}/api/savedTenantAdvert/addSavedAdvert`, data);
  } catch (error) {
    console.error("Error:", error);
  }
};
export const GetSavedTenantAdvert = async (data) => {
  try {
    return await axios.get(`${apiurl()}/api/savedTenantAdvert/getAllSavedAdvert?${data.id}&${data.page}&${data.perPage}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const DeleteSavedTenantAdvert = async id => {
  try {
    return await axios.delete(`${apiurl()}/api/savedTenantAdvert/removeSavedAdvert?${id}`, {
      headers: {
        Authorization: `Bearer ${gettoken()}`
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
  

//*****************************VENDOR*********************//
export const AddSavedVendorAdvert = async data => {
    try {
      return await axios.post(`${apiurl()}/api/savedVendorAdvert/addSavedAdvert`, data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  export const GetSavedVendorAdvert = async (id,page,perPage) => {
    try {
      return await axios.get(`${apiurl()}/api/savedVendorAdvert/getAllSavedAdvert?${id}&${page}&${perPage}`, {
        headers: {
          Authorization: `Bearer ${gettoken()}`
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export const DeleteSavedVendorAdvert = async id => {
    try {
      return await axios.delete(`${apiurl()}/api/savedVendorAdvert/removeSavedAdvert?${id}`, {
        headers: {
          Authorization: `Bearer ${gettoken()}`
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //*****************************BUDDYUP*********************//
export const AddSavedBuddyAdvert = async data => {
    try {
      return await axios.post(`${apiurl()}/api/savedBuddyUpAdvert/addSavedAdvert`, data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  export const GetSavedBuddyAdvert = async  (id,page,perPage) => {
    try {
      return await axios.get(`${apiurl()}/api/savedBuddyUpAdvert/getAllSavedAdvert?${id}&${page}&${perPage}`, {
        headers: {
          Authorization: `Bearer ${gettoken()}`
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export const DeleteSavedVBuddyAdvert = async id => {
    try {
      return await axios.delete(`${apiurl()}/api/savedBuddyUpAdvert/removeSavedAdvert?${id}`, {
        headers: {
          Authorization: `Bearer ${gettoken()}`
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };