import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';

export const AccountDeleteOneSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({   where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountDeleteArgs>;

export const AccountDeleteOneZodSchema = z.object({   where: AccountWhereUniqueInputObjectSchema }).strict();