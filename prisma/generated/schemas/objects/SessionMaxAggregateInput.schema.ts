import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  sessionToken: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  expires: z.literal(true).optional()
}).strict();
export const SessionMaxAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SessionMaxAggregateInputType>;
export const SessionMaxAggregateInputObjectZodSchema = makeSchema();
