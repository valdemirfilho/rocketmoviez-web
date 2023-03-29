import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:5000"
    : "https://rocketmoviez-api.fly.dev"
  // : "https://rocketmoviez-api-production.up.railway.app"
})

