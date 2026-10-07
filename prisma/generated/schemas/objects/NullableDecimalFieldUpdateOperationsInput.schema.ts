import * as z from 'zod';
import { Prisma } from '../../../../app/generated/prisma/browser';



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
  set: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'set' must be a Decimal",
}).optional(),
  increment: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'increment' must be a Decimal",
}).optional(),
  decrement: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'decrement' must be a Decimal",
}).optional(),
  multiply: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'multiply' must be a Decimal",
}).optional(),
  divide: z.union([
  z.number(),
  z.string(),
  z.custom<InstanceType<typeof Prisma.Decimal>>((v) => Prisma.Decimal.isDecimal(v)),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'divide' must be a Decimal",
}).optional()
}).strict();
export const NullableDecimalFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableDecimalFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableDecimalFieldUpdateOperationsInput>;
export const NullableDecimalFieldUpdateOperationsInputObjectZodSchema = makeSchema();
