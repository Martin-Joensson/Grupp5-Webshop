import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    passwordHash: z.string().optional().nullable(),
    role: RoleSchema,
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
