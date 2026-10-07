import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewDeleteOneSchema: z.ZodType<Prisma.ReviewDeleteArgs> = z.object({   where: ReviewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewDeleteArgs>;

export const ReviewDeleteOneZodSchema = z.object({   where: ReviewWhereUniqueInputObjectSchema }).strict();