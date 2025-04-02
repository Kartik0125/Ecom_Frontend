import axios from "axios";

const API = axios.create({
  baseURL: "https://ecom-backend-ursf.onrender.com/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
