import axios, { AxiosInstance } from "axios"

const client: AxiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_LOCAL_HOST}:${process.env.REACT_APP_BACK_PORT}/api/`
})

export default client
