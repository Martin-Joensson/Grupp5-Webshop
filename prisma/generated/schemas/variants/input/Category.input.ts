import * as z from 'zod';
// prettier-ignore
export const CategoryInputSchema = z.object({
    name: z.string(),
    slug: z.string(),
    image: z.string(),
    products: z.array(z.unknown())
}).strict();

export type CategoryInputType = z.infer<typeof CategoryInputSchema>;
