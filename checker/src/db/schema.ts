import {
    pgTable,
    uuid,
    text,
    timestamp,
    jsonb,
  } from "drizzle-orm/pg-core";
  import { relations } from "drizzle-orm";
  
  /* =======================
     USER
  ======================= */
  export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(),
    email: text("email").notNull().unique(),
    name: text("name"),
    createdAt: timestamp("created_at").defaultNow(),
  });
  
  /* =======================
     CONTACT
  ======================= */
  export const contacts = pgTable("contacts", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    miscInfo: jsonb("misc_info"),
    createdAt: timestamp("created_at").defaultNow(),
  });
  
  /* =======================
     INTERACTION
  ======================= */
  export const interactions = pgTable("interactions", {
    id: uuid("id").defaultRandom().primaryKey(),
    contactId: uuid("contact_id")
      .notNull()
      .references(() => contacts.id, { onDelete: "cascade" }),
  
    occurredAt: timestamp("occurred_at").notNull(),
    location: text("location"),
    circumstance: text("circumstance"),
    personalNotes: text("personal_notes"),
    businessNotes: text("business_notes"),
    metadata: jsonb("metadata"),
  
    createdAt: timestamp("created_at").defaultNow(),
  });
  
  /* =======================
     RELATIONS (Drizzle-only)
  ======================= */
  export const userRelations = relations(users, ({ many }) => ({
    contacts: many(contacts),
  }));
  
  export const contactRelations = relations(contacts, ({ one, many }) => ({
    user: one(users, {
      fields: [contacts.userId],
      references: [users.id],
    }),
    interactions: many(interactions),
  }));