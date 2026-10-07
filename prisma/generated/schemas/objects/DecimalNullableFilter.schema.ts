import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';
import { NestedDecimalNullableFilterObjectSchema as NestedDecimalNullableFilterObjectSchema } from './NestedDecimalNullableFilter.schema'


const DecimalJSLikeSchema: z.ZodType<Prisma.DecimalJsLike> = z.object({
  d: z.array(z.number()),
  e: z.number(),
  s: z.number(),
  // Zod v3/v4 compatible callable check
  toFixed: z.custom<Prisma.DecimalJsLike['toFixed']>((v) => typeof v === 'function'),
});

// Accept canonical decimal strings (+/-, optional fraction, optional exponent), or Infinity/NaN.
const DECIMAL_STRING_REGEX = /^(?:[+-]?(?:[0-9]+(?:\.[0-9]+)?(?:[eE][+\-]?[0-9]+)?|Infinity)|NaN)$/;

const isValidDecimalInput = (
  v?: null | string | number | Prisma.DecimalJsLike,
): v is string | number | Prisma.DecimalJsLike => {
  if (v === undefined || v === null) return false;
  return (
    // Cross-runtime-copy safe check (browser and server runtimes bundle separate Decimal classes)
    Prisma.Decimal.isDecimal(v) ||
    (typeof v === 'object' &&
      'd' in v &&
      'e' in v &&
      's' in v &&
      'toFixed' in v) ||
    (typeof v === 'string' && DECIMAL_STRING_REGEX.test(v)) ||
    typeof v === 'number'
  );
};

const makeSchema = () => z.object({
  equals: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'equals' must be a Decimal",
}).optional().nullable(),
  in: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'in' must be a Decimal",
}).array().optional().nullable(),
  notIn: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'notIn' must be a Decimal",
}).array().optional().nullable(),
  lt: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'lt' must be a Decimal",
}).optional(),
  lte: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'lte' must be a Decimal",
}).optional(),
  gt: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'gt' must be a Decimal",
}).optional(),
  gte: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'gte' must be a Decimal",
}).optional(),
  not: z.union([z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'not' must be a Decimal",
}), z.lazy(() => NestedDecimalNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const DecimalNullableFilterObjectSchema: z.ZodType<Prisma.DecimalNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.DecimalNullableFilter>;
export const DecimalNullableFilterObjectZodSchema = makeSchema();
