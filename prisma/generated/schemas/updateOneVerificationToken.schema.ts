import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { VerificationTokenUpdateInputObjectSchema as VerificationTokenUpdateInputObjectSchema } from './objects/VerificationTokenUpdateInput.schema';
import { VerificationTokenUncheckedUpdateInputObjectSchema as VerificationTokenUncheckedUpdateInputObjectSchema } from './objects/VerificationTokenUncheckedUpdateInput.schema';
import { VerificationTokenWhereUniqueInputObjectSchema as VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema';

export const VerificationTokenUpdateOneSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({   data: z.union([VerificationTokenUpdateInputObjectSchema, VerificationTokenUncheckedUpdateInputObjectSchema]), where: VerificationTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationTokenUpdateArgs>;

export const VerificationTokenUpdateOneZodSchema = z.object({   data: z.union([VerificationTokenUpdateInputObjectSchema, VerificationTokenUncheckedUpdateInputObjectSchema]), where: VerificationTokenWhereUniqueInputObjectSchema }).strict();