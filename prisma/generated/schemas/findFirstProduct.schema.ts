import type { Prisma } from '../../../app/generated/prisma/browser';
import * as z from 'zod';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductScalarFieldEnumSchema } from './enums/ProductScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductFindFirstSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
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
    returnPolicy: z.boolean().optional(),
    minimumOrderQuantity: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    barcode: z.boolean().optional(),
    qrCode: z.boolean().optional(),
    images: z.boolean().optional(),
    thumbnail: z.boolean().optional(),
    availabilityStatus: z.boolean().optional(),
    category: z.boolean().optional(),
    reviews: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductSelect>;

export const ProductFindFirstSelectZodSchema = z.object({
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
    returnPolicy: z.boolean().optional(),
    minimumOrderQuantity: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    barcode: z.boolean().optional(),
    qrCode: z.boolean().optional(),
    images: z.boolean().optional(),
    thumbnail: z.boolean().optional(),
    availabilityStatus: z.boolean().optional(),
    category: z.boolean().optional(),
    reviews: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProductFindFirstSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({ select: ProductFindFirstSelectSchema.optional(),  orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductFindFirstArgs>;

export const ProductFindFirstZodSchema = z.object({ select: ProductFindFirstSelectSchema.optional(),  orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict();