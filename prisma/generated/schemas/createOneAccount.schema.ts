import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { AccountUncheckedCreateInputObjectSchema as AccountUncheckedCreateInputObjectSchema } from './objects/AccountUncheckedCreateInput.schema';

export const AccountCreateOneSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({   data: AccountUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountCreateArgs>;

export const AccountCreateOneZodSchema = z.object({   data: AccountUncheckedCreateInputObjectSchema }).strict();