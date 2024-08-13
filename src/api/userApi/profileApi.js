import { axiosInstance } from "../../utils/axiosInstance";

// Profile related end points

// Change Email - end point
export const changeEmailAPI = async (email) => {
  try {
    const response = await axiosInstance.post(`/auth/change-email/`, email);
    return response.data;
  } catch (error) {
    console.error("Error Changing The Email", error);
    throw error;
  }
};

// Change Password - end point
export const changePasswordAPI = async (passwords) => {
  // passwords = {  "current_password": "string", "new_password": "string"}
  try {
    const response = await axiosInstance.post(
      `/auth/change-password/`,
      passwords
    );
    return response.data;
  } catch (error) {
    console.error("Error Changing The Password", error);
    throw error;
  }
};

// Check Password - end point
export const checkPasswordAPI = async (password) => {
  try {
    const response = await axiosInstance.post(
      `/auth/check-password/`,
      password
    );
    return response.data;
  } catch (error) {
    console.error("Error Checking The Password", error);
    throw error;
  }
};

// Delete Account - end point
export const deleteAccountAPI = async (id) => {
  try {
    const response = await axiosInstance.post(`/auth/delete-account/${id}`);
    return response;
  } catch (error) {
    console.error("Error Deleting The Account", error);
    throw error;
  }
};

// Reactivate Password - end point
export const reactivateAccountAPI = async (id) => {
  try {
    const response = await axiosInstance.post(`/auth/reactivate-account/${id}`);
    return response;
  } catch (error) {
    console.error("Error Deleting The Account", error);
    throw error;
  }
};

// NURSE Related End-points

// Get Nurse Profile Date - end point
export const getNurseData = async (id) => {
  try {
    const response = await axiosInstance.get(`/auth/nurse/${id}`);
    return response;
  } catch (error) {
    console.error("Error Getting Nurses Profile Data", error);
    throw error;
  }
};

// Delete Nurse Work Hours - end point
export const deleteNurseWorkHours = async (id) => {
  // ID of the this work hour
  try {
    const response = await axiosInstance.delete(
      `/auth/delete-work-hours/${id}`
    );
    return response;
  } catch (error) {
    console.error("Error Deleteing Nurse Work Hours", error);
    throw error;
  }
};

// Get Nurse List Of Work Hours - end point
export const getNurseWorkHours = async () => {
  try {
    const response = await axiosInstance.get(`/auth/nurse/list-work-hours/`);
    return response;
  } catch (error) {
    console.error("Error Getting Nurse List Of Work Hours", error);
    throw error;
  }
};

// Add Work Hours To [Day] - end point
export const addNurseWorkHours = async (DayWorkHours) => {
  // DayWorkHours = {"day": "SATURDAY", "start_time": "string", "end_time": "string"}
  try {
    const response = await axiosInstance.post(
      `/auth/nurse/set-work-hours/`,
      DayWorkHours
    );
    return response;
  } catch (error) {
    console.error("Error Adding Work Hours", error);
    throw error;
  }
};

// Edit Work Hours To [Day] - end point
export const editNurseWorkHours = async (DayWorkHours) => {
  // DayWorkHours = {"day": "SATURDAY", "start_time": "string", "end_time": "string"}
  try {
    const response = await axiosInstance.put(
      `/auth/nurse/update-work-hours/`,
      DayWorkHours
    );
    return response;
  } catch (error) {
    console.error("Error Editing Work Hours", error);
    throw error;
  }
};

// PATIENT Related End-points

// Get Patient Profile Data - end point
export const getPatientData = async (id) => {
  try {
    const response = await axiosInstance.get(`/patient/${id}`);
    return response;
  } catch (error) {
    console.error("Error Getting Patient Profile Data", error);
    throw error;
  }
};
