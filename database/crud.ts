import { asc, eq } from "drizzle-orm";
import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import { Card, cards, categories, Category, Topic, topics } from "./schema";

// CARDS CRUD
export const insertCards = async (
  db: ExpoSQLiteDatabase,
  cardsList: Card[]
) => {
  console.log("inserting cards : ", cardsList.length, " cards");

  try {
    const result = await db.insert(cards).values(cardsList);
    console.log("Cards inserted successfully");
    return result;
  } catch (err) {
    console.error("Error while inserting cards : ", err);
  }
};

export const fetchCards = async (
  db: ExpoSQLiteDatabase,
  fetchAllCards: boolean = true,
  cardId?: number | undefined
) => {
  try {
    if (fetchAllCards) {
      const result = await db.select().from(cards).orderBy(asc(cards.id));
      return result;
    } else if (cardId) {
      const result = await db
        .select()
        .from(cards)
        .where(eq(cards.id, cardId))
        .limit(1);
      return result[0] || null;
    }
    return null;
  } catch (err) {
    console.error("Error while fetching cards : ", err);
  }
};

export const fetchCardsByTopic = async (
  db: ExpoSQLiteDatabase,
  topicId: number
) => {
  try {
    const result = await db
      .select()
      .from(cards)
      .where(eq(cards.topicId, topicId))
      .orderBy(asc(cards.id));
    return result;
  } catch (err) {
    console.error("Error while fetching cards by topic : ", err);
  }
};

// CATEGORIES CRUD
export const insertCategories = async (
  db: ExpoSQLiteDatabase,
  categoriesList: Category[]
) => {
  console.log("inserting categories : ", categoriesList.length, " categories");

  try {
    const result = await db.insert(categories).values(categoriesList);
    console.log("Categories inserted successfully");
    return result;
  } catch (err) {
    console.error("Error while inserting categories : ", err);
    throw err;
  }
};
export const fetchCategories = async (
  db: ExpoSQLiteDatabase,
  fetchAllCategories: boolean = true,
  categoryId?: number | undefined
) => {
  try {
    if (fetchAllCategories) {
      const result = await db
        .select()
        .from(categories)
        .orderBy(asc(categories.id));
      return result;
    } else if (categoryId) {
      const result = await db
        .select()
        .from(categories)
        .where(eq(categories.id, categoryId))
        .limit(1);
      return result[0] || null;
    }
    return null;
  } catch (err) {
    console.error("Error while fetching categories : ", err);
    throw err;
  }
};

// TOPICS CRUD
export const insertTopics = async (
  db: ExpoSQLiteDatabase,
  topicsList: Topic[]
) => {
  console.log("inserting topics : ", topicsList.length, " topics");

  try {
    const result = await db.insert(topics).values(topicsList);
    console.log("Topics inserted successfully");
    return result;
  } catch (err) {
    console.error("Error while inserting topics : ", err);
    throw err;
  }
};
export const fetchTopics = async (
  db: ExpoSQLiteDatabase,
  limit: number = 10,
  topicId?: number | undefined
) => {
  try {
    if (topicId) {
      const result = await db
        .select()
        .from(topics)
        .where(eq(topics.id, topicId))
        .limit(1);
      console.log(result[0]);
      return result[0] || null;
    }
    const result = await db.select().from(topics).orderBy(asc(topics.id)).limit(limit);
    console.log('fetched topics : ', result.length, " topics");
    return result;
  } catch (err) {
    console.error("Error while fetching topics : ", err);
    throw err;
  }
};
