import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'categoryId', 'price', 'discountPercentage', 'rating', 'stock', 'tags', 'brand', 'sku', 'weight', 'width', 'height', 'depth', 'warrantyInformation', 'shippingInformation', 'returnPolicy', 'minimumOrderQuantity', 'createdAt', 'updatedAt', 'barcode', 'qrCode', 'images', 'thumbnail', 'availabilityStatus'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;