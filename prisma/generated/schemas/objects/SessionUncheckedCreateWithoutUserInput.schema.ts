import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();
export const SessionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput>;
export const SessionUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
