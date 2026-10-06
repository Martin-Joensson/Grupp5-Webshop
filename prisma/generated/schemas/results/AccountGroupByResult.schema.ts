import * as z from 'zod';
export const AccountGroupByResultSchema = z.array(z.object({
  userId: z.string().optional(),
  type: z.string().optional(),
  provider: z.string().optional(),
  providerAccountId: z.string().optional(),
  refresh_token: z.string().nullable().optional(),
  access_token: z.string().nullable().optional(),
  expires_at: z.number().int().nullable().optional(),
  token_type: z.string().nullable().optional(),
  scope: z.string().nullable().optional(),
  id_token: z.string().nullable().optional(),
  session_state: z.string().nullable().optional(),
  _count: z.union([z.number(), z.object({
    userId: z.number().optional(),
    type: z.number().optional(),
    provider: z.number().optional(),
    providerAccountId: z.number().optional(),
    refresh_token: z.number().optional(),
    access_token: z.number().optional(),
    expires_at: z.number().optional(),
    token_type: z.number().optional(),
    scope: z.number().optional(),
    id_token: z.number().optional(),
    session_state: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    expires_at: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    expires_at: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    userId: z.string().nullable().optional(),
    type: z.string().nullable().optional(),
    provider: z.string().nullable().optional(),
    providerAccountId: z.string().nullable().optional(),
    refresh_token: z.string().nullable().optional(),
    access_token: z.string().nullable().optional(),
    expires_at: z.number().int().nullable().optional(),
    token_type: z.string().nullable().optional(),
    scope: z.string().nullable().optional(),
    id_token: z.string().nullable().optional(),
    session_state: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    userId: z.string().nullable().optional(),
    type: z.string().nullable().optional(),
    provider: z.string().nullable().optional(),
    providerAccountId: z.string().nullable().optional(),
    refresh_token: z.string().nullable().optional(),
    access_token: z.string().nullable().optional(),
    expires_at: z.number().int().nullable().optional(),
    token_type: z.string().nullable().optional(),
    scope: z.string().nullable().optional(),
    id_token: z.string().nullable().optional(),
    session_state: z.string().nullable().optional()
  }).nullable().optional()
}));