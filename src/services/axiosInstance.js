import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    // Add any default headers you need here
  },
});

export default axiosInstance;
