import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { VerificationTokenSelectObjectSchema as VerificationTokenSelectObjectSchema } from './objects/VerificationTokenSelect.schema';
import { VerificationTokenUpdateManyMutationInputObjectSchema as VerificationTokenUpdateManyMutationInputObjectSchema } from './objects/VerificationTokenUpdateManyMutationInput.schema';
import { VerificationTokenWhereInputObjectSchema as VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema';

export const VerificationTokenUpdateManyAndReturnSchema: z.ZodType<Prisma.VerificationTokenUpdateManyAndReturnArgs> = z.object({ select: VerificationTokenSelectObjectSchema.optional(), data: VerificationTokenUpdateManyMutationInputObjectSchema, where: VerificationTokenWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationTokenUpdateManyAndReturnArgs>;

export const VerificationTokenUpdateManyAndReturnZodSchema = z.object({ select: VerificationTokenSelectObjectSchema.optional(), data: VerificationTokenUpdateManyMutationInputObjectSchema, where: VerificationTokenWhereInputObjectSchema.optional() }).strict();