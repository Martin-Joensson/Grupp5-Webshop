import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutReviewsInputObjectSchema as ProductCreateWithoutReviewsInputObjectSchema } from './ProductCreateWithoutReviewsInput.schema';
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema as ProductUncheckedCreateWithoutReviewsInputObjectSchema } from './ProductUncheckedCreateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutReviewsInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutReviewsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutReviewsInput>;
export const ProductCreateOrConnectWithoutReviewsInputObjectZodSchema = makeSchema();
