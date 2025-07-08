import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
    return (
        <Drawer>
            <Drawer.Screen name="Home" options={{ title: "Home" }} />
            <Drawer.Screen name="customers/List" options={{ title: "Clientes" }} />
            <Drawer.Screen name="customers/Create" options={{ title: "Novo cliente", drawerItemStyle: { display: 'none' } }} />
        </Drawer>
    );
}