import { Alert, View } from "react-native";
import React, { useState } from "react";
import Input from "../../../../common/components/Input";
import Button from "../../../../common/components/Button";
import { attemptLogin } from "../services/authService";
import { useRouter } from "expo-router";
import useUserState from "../../../../states/useUserState";
import { userLoginSchema } from "../../../../schemas/User";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserState();

  const router = useRouter();

  const logInHandler = async () => {
    const result = userLoginSchema.safeParse({ email, password });

    if (!result.success) {
      Alert.alert(
        "Ops!",
        result.error.errors.map((err) => err.message).join("\n"),
      );
      return;
    }

    const response = await attemptLogin(email, password);

    if (response.success) {
      login(response.user.username, response.token);
      router.dismissAll();
      router.replace("_navigation/");
    } else {
      Alert.alert(response.message, `\n Email or Password incorrect.`);
    }
  };

  return (
    <View className="basis-4/6 w-full px-7 shrink">
      <View className={`mb-10`}>
        <Input
          label="E-mail"
          textContentType={"emailAddress"}
          value={email}
          onChangeText={setEmail}
          autoCapitalize={"none"}
        />
      </View>
      <View>
        <Input
          label="Password"
          textContentType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View className="w-full mt-12">
        <Button.Slim title="LOG IN" onPress={logInHandler} />
      </View>
    </View>
  );
}
