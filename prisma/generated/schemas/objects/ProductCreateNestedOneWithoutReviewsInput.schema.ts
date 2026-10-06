import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductCreateWithoutReviewsInputObjectSchema as ProductCreateWithoutReviewsInputObjectSchema } from './ProductCreateWithoutReviewsInput.schema';
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema as ProductUncheckedCreateWithoutReviewsInputObjectSchema } from './ProductUncheckedCreateWithoutReviewsInput.schema';
import { ProductCreateOrConnectWithoutReviewsInputObjectSchema as ProductCreateOrConnectWithoutReviewsInputObjectSchema } from './ProductCreateOrConnectWithoutReviewsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutReviewsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutReviewsInput>;
export const ProductCreateNestedOneWithoutReviewsInputObjectZodSchema = makeSchema();
