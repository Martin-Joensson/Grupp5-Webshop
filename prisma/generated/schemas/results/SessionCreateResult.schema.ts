import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
export const SessionCreateResultSchema = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
  user: UserSchema.optional()
});