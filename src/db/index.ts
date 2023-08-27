import Database from "better-sqlite3";

import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database("db.sqlite");
export const db = drizzle(sqlite);

export type DBType = typeof db;

migrate(db, { migrationsFolder: "drizzle" });
