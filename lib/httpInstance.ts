import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";

export const getRequest = async <R>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => {
  return await axiosInstance.get(url, config).then((res) => res.data as R);
};
