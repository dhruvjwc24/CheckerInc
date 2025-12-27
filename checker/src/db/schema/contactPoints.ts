import {
    pgTable,
    uuid,
    text,
  } from "drizzle-orm/pg-core";

import { timestamps } from "../columns.helpers";
import { contacts } from "./contacts";

export const contactPoints = pgTable("contactPoints", {
    id: uuid().defaultRandom().primaryKey(),
    contactId: uuid().notNull().references(() => contacts.id),
    contactLink: text().notNull(),
    contactCategory: text().notNull(),
    contactClient: text().notNull(),
    ...timestamps,
})