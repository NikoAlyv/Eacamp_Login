import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
interface IInput {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
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
        placeholderTextColor={"white"}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
    width: 100,
    paddingVertical: 5,
  },
});

export default Input;
