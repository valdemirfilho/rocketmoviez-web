import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketmoviez-api.onrender.com"
  // baseURL: "http://localhost:5000"
})
