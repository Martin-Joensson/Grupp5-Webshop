import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';

export const ProductSchema = z.object({
  id: z.coerce.number().int(),
  title: z.string(),
  description: z.string(),
  categoryId: z.coerce.number().int(),
  price: z.coerce.number().int().transform((val) => val * 100),
  discountPercentage: z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v), {
  message: "Field 'discountPercentage' must be a Decimal. Location: ['Models', 'Product']",
}).nullish(),
  rating: z.coerce.number().nullish(),
  stock: z.coerce.number().int().nullish(),
  tags: z.array(z.string()),
  brand: z.string().nullish(),
  sku: z.string().nullish(),
  weight: z.coerce.number().nullish(),
  width: z.coerce.number().nullish(),
  height: z.coerce.number().nullish(),
  depth: z.coerce.number().nullish(),
  warrantyInformation: z.string().nullish(),
  shippingInformation: z.string().nullish(),
  availabilityStatus: z.string().nullish(),
  returnPolicy: z.string().nullish(),
  minimumOrderQuantity: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  barcode: z.string().nullish(),
  qrCode: z.string().nullish(),
  images: z.array(z.string()),
  thumbnail: z.string(),
});

export type ProductType = z.infer<typeof ProductSchema>;
