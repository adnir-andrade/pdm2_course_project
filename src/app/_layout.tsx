import { Stack } from 'expo-router';
import '../../global.css'
import {
    useFonts,
    Cinzel_400Regular,
    Cinzel_500Medium,
    Cinzel_600SemiBold,
    Cinzel_700Bold,
    Cinzel_800ExtraBold,
    Cinzel_900Black,
} from '@expo-google-fonts/cinzel';
import {
    CinzelDecorative_400Regular,
    CinzelDecorative_700Bold,
    CinzelDecorative_900Black,
} from '@expo-google-fonts/cinzel-decorative';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
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
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return <Stack />;
}