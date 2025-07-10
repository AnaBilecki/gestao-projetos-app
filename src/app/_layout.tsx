import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "../database/initializeDatabase";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        SweetSansProRegular: require("../../assets/fonts/SweetSansProRegular.otf"),
        SweetSansProMedium: require("../../assets/fonts/SweetSansProMedium.otf"),
        SweetSansProHeavy: require("../../assets/fonts/SweetSansProHeavy.otf"),
    });

    useEffect(() => {
        async function hideSplash() {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }
        hideSplash();
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <SQLiteProvider databaseName="gestaoProjeto.db" onInit={initializeDatabase}>
            <View style={styles.container}>
                <Slot />
            </View>
        </SQLiteProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8d0d0"
    }
});