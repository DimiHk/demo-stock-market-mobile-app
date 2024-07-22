import { ALPHA_VANTAGE_API_KEY } from "@/constants/api";

export const alphaVantageApiUrlFormater = (url: string) => {
  const concatedUrl = url + "&apikey=" + ALPHA_VANTAGE_API_KEY;
  return concatedUrl;
};
