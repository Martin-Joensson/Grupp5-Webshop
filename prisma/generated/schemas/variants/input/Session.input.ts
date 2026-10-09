import * as z from 'zod';
// prettier-ignore
export const SessionInputSchema = z.object({
    sessionToken: z.string(),
    userId: z.string(),
    expires: z.coerce.date(),
    user: z.unknown()
}).strict();

export type SessionInputType = z.infer<typeof SessionInputSchema>;
