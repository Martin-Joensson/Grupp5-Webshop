import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    passwordHash: z.string().nullable(),
    role: RoleSchema,
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
