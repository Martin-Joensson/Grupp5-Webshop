import * as z from 'zod';
export const CategoryGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  image: z.string().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    name: z.number().optional(),
    slug: z.number().optional(),
    image: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    name: z.string().nullable().optional(),
    slug: z.string().nullable().optional(),
    image: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    name: z.string().nullable().optional(),
    slug: z.string().nullable().optional(),
    image: z.string().nullable().optional()
  }).nullable().optional()
}));