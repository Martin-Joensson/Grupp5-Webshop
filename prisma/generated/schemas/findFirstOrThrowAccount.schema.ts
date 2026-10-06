import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/AccountInclude.schema';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './objects/AccountOrderByWithRelationInput.schema';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';
import { AccountScalarFieldEnumSchema } from './enums/AccountScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerAccountId: z.boolean().optional(),
    refresh_token: z.boolean().optional(),
    access_token: z.boolean().optional(),
    expires_at: z.boolean().optional(),
    token_type: z.boolean().optional(),
    scope: z.boolean().optional(),
    id_token: z.boolean().optional(),
    session_state: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindFirstOrThrowSelectZodSchema = z.object({
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerAccountId: z.boolean().optional(),
    refresh_token: z.boolean().optional(),
    access_token: z.boolean().optional(),
    expires_at: z.boolean().optional(),
    token_type: z.boolean().optional(),
    scope: z.boolean().optional(),
    id_token: z.boolean().optional(),
    session_state: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
  }).strict();

export const AccountFindFirstOrThrowSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({ select: AccountFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountFindFirstOrThrowArgs>;

export const AccountFindFirstOrThrowZodSchema = z.object({ select: AccountFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict();