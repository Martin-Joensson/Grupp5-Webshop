import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';

export const AccountFindUniqueSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({   where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountFindUniqueArgs>;

export const AccountFindUniqueZodSchema = z.object({   where: AccountWhereUniqueInputObjectSchema }).strict();