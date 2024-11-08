import { Text, View } from "react-native";
import Button from "../components/Button";

export default function Home() {
  const buttonFunction = () => {
    console.log("click");
  };

  return (
    <>
      <View className="flex-1 pt-36 bg-slate-900">
        <View className="w-full h-36 flex items-center justify-center">
          <Text className="py-11 text-themys-tussock text-8xl font-cinzel-decorative-bold text-shadow">
            Themys
          </Text>
        </View>
        <View className="self-center mt-20 gap-16">
          <Button title="Sign In" onPress={buttonFunction} />
          <Button title="Log In" onPress={buttonFunction} />
        </View>
      </View>
    </>
  );
}
