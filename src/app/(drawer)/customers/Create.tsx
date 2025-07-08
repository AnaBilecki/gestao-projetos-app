import { View, Button, Alert } from "react-native";
import { useState } from "react";
import { Input } from "src/components/Input";
import { useCustomerDatabase } from "src/database/useCustomerDatabase";
import { router } from "expo-router";

export default function NewCustomer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const customerDatabase = useCustomerDatabase();

    async function salvar() {
        try {
            await customerDatabase.create({ name, email, phone, city, state });
            router.replace("/customers");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, padding: 32, gap: 16 }}>
            <Input placeholder="Nome" onChangeText={setName} value={name} />
            <Input placeholder="Email" onChangeText={setEmail} value={email} />
            <Input placeholder="Telefone" onChangeText={setPhone} value={phone} />
            <Input placeholder="Cidade" onChangeText={setCity} value={city} />
            <Input placeholder="Estado" onChangeText={setState} value={state} />
            <Button title="Salvar" onPress={salvar} />
        </View>
    );
}