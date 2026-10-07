import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { VerificationTokenWhereUniqueInputObjectSchema as VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema';

export const VerificationTokenDeleteOneSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({   where: VerificationTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationTokenDeleteArgs>;

export const VerificationTokenDeleteOneZodSchema = z.object({   where: VerificationTokenWhereUniqueInputObjectSchema }).strict();