import * as z from 'zod';
// prettier-ignore
export const SessionModelSchema = z.object({
    sessionToken: z.string(),
    userId: z.string(),
    expires: z.date(),
    user: z.unknown()
}).strict();

export type SessionPureType = z.infer<typeof SessionModelSchema>;
