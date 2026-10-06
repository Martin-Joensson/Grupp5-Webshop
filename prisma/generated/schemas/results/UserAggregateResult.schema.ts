import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    name: z.number().optional(),
    email: z.number().optional(),
    emailVerified: z.number().optional(),
    image: z.number().optional(),
    passwordHash: z.number().optional(),
    role: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _min: z.object({
    id: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    emailVerified: z.date().nullable().optional(),
    image: z.string().nullable().optional(),
    passwordHash: z.string().nullable().optional(),
    role: z.unknown().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    emailVerified: z.date().nullable().optional(),
    image: z.string().nullable().optional(),
    passwordHash: z.string().nullable().optional(),
    role: z.unknown().nullable().optional()
  }).nullable().optional()});