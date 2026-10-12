import * as z from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id', 'productId', 'rating', 'comment', 'date', 'reviewerName', 'reviewerEmail'])

export type ReviewScalarFieldEnum = z.infer<typeof ReviewScalarFieldEnumSchema>;