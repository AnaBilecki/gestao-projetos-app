import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";

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