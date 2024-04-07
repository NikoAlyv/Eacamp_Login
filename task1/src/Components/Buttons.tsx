import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
interface IButton {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void | undefined;
}
const Button: React.FC<IButton> = ({ text, style, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, style]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "red",
  },
});

export default Button;
