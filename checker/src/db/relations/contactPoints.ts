import { relations } from "drizzle-orm";

import { contactPoints } from "../schema/contactPoints";
import { contacts } from "../schema/contacts";

export const contactPointsContacts = relations(contactPoints, ({one}) => ({
    contact: one(contacts, {
        fields: [contactPoints.contactId],
        references: [contacts.id],
    }),
}))