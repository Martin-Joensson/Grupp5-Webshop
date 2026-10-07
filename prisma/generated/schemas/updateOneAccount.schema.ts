import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { AccountUpdateInputObjectSchema as AccountUpdateInputObjectSchema } from './objects/AccountUpdateInput.schema';
import { AccountUncheckedUpdateInputObjectSchema as AccountUncheckedUpdateInputObjectSchema } from './objects/AccountUncheckedUpdateInput.schema';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';

export const AccountUpdateOneSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({   data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountUpdateArgs>;

export const AccountUpdateOneZodSchema = z.object({   data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict();