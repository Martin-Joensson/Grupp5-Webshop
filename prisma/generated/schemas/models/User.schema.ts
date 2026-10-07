import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  passwordHash: z.string().nullish(),
  role: RoleSchema.default("USER"),
});

export type UserType = z.infer<typeof UserSchema>;
