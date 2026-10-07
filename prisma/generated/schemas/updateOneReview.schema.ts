import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ReviewUpdateInputObjectSchema as ReviewUpdateInputObjectSchema } from './objects/ReviewUpdateInput.schema';
import { ReviewUncheckedUpdateInputObjectSchema as ReviewUncheckedUpdateInputObjectSchema } from './objects/ReviewUncheckedUpdateInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewUpdateOneSchema: z.ZodType<Prisma.ReviewUpdateArgs> = z.object({   data: z.union([ReviewUpdateInputObjectSchema, ReviewUncheckedUpdateInputObjectSchema]), where: ReviewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewUpdateArgs>;

export const ReviewUpdateOneZodSchema = z.object({   data: z.union([ReviewUpdateInputObjectSchema, ReviewUncheckedUpdateInputObjectSchema]), where: ReviewWhereUniqueInputObjectSchema }).strict();