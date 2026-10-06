import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  sessionToken: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  expires: z.literal(true).optional()
}).strict();
export const SessionMinAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SessionMinAggregateInputType>;
export const SessionMinAggregateInputObjectZodSchema = makeSchema();
