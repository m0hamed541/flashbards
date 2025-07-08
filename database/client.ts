import { drizzle } from "drizzle-orm/expo-sqlite";
import { migrate } from "drizzle-orm/expo-sqlite/migrator";
import { openDatabaseSync } from "expo-sqlite";

import { addDummyData } from "@/database/addDummyData";
import migrations from "../database/out/migrations";

export const DATABASE_NAME = "flashcards.db";

export const initializeDatabase = async (
  setDbReady: (arg0: boolean) => void,
  setError: (arg0: string) => void
) => {
  try {
    console.log("Initializing database...");
    const expoDb = openDatabaseSync(DATABASE_NAME);
    const db = drizzle(expoDb);

    // Use manual migration instead of useMigrations hook
    await migrate(db, migrations);

    console.log("Migration completed successfully");

    // Add dummy data after successful migration
    await addDummyData(db);

    setDbReady(true);
  } catch (err) {
    console.error("Database initialization error:", err);
    setError(err instanceof Error ? err.message : "Unknown error");
  }
};
