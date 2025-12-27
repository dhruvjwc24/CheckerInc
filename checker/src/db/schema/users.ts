import {
    pgTable,
    uuid,
    text,
  } from "drizzle-orm/pg-core";

import { timestamps } from "../columns.helpers";

export const users = pgTable("users", {
        id: uuid().defaultRandom().primaryKey(),
        firstName: text().notNull(),
        lastName: text().notNull(),
        ...timestamps,
    }    
)