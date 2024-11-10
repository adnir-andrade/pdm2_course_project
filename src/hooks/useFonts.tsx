import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Cinzel_400Regular,
  Cinzel_500Medium,
  Cinzel_600SemiBold,
  Cinzel_700Bold,
  Cinzel_800ExtraBold,
  Cinzel_900Black,
} from "@expo-google-fonts/cinzel";
import {
  CinzelDecorative_400Regular,
  CinzelDecorative_700Bold,
  CinzelDecorative_900Black,
} from "@expo-google-fonts/cinzel-decorative";
import {
  GowunBatang_400Regular,
  GowunBatang_700Bold,
} from "@expo-google-fonts/gowun-batang";

SplashScreen.preventAutoHideAsync();

export default function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    Cinzel_400Regular,
    Cinzel_500Medium,
    Cinzel_600SemiBold,
    Cinzel_700Bold,
    Cinzel_800ExtraBold,
    Cinzel_900Black,
    CinzelDecorative_400Regular,
    CinzelDecorative_700Bold,
    CinzelDecorative_900Black,
    GowunBatang_400Regular,
    GowunBatang_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded;
}
