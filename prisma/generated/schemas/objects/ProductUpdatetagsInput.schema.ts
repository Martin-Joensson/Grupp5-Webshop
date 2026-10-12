import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProductUpdatetagsInputObjectSchema: z.ZodType<Prisma.ProductUpdatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdatetagsInput>;
export const ProductUpdatetagsInputObjectZodSchema = makeSchema();
