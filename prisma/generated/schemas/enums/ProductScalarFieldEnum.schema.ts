import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'categoryId', 'price', 'discountPercentage', 'rating', 'stock', 'tags', 'brand', 'sku', 'weight', 'width', 'height', 'depth', 'warrantyInformation', 'shippingInformation', 'availabilityStatus', 'returnPolicy', 'minimumOrderQuantity', 'createdAt', 'updatedAt', 'barcode', 'qrCode', 'images', 'thumbnail'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;