import * as z from 'zod';
import { UserSchema } from '../models/User.schema';
export const SessionFindManyResultSchema = z.object({
  data: z.array(z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
  user: UserSchema.optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});