import { View, Text, StyleSheet } from "react-native";

type Props = {
  item: {
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
  };
};

export const HistoricalRow = ({ item }: Props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.date}>Date: {item.date}</Text>
      <Text>Open: {item.open}</Text>
      <Text>High: {item.high}</Text>
      <Text>Low: {item.low}</Text>
      <Text>Close: {item.close}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  date: {
    fontWeight: "bold",
  },
});
