import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { VerificationTokenSelectObjectSchema as VerificationTokenSelectObjectSchema } from './objects/VerificationTokenSelect.schema';
import { VerificationTokenCreateManyInputObjectSchema as VerificationTokenCreateManyInputObjectSchema } from './objects/VerificationTokenCreateManyInput.schema';

export const VerificationTokenCreateManyAndReturnSchema: z.ZodType<Prisma.VerificationTokenCreateManyAndReturnArgs> = z.object({ select: VerificationTokenSelectObjectSchema.optional(), data: z.union([ VerificationTokenCreateManyInputObjectSchema, z.array(VerificationTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VerificationTokenCreateManyAndReturnArgs>;

export const VerificationTokenCreateManyAndReturnZodSchema = z.object({ select: VerificationTokenSelectObjectSchema.optional(), data: z.union([ VerificationTokenCreateManyInputObjectSchema, z.array(VerificationTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();