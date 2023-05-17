import axios from "axios";
import { BASE_API_URL } from "../env/api";


export const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    timeout:1000
})