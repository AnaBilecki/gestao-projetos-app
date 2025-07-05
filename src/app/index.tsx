import { View, Button, Alert, FlatList } from "react-native";
import { Input } from "../components/Input";
import { useEffect, useState } from "react";
import { useCustomerDatabase } from "src/database/useCustomerDatabase";
import { Customer } from "src/types/Customer";
import { CustomerCard } from "src/components/CustomerCard";

export default function Index() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [search, setSearch] = useState("");
    const [customers, setCustumers] = useState<Customer[]>([]);

    const customerDatabase = useCustomerDatabase();

    useEffect(() => {
        list();
    }, [search]);

    async function create() {
        try {
            await customerDatabase.create({ name, email, phone, city, state });
            list();
            Alert.alert("Cliente cadastrado com sucesso!");
        } catch (error) {
            console.log(error);
        }
    }

    async function list() {
        try {
            const response = await customerDatabase.searchByName(search);
            setCustumers(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}>
            <Input placeholder="Nome" onChangeText={setName} value={name} />
            <Input placeholder="Email" onChangeText={setEmail} value={email} />
            <Input placeholder="Telefone" onChangeText={setPhone} value={phone} />
            <Input placeholder="Cidade" onChangeText={setCity} value={city} />
            <Input placeholder="Estado" onChangeText={setState} value={state} />

            <Button title="Salvar" onPress={create} />

            <Input placeholder="Pesquisar" onChangeText={setSearch} />

            <FlatList
                data={customers}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <CustomerCard data={item} />
                )}
                contentContainerStyle={{ gap: 16 }}
            />
        </View>
    );
}