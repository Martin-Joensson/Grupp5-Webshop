import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewFindUniqueSchema: z.ZodType<Prisma.ReviewFindUniqueArgs> = z.object({   where: ReviewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewFindUniqueArgs>;

export const ReviewFindUniqueZodSchema = z.object({   where: ReviewWhereUniqueInputObjectSchema }).strict();