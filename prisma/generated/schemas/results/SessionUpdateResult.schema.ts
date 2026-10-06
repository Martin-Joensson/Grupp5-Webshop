import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
export const SessionUpdateResultSchema = z.nullable(z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
  user: UserSchema.optional()
}));