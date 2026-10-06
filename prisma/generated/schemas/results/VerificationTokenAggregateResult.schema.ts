import * as z from 'zod';
export const VerificationTokenAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    identifier: z.number().optional(),
    token: z.number().optional(),
    expires: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _min: z.object({
    identifier: z.string().nullable().optional(),
    token: z.string().nullable().optional(),
    expires: z.date().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    identifier: z.string().nullable().optional(),
    token: z.string().nullable().optional(),
    expires: z.date().nullable().optional()
  }).nullable().optional()});