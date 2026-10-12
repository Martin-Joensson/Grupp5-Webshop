import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'passwordHash', 'role'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;