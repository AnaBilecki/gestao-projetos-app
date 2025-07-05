import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "../database/initializeDatabase";
import { Slot } from "expo-router";

export default function Layout() {
    return (
        <SQLiteProvider databaseName="gestaoProjeto.db" onInit={initializeDatabase}>
            <Slot />
        </SQLiteProvider>
    );
}