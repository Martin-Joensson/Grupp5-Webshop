import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutProductInputObjectSchema as ReviewUpdateWithoutProductInputObjectSchema } from './ReviewUpdateWithoutProductInput.schema';
import { ReviewUncheckedUpdateWithoutProductInputObjectSchema as ReviewUncheckedUpdateWithoutProductInputObjectSchema } from './ReviewUncheckedUpdateWithoutProductInput.schema';
import { ReviewCreateWithoutProductInputObjectSchema as ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema as ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput>;
export const ReviewUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
