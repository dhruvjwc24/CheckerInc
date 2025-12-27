import { relations } from "drizzle-orm";

import { publicContexts } from "../schema/publicContexts";
import { contacts } from "../schema/contacts";

export const publicContextsContacts = relations(publicContexts, ({ one }) => ({
    contact: one(contacts, {
        fields: [publicContexts.contactId],
        references: [contacts.id],
    }),
}));

