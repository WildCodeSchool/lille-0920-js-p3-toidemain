import axios from "axios";
import Cookies from "universal-cookie";
require("dotenv").config();

const backendApi = process.env.REACT_APP_API_URL;
const cookies = new Cookies();

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
api.defaults.headers.common["Authorization"] = "Bearer " + cookies.get("token");

export { backendApi, api, cookies };
