import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const CategoryCountOutputTypeCountProductsArgsObjectSchema = makeSchema();
export const CategoryCountOutputTypeCountProductsArgsObjectZodSchema = makeSchema();
