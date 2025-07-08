import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description"),
  color: text("color").default("#2196F3"),
  icon: text("icon")
});

export const topics = sqliteTable("topics", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  color: text("color").default("#2196F3"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const cards = sqliteTable("cards", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  topicId: integer("topic_id")
    .notNull()
    .references(() => topics.id, { onDelete: "cascade" }),
  concept: text("concept").notNull(),
  description: text("description"),
  //tags: text("tags"), // JSON array stored as text
  //isAiGenerated: boolean("is_ai_generated").default(true),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

// Export types for TypeScript
export type Category = typeof categories.$inferInsert;
export type Topic = typeof topics.$inferInsert;
export type Card = typeof cards.$inferInsert;

// Types for select operations
export type CategorySelect = typeof categories.$inferSelect;
export type TopicSelect = typeof topics.$inferSelect;
export type CardSelect = typeof cards.$inferSelect;