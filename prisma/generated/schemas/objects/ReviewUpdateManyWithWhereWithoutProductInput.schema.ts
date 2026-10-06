import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutProductInputObjectSchema as ReviewUncheckedUpdateManyWithoutProductInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutProductInput>;
export const ReviewUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
