import { axiosInstance } from "../../utils/axiosInstance";

// User related end points

// Login - end point
export const loginApi = async (user) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error Logining in", error);
    throw error;
  }
};

// Register As A Patient - end point
export const registerPatientApi = async (newUser) => {
  try {
    const response = await axiosInstance.post(
      `/auth/register/patient`,
      newUser
    );
    return response.data;
  } catch (error) {
    console.error("Error registering", error);
    throw error;
  }
};

// Register As A Nurse - end point
export const registerNurseApi = async (newUser) => {
  try {
    const response = await axiosInstance.post(`/auth/register/nurse`, newUser);
    return response.data;
  } catch (error) {
    console.error("Error registering", error);
    throw error;
  }
};

// logout - end point
export const logout = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.log("Error logging out", error.message);
    throw error;
  }
};

// Forget Password - end point
export const forgetPassword = async (email) => {
  try {
    const response = await axiosInstance.post("/auth/forget-password", email);
    return response;
  } catch (error) {
    console.log("Error Sending OTP Code", error.message);
    throw error;
  }
};

// Forget Password Verify OTP Code
export const forgetPasswordVerifyOTP = async (id, otpCode) => {
  try {
    const response = await axiosInstance.post(
      `/auth/forget-password/verify-otp/${id}`,
      otpCode
    );
    return response;
  } catch (error) {
    console.log("Error Verifying OTP Code", error.message);
    throw error;
  }
};

// Confirm New Password - Reset
export const confirmPasswordReset = async (id, newPassword) => {
  try {
    const response = await axiosInstance.post(
      `/auth/forget-password/confirm/${id}`,
      newPassword
    );
    return response;
  } catch (error) {
    console.log("Error Setting New Password", error.message);
    throw error;
  }
};
