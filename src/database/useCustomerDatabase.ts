import { useSQLiteContext } from "expo-sqlite";
import { Customer } from "src/types/Customer";

export function useCustomerDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<Customer, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO customers (name, email, phone, city, state) VALUES ($name, $email, $phone, $city, $state)"
        );

        try {
            await statement.executeAsync({
                $name: data.name,
                $email: data.email,
                $phone: data.phone,
                $city: data.city,
                $state: data.state
            });
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function searchByName(name: string) {
        try {
            const query = "SELECT * FROM customers WHERE name LIKE ?";

            const response = await database.getAllAsync<Customer>(
                query,
                `%${name}%`
            );

            return response;
        } catch (error) {
            throw error;
        }
    }

    async function remove(id: number) {
        try {
            await database.execAsync("DELETE FROM customers WHERE id = "+ id);
        } catch (error) {
            throw error;
        }
    }

    return { create, searchByName, remove }
}