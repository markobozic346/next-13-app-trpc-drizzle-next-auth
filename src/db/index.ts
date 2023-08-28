import Database from "better-sqlite3";

import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import path from "path";

const sqlite = new Database("sqlite.db", {
  fileMustExist: true,
});

export const db = drizzle(sqlite);

export type DBType = typeof db;

migrate(db, { migrationsFolder: "drizzle" });
