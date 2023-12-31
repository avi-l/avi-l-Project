import axios, { AxiosInstance } from "axios";
import { lotr_key } from "./apikey";

const instance: AxiosInstance = axios.create({
  baseURL: "https://the-one-api.dev/v2",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${lotr_key}`,
  },
  // to use the backend api delete the above and uncomment this:
  //  baseURL: "http://localhost:3000",
});

export default instance;
