import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
export const SessionUpsertResultSchema = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
  user: UserSchema.optional()
});