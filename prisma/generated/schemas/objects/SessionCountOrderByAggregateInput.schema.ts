import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  sessionToken: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  expires: SortOrderSchema.optional()
}).strict();
export const SessionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCountOrderByAggregateInput>;
export const SessionCountOrderByAggregateInputObjectZodSchema = makeSchema();
