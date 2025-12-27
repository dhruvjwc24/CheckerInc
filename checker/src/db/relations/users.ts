import { relations } from "drizzle-orm";

import { users } from "../schema/users";
import { contacts } from "../schema/contacts";

export const usersContacts = relations(users, ({many}) => ({
    contacts: many(contacts),
}))