import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  price: z.boolean().optional(),
  discountPercentage: z.boolean().optional(),
  rating: z.boolean().optional(),
  stock: z.boolean().optional(),
  tags: z.boolean().optional(),
  brand: z.boolean().optional(),
  sku: z.boolean().optional(),
  weight: z.boolean().optional(),
  width: z.boolean().optional(),
  height: z.boolean().optional(),
  depth: z.boolean().optional(),
  warrantyInformation: z.boolean().optional(),
  shippingInformation: z.boolean().optional(),
  availabilityStatus: z.boolean().optional(),
  returnPolicy: z.boolean().optional(),
  minimumOrderQuantity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  barcode: z.boolean().optional(),
  qrCode: z.boolean().optional(),
  images: z.boolean().optional(),
  thumbnail: z.boolean().optional(),
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductSelectObjectSchema: z.ZodType<Prisma.ProductSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectZodSchema = makeSchema();
