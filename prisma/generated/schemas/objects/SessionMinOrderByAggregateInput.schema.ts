import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  sessionToken: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  expires: SortOrderSchema.optional()
}).strict();
export const SessionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionMinOrderByAggregateInput>;
export const SessionMinOrderByAggregateInputObjectZodSchema = makeSchema();
