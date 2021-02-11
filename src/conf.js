import axios from "axios";
import Cookies from "universal-cookie";
require("dotenv").config()

const backendApi = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const cookies = new Cookies();
module.exports = { backendApi, api, cookies }

