import axios from "axios";
import Cookies from "universal-cookie";
require("dotenv").config();

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const cookies = new Cookies();

export { api, cookies };
