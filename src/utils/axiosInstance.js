import axios from "axios";

// Axios instance to set base url of the end-points, headers, and timeout(optional)

export const axiosInstance = axios.create({
  baseURL: `https://graston-backend-production.up.railway.app`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const axiosInstance = axios.create({
//   baseURL: `https://8000-idx-django-workspace-1721820460889.cluster-6yqpn75caneccvva7hjo4uejgk.cloudworkstations.dev`,
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
