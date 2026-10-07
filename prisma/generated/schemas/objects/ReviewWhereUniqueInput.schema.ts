import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ReviewWhereUniqueInputObjectSchema: z.ZodType<Prisma.ReviewWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewWhereUniqueInput>;
export const ReviewWhereUniqueInputObjectZodSchema = makeSchema();
