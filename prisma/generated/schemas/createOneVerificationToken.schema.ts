import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { VerificationTokenUncheckedCreateInputObjectSchema as VerificationTokenUncheckedCreateInputObjectSchema } from './objects/VerificationTokenUncheckedCreateInput.schema';

export const VerificationTokenCreateOneSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({   data: VerificationTokenUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VerificationTokenCreateArgs>;

export const VerificationTokenCreateOneZodSchema = z.object({   data: VerificationTokenUncheckedCreateInputObjectSchema }).strict();