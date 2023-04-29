import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://mern-netflix-backend-3wos.onrender.com/"
})