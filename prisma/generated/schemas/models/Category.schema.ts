import * as z from 'zod';

export const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
});

export type CategoryType = z.infer<typeof CategorySchema>;
