import { Alert, View } from "react-native";
import React, { useState } from "react";
import Background from "../../../common/components/Background";
import Watermark from "../../../common/components/Watermark";
import Logo from "../../../common/components/Logo";
import Input from "../../../common/Input";
import Button from "../../../common/components/Button";
import { users } from "../../../mocks/MOCK_USER";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const findUserByEmail = (email: string) => {
    console.log(email);
    return users.find((user) => user.email === email);
  };

  const checkPassword = (userPassword: string, inputPassword: string) => {
    return userPassword === inputPassword;
  };

  const logInHandler = async () => {
    const user = findUserByEmail(email);

    if (!user) {
      Alert.alert("Email not found!");
      return;
    }

    const isPasswordCorrect = checkPassword(user.password, password);

    if (!isPasswordCorrect) {
      Alert.alert("Incorrect password");
      return;
    }

    console.log("Log in successful!");
  };

  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Background.Transparent>
          <View className="flex flex-col">
            <View className="basis-1/6 justify-center items-center">
              <Logo />
            </View>
            <View className="basis-4/6 justify-center items-center gap-10 w-full px-7">
              <Input
                label="E-mail"
                textContentType={"emailAddress"}
                value={email}
                onChangeText={setEmail}
                autoCapitalize={"none"}
              />
              <Input
                label="Password"
                textContentType="password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <View className="w-full mt-24">
                <Button.Slim title="LOG IN" onPress={logInHandler} />
              </View>
            </View>
            <View className="basis-1/6 justify-center items-center"></View>
          </View>
        </Background.Transparent>
      </View>
    </Background>
  );
}
