import {
    integer,numeric,pgTable,serial,varchar
} from 'drizzle-orm/pg-core';

import { Icon } from 'lucide-react';

export const Budgets = pgTable('budgets', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdBy').notNull(),
});

export const Incomes = pgTable('incomes', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdBy').notNull(),
});

export const Expenses = pgTable('expenses', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    budgetId: integer('budgetId').references(() => Budgets.id), 
    createdAt: varchar("createdAt").notNull(),
});