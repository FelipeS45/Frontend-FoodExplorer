import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-backend-foodexplorer.onrender.com",
  withCredentials: true
})