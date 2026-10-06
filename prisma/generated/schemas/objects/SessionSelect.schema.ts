import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const SessionSelectObjectSchema: z.ZodType<Prisma.SessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SessionSelect>;
export const SessionSelectObjectZodSchema = makeSchema();
