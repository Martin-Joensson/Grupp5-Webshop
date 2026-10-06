import * as z from 'zod';
export const SessionGroupByResultSchema = z.array(z.object({
  sessionToken: z.string().optional(),
  userId: z.string().optional(),
  expires: z.date().optional(),
  _count: z.union([z.number(), z.object({
    sessionToken: z.number().optional(),
    userId: z.number().optional(),
    expires: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _min: z.object({
    sessionToken: z.string().nullable().optional(),
    userId: z.string().nullable().optional(),
    expires: z.date().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    sessionToken: z.string().nullable().optional(),
    userId: z.string().nullable().optional(),
    expires: z.date().nullable().optional()
  }).nullable().optional()
}));