import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.coerce.number().int().optional()
}).strict();
export const ProductWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductWhereUniqueInput>;
export const ProductWhereUniqueInputObjectZodSchema = makeSchema();
