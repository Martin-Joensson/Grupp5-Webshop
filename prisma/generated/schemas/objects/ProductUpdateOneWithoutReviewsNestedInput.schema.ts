import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ProductCreateWithoutReviewsInputObjectSchema as ProductCreateWithoutReviewsInputObjectSchema } from './ProductCreateWithoutReviewsInput.schema';
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema as ProductUncheckedCreateWithoutReviewsInputObjectSchema } from './ProductUncheckedCreateWithoutReviewsInput.schema';
import { ProductCreateOrConnectWithoutReviewsInputObjectSchema as ProductCreateOrConnectWithoutReviewsInputObjectSchema } from './ProductCreateOrConnectWithoutReviewsInput.schema';
import { ProductUpsertWithoutReviewsInputObjectSchema as ProductUpsertWithoutReviewsInputObjectSchema } from './ProductUpsertWithoutReviewsInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutReviewsInputObjectSchema as ProductUpdateToOneWithWhereWithoutReviewsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutReviewsInput.schema';
import { ProductUpdateWithoutReviewsInputObjectSchema as ProductUpdateWithoutReviewsInputObjectSchema } from './ProductUpdateWithoutReviewsInput.schema';
import { ProductUncheckedUpdateWithoutReviewsInputObjectSchema as ProductUncheckedUpdateWithoutReviewsInputObjectSchema } from './ProductUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutReviewsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProductWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProductWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutReviewsInputObjectSchema), z.lazy(() => ProductUpdateWithoutReviewsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutReviewsInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneWithoutReviewsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneWithoutReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneWithoutReviewsNestedInput>;
export const ProductUpdateOneWithoutReviewsNestedInputObjectZodSchema = makeSchema();
