import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  sessionToken: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  expires: SortOrderSchema.optional()
}).strict();
export const SessionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionMaxOrderByAggregateInput>;
export const SessionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
