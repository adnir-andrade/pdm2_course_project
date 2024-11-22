import { Alert, View } from "react-native";
import React, { useState } from "react";
import Input from "../../../../common/components/Input";
import Button from "../../../../common/components/Button";
import { authenticateUser } from "../services/authService";
import { useRouter } from "expo-router";
import useUserState from "../../../../states/useUserState";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserState();

  const router = useRouter();

  const logInHandler = async () => {
    const { success, message, user, token } = await authenticateUser(
      email,
      password,
    );

    if (success) {
      login(user!.username, token!);
      router.dismissAll();
      router.replace("_navigation/");
      return;
    }

    Alert.alert(message);
  };

  return (
    <View className="basis-4/6 centralized gap-10 w-full px-7 shrink">
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
      <View className="w-full mt-12">
        <Button.Slim title="LOG IN" onPress={logInHandler} />
      </View>
    </View>
  );
}
