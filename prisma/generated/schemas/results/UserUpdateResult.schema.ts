import * as z from 'zod';
import { AccountSchema } from '../models/Account.schema';
import { SessionSchema } from '../models/Session.schema';
export const UserUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  emailVerified: z.date().nullable().optional(),
  image: z.string().nullable().optional(),
  passwordHash: z.string().nullable().optional(),
  role: z.unknown(),
  accounts: z.array(AccountSchema).optional(),
  sessions: z.array(SessionSchema).optional()
}));