import { AxiosResponse } from "axios";
import axios from "../config/axiosConfig";

import { IfetchLotrItems } from "../config/types";

export const fetchLotrItems: IfetchLotrItems["fetchLotrItems"] = async (
  queryType,
  limit = 6,
  page = 1,
  offset = 0
) => {
  try {
    const url = `${queryType}?limit=${limit}&page=${page}&offset=${offset}`;
    const response: AxiosResponse = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
