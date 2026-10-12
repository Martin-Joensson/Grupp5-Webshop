import * as z from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['sessionToken', 'userId', 'expires'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;