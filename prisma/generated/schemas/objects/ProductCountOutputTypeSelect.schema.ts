import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductCountOutputTypeCountReviewsArgsObjectSchema as ProductCountOutputTypeCountReviewsArgsObjectSchema } from './ProductCountOutputTypeCountReviewsArgs.schema'

const makeSchema = () => z.object({
  reviews: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeCountReviewsArgsObjectSchema)]).optional()
}).strict();
export const ProductCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export const ProductCountOutputTypeSelectObjectZodSchema = makeSchema();
