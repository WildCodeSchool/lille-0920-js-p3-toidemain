require("dotenv").config()
const backendApi = process.env.REACT_APP_API_URL;
module.exports = { backendApi }