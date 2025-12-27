import {
    pgTable,
    uuid,
    text,
  } from "drizzle-orm/pg-core";

import { timestamps } from "../columns.helpers";
import { users } from "./users";

export const contacts = pgTable("contacts", {
        id: uuid().defaultRandom().primaryKey(),
        userId: uuid().notNull().references(() => users.id),
        firstName: text().notNull(),
        lastName: text().notNull(),
        miscInfo: text(),
        ...timestamps,
    }    
)