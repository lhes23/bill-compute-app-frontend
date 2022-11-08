import axios, { AxiosInstance } from "axios"

const client: AxiosInstance = axios.create({
  // baseURL: "http://localhost:8000/api/"
  baseURL: "http://192.168.100.30:8000/api/"
})

export default client
