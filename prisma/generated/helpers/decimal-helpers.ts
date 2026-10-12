import * as z from 'zod';

import { Prisma } from '../../../app/generated/prisma/browser';

// DECIMAL HELPERS
//------------------------------------------------------

export const DecimalJSLikeSchema: z.ZodType<Prisma.DecimalJsLike> = z.object({
  d: z.array(z.number()),
  e: z.number(),
  s: z.number(),
  // Zod v3/v4 compatible callable check
  toFixed: z.custom<Prisma.DecimalJsLike['toFixed']>((v) => typeof v === 'function'),
});

// Accept canonical decimal strings (+/-, optional fraction, optional exponent), or Infinity/NaN.
export const DECIMAL_STRING_REGEX = /^(?:[+-]?(?:[0-9]+(?:.[0-9]+)?(?:[eE][+-]?[0-9]+)?|Infinity)|NaN)$/;

export const isValidDecimalInput = (
  v?: null | string | number | Prisma.DecimalJsLike,
): v is string | number | Prisma.DecimalJsLike => {
  if (v === undefined || v === null) return false;
  return (
    // Explicit instance checks first. Decimal.isDecimal is used instead of instanceof because
    // the browser and server Prisma runtimes bundle separate Decimal class copies, so
    // instanceof fails across copies while the structural isDecimal check is cross-copy safe.
    Prisma.Decimal.isDecimal(v) ||
    // If Decimal.js is present and imported by the generator, this symbol exists at runtime
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Decimal may be undefined when not installed; codegen controls the import
    (typeof Decimal !== 'undefined' && v instanceof Decimal) ||
    (typeof v === 'object' &&
      'd' in v &&
      'e' in v &&
      's' in v &&
      'toFixed' in v) ||
    (typeof v === 'string' && DECIMAL_STRING_REGEX.test(v)) ||
    typeof v === 'number'
  );
};
