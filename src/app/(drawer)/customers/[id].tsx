import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { Input } from "src/components/Input";
import { useCustomerDatabase } from "src/database/useCustomerDatabase";

export default function Edit() {
    const { id } = useLocalSearchParams();
    const customerDatabase = useCustomerDatabase();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        loadCustomer();
    }, [id]);

    async function loadCustomer() {
        try {
            const customer = await customerDatabase.searchById(Number(id));
            if (customer) {
                setName(customer.name);
                setEmail(customer.email);
                setPhone(customer.phone);
                setCity(customer.city);
                setState(customer.state);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function save() {
        try {
            await customerDatabase.update({
                id: Number(id), name, email, phone, city, state
            });
            
            router.replace("/customers/List");
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
            <Button title="Salvar" onPress={save} />
        </View>
    );
}