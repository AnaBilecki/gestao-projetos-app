import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            city TEXT,
            state TEXT,
            email TEXT,
            phone TEXT
        );

        CREATE TABLE IF NOT EXISTS steps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT
        );
    `);
}