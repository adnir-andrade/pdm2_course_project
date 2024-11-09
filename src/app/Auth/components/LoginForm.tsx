import { Alert, View } from "react-native";
import React, { useState } from "react";
import Logo from "../../../common/components/Logo";
import Input from "../../../common/Input";
import Button from "../../../common/components/Button";
import { authenticateUser } from "../services/authService";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInHandler = async () => {
    const { success, message } = await authenticateUser(email, password);

    if (success) {
      console.log(message);
      return;
    }

    Alert.alert(message);
  };

  return (
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
  );
}
