import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import {
  insertCards,
  insertCategories,
  insertTopics
} from "./crud";

import { cards, categories, topics } from "./dummyData";

export const addDummyData = async (
  db: ExpoSQLiteDatabase,
  forceRefresh: boolean = false
) => {
  try {
    await insertCategories(db, categories);
    await insertTopics(db, topics);
    await insertCards(db, cards);
  } catch (error) {
    console.error("❌ Error adding dummy data:", error);
    throw error;
  }
};
