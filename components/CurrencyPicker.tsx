import { currencies } from "@/constants/currencies";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

type Props = {
  selectedValue: any;
  onValueChange: (value: any) => void;
};

export const CurrencyPicker = (props: Props) => {
  return (
    <Picker {...props} style={styles.picker}>
      {currencies.map((currency) => (
        <Picker.Item key={currency} label={currency} value={currency} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    flex: 1,
  },
});
