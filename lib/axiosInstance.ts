import axios from "axios";

import { ALPHA_VANTAGE_BASE_URL } from "@/constants/api";

export const axiosInstance = axios.create({
  baseURL: ALPHA_VANTAGE_BASE_URL,
  timeout: 5000,
});
