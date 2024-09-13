import axios from "axios";

const SHIFT_URL = "http://localhost:8082";

export const getShift = (userId) => {
  const token = localStorage.getItem('token');
  let authAxios = axios.create(
    { baseURL:SHIFT_URL, 
     headers: {
        Authorization: `Bearer ${token}`,
        },
    });

  return authAxios.get(SHIFT_URL + "/shifts/search/findByUserId?userId=" + userId);
};

export const createShiftRecord = (shiftRecord) => {
  const token = localStorage.getItem('token');
  let authAxios = axios.create(
    { baseURL:SHIFT_URL, 
     headers: {
        Authorization: `Bearer ${token}`,
        },
    });
return authAxios.post(SHIFT_URL + "/shiftRecords", shiftRecord);
};
