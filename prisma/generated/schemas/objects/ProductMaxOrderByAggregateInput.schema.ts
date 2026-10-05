import * as z from 'zod';
import type { Prisma } from '../../../../app/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  discountPercentage: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  stock: SortOrderSchema.optional(),
  brand: SortOrderSchema.optional(),
  sku: SortOrderSchema.optional(),
  weight: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  depth: SortOrderSchema.optional(),
  warrantyInformation: SortOrderSchema.optional(),
  shippingInformation: SortOrderSchema.optional(),
  availabilityStatus: SortOrderSchema.optional(),
  returnPolicy: SortOrderSchema.optional(),
  minimumOrderQuantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  barcode: SortOrderSchema.optional(),
  qrCode: SortOrderSchema.optional(),
  thumbnail: SortOrderSchema.optional()
}).strict();
export const ProductMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductMaxOrderByAggregateInput>;
export const ProductMaxOrderByAggregateInputObjectZodSchema = makeSchema();
