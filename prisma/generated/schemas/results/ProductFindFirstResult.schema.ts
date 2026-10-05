import * as z from 'zod';
import { CategorySchema } from '../models/Category.schema';
import { ReviewSchema } from '../models/Review.schema';
export const ProductFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  categoryId: z.number().int(),
  category: CategorySchema.optional(),
  price: z.number().int(),
  discountPercentage: z.union([z.number(), z.string().regex(/^-?\d+(\.\d+)?$/), z.custom((v) => v !== null && typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && typeof (v as { toFixed?: unknown }).toFixed === 'function', { message: 'Expected a Prisma.Decimal' })]).nullable().optional(),
  rating: z.number().nullable().optional(),
  stock: z.number().int().nullable().optional(),
  tags: z.array(z.string()),
  brand: z.string().nullable().optional(),
  sku: z.string().nullable().optional(),
  weight: z.number().nullable().optional(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  depth: z.number().nullable().optional(),
  warrantyInformation: z.string().nullable().optional(),
  shippingInformation: z.string().nullable().optional(),
  availabilityStatus: z.string().nullable().optional(),
  reviews: z.array(ReviewSchema).optional(),
  returnPolicy: z.string().nullable().optional(),
  minimumOrderQuantity: z.number().int().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  barcode: z.string().nullable().optional(),
  qrCode: z.string().nullable().optional(),
  images: z.array(z.string()),
  thumbnail: z.string()
}));