import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutProductInputObjectSchema as ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema as ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutProductInput>;
export const ReviewCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
