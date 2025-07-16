import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, StyleSheet, View } from "react-native";

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                drawerLabelStyle: {
                    color: "#9B7E66",
                    fontFamily: "SweetSansProRegular",
                    fontSize: 16,
                },
                drawerActiveTintColor: "#c8af9a",
                drawerInactiveTintColor: "#c8af9a",
                headerTitleStyle: {
                    color: "#9B7E66",
                    fontFamily: "SweetSansProMedium",
                    fontSize: 18,
                    lineHeight: 22,
                    paddingTop: 3,
                },
                headerTintColor: "#9B7E66",
            }}
            drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                    <View style={styles.logoContainer}>
                        <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
                    </View>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            )}
        >
            <Drawer.Screen 
                name="Home"
                options={{ 
                    title: "INÍCIO",   
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }} 
            />
            <Drawer.Screen 
                name="customers/List" 
                options={{
                    title: "CLIENTES",
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="person" size={size} color={color} />
                    ),
                }} 
            />
            <Drawer.Screen name="customers/Create" options={{ title: "NOVO CLIENTE", drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="customers/[id]" options={{ title: "EDITAR CLIENTE", drawerItemStyle: { display: 'none' } }} />
        </Drawer>
    );
}


const styles = StyleSheet.create({
    logoContainer: {
        alignItems: "center",
        padding: 16,
        marginBottom: 8,
        height: 100
    },
    logo: {
        width: 200,
        height: 80,
    },
});