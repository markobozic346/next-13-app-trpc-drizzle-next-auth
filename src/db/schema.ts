import { sqliteTable } from "drizzle-orm/sqlite-core";

export const todo = sqliteTable("todos", {});
