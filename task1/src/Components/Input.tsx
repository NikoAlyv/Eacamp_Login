import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/Colors";
interface IInput {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}
const Input: React.FC<IInput> = ({
  setValue,
  value,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.main}>
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: 100,
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Input;
