import axios from "axios"

export const api = axios.create({
  baseURL: (import.meta.env.APP_ENV == 'development')
    ? "http://localhost:5000"
    : "https://rocketmoviez-api.fly.dev"

})
