import * as z from 'zod';
// prettier-ignore
export const CategoryModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    slug: z.string(),
    image: z.string(),
    products: z.array(z.unknown())
}).strict();

export type CategoryPureType = z.infer<typeof CategoryModelSchema>;
