import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ReviewCreateWithoutProductInputObjectSchema as ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema as ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema';
import { ReviewCreateOrConnectWithoutProductInputObjectSchema as ReviewCreateOrConnectWithoutProductInputObjectSchema } from './ReviewCreateOrConnectWithoutProductInput.schema';
import { ReviewCreateManyProductInputEnvelopeObjectSchema as ReviewCreateManyProductInputEnvelopeObjectSchema } from './ReviewCreateManyProductInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutProductInputObjectSchema), z.lazy(() => ReviewCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyProductInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutProductInput>;
export const ReviewUncheckedCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
