import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { ReviewCreateWithoutProductInputObjectSchema as ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema as ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema';
import { ReviewCreateOrConnectWithoutProductInputObjectSchema as ReviewCreateOrConnectWithoutProductInputObjectSchema } from './ReviewCreateOrConnectWithoutProductInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema as ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutProductInput.schema';
import { ReviewCreateManyProductInputEnvelopeObjectSchema as ReviewCreateManyProductInputEnvelopeObjectSchema } from './ReviewCreateManyProductInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema as ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutProductInput.schema';
import { ReviewUpdateManyWithWhereWithoutProductInputObjectSchema as ReviewUpdateManyWithWhereWithoutProductInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutProductInput.schema';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutProductInputObjectSchema), z.lazy(() => ReviewCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => ReviewUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithoutProductNestedInput>;
export const ReviewUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();
