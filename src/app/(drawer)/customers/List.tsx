import { View, Button, FlatList } from "react-native";
import { Input } from "../../../components/Input";
import { useCallback, useEffect, useState } from "react";
import { useCustomerDatabase } from "src/database/useCustomerDatabase";
import { Customer } from "src/types/Customer";
import { CustomerCard } from "src/components/CustomerCard";
import { Link, useFocusEffect, router } from "expo-router";

export default function Customers() {
    const [search, setSearch] = useState("");
    const [customers, setCustomers] = useState<Customer[]>([]);

    const customerDatabase = useCustomerDatabase();

    useFocusEffect(
        useCallback(() => {
            list();
        }, [])
    );

    useEffect(() => {
        list();
    }, [search]);

    async function list() {
        try {
            const response = await customerDatabase.searchByName(search);
            setCustomers(response);
        } catch (error) {
            console.log(error);
        }
    }

    async function remove(id: number) {
        try {
            await customerDatabase.remove(id);
            await list();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}>
            <Link href="/customers/Create" asChild>
                <Button title="Adicionar"/>
            </Link>

            <Input placeholder="Pesquisar" onChangeText={setSearch} />

            <FlatList
                data={customers}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <CustomerCard 
                        data={item}
                        onDelete={() => remove(item.id)}
                        onPress={() => router.push(`/customers/${item.id}`)}
                    />
                )}
                contentContainerStyle={{ gap: 16 }}
            />
        </View>
    );
}