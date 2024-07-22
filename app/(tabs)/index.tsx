import { currencies } from "@/constants/currencies";
import { useFxDailyData } from "@/services/alphaVantage";
import React, { useCallback, useState } from "react";
import { CurrencyPicker } from "@/components/CurrencyPicker";
import { HistoricalRow } from "@/components/HistoricalRow";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  FlatList,
  View,
  RefreshControl,
} from "react-native";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const [fromCurrency, setFromCurrency] = useState(currencies[0]);

  const [toCurrency, setToCurrency] = useState(currencies[1]);

  const { data, mutate, isLoading, isValidating } = useFxDailyData(
    fromCurrency,
    toCurrency
  );

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await mutate();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text>From:</Text>
        <CurrencyPicker
          selectedValue={fromCurrency}
          onValueChange={(itemValue) => setFromCurrency(itemValue)}
        />
        <Text>To:</Text>
        <CurrencyPicker
          selectedValue={toCurrency}
          onValueChange={(itemValue) => setToCurrency(itemValue)}
        />
        <Button
          disabled={isLoading || isValidating}
          title={"Refresh"}
          onPress={handleRefresh}
        />
        <FlatList
          data={data}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => <HistoricalRow item={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  mainContainer: {
    padding: 6,
  },
});
