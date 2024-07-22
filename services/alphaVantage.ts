import { alphaVantageApiUrlFormater } from "@/helpers";
import { FxDailyModel } from "@/types";
import useSWR from "swr";

export const useFxDailyData = (fromSymbol: string, toSymbol: string) => {
  const { data, mutate, isLoading, isValidating } = useSWR<FxDailyModel>(
    alphaVantageApiUrlFormater(
      `?function=FX_DAILY&from_symbol=${fromSymbol}&to_symbol=${toSymbol}`
    )
  );

  const timeSeries = data && data["Time Series FX (Daily)"];

  const historicalData = timeSeries
    ? Object.keys(timeSeries).map((date) => ({
        date,
        open: timeSeries[date]["1. open"] || "N/A",
        high: timeSeries[date]["2. high"] || "N/A",
        low: timeSeries[date]["3. low"] || "N/A",
        close: timeSeries[date]["4. close"] || "N/A",
      }))
    : [];

  return { data: historicalData, mutate, isLoading, isValidating };
};
