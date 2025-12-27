import { relations } from "drizzle-orm";

import { contacts } from "../schema/contacts";
import { users } from "../schema/users";
import { contactPoints } from "../schema/contactPoints";
import { publicContexts } from "../schema/publicContexts";

export const contactsUsers = relations(contacts, ({one}) => ({
    user: one(users, {
        fields: [contacts.userId],
        references: [users.id],
    }),
}))

export const contactsContactPoints = relations(contacts, ({many}) => ({
    contactPoints: many(contactPoints),
}))

export const contactsPublicContexts = relations(contacts, ({one}) => ({
    publicContext: one(publicContexts),
}))