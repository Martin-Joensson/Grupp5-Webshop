import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  price: z.literal(true).optional(),
  discountPercentage: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  brand: z.literal(true).optional(),
  sku: z.literal(true).optional(),
  weight: z.literal(true).optional(),
  width: z.literal(true).optional(),
  height: z.literal(true).optional(),
  depth: z.literal(true).optional(),
  warrantyInformation: z.literal(true).optional(),
  shippingInformation: z.literal(true).optional(),
  availabilityStatus: z.literal(true).optional(),
  returnPolicy: z.literal(true).optional(),
  minimumOrderQuantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  barcode: z.literal(true).optional(),
  qrCode: z.literal(true).optional(),
  thumbnail: z.literal(true).optional()
}).strict();
export const ProductMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductMaxAggregateInputType>;
export const ProductMaxAggregateInputObjectZodSchema = makeSchema();
