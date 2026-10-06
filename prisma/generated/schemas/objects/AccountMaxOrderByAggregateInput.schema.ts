import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  provider: SortOrderSchema.optional(),
  providerAccountId: SortOrderSchema.optional(),
  refresh_token: SortOrderSchema.optional(),
  access_token: SortOrderSchema.optional(),
  expires_at: SortOrderSchema.optional(),
  token_type: SortOrderSchema.optional(),
  scope: SortOrderSchema.optional(),
  id_token: SortOrderSchema.optional(),
  session_state: SortOrderSchema.optional()
}).strict();
export const AccountMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountMaxOrderByAggregateInput>;
export const AccountMaxOrderByAggregateInputObjectZodSchema = makeSchema();
