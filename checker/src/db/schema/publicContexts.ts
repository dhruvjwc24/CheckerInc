import {
    pgTable,
    uuid,
    text,
  } from "drizzle-orm/pg-core";

import { timestamps } from "../columns.helpers";
import { contacts } from "./contacts";

export const publicContexts = pgTable("publicContexts", {
    id: uuid().defaultRandom().primaryKey(),
    contactId: uuid().notNull().unique().references(() => contacts.id),
    bio: text(),
    ...timestamps,
})