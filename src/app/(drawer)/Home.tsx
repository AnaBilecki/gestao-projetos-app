import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32, 
        gap: 16,
        backgroundColor: "#ece9dd",
    },
});