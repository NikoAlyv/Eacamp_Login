import { View, Image, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import Input from "../Components/Input";
import Buttons from "../Components/Buttons";
import { colors } from "../theme/Colors";

const LoginScreen = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const successfully = () => {
    console.log(`UserName:${userName},Password:${password}`);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://eacampschool.com/assets/logos/elshadaghazade-logo.jpg",
        }}
      />
      <View style={styles.body}>
        <View style={styles.leftBody}>
          <Input
            value={userName}
            setValue={setUserName}
            placeholder="Username"
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Buttons
            onPress={successfully}
            style={styles.rightButton}
            text="Hesaba giris"
          />
        </View>
        <View style={styles.rightBody}>
          <Buttons text="İstifadəçi adı və ya parolu unutmusunuz?" />
          <Text>Sizin brauzerdə cookies qəbul etməyə icazə olmalıdır</Text>
          <Text>Bəzi kurslar, ola bilsin ki, qonaqlar üçün açılıb</Text>
          <Buttons style={styles.leftButton} text="Qonaq kimi daxil ol" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    borderWidth: 1,
    gap: 20,
    backgroundColor: colors.lightGrey,
  },
  image: {
    width: "100%",
    height: "50%",
  },

  body: {
    flex: 1,
    gap: 30,
    justifyContent: "center",
    flexDirection: "row",
  },
  leftBody: {
    gap: 8,
  },
  rightBody: {
    width: 150,
    gap: 8,
  },
  rightButton: {
    borderWidth: 1,
    backgroundColor: colors.lightGreen,
    color: colors.white,
  },
  leftButton: {
    borderWidth: 1,
    backgroundColor: colors.white,
    color: colors.black,
  },
});

export default LoginScreen;
