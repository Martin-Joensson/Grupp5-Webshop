import { ProductOrderByWithRelationInput } from "@/generated/prisma/models";

export const DEFAULT_LIMIT = 12;

// adapted from (2024) https://jsdev.space/snippets/debounce-ts/
export function debounce<T extends unknown[], U>(
  callback: (...args: T) => U,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

export function isValidRegExp(pattern: string): boolean {
  try {
    RegExp(pattern);
  } catch {
    return false;
  }
  return true;
}

export function createUrlSearchParams(searchParams: {
  [key: string]: string | undefined;
}): URLSearchParams {
  const urlParams = new URLSearchParams();
  Object.entries(searchParams).map((entry) => {
    const [key, value] = entry;
    if (value) {
      urlParams.set(key, value);
    }
  });
  return urlParams;
}

export function toEurosString(cents: number): string {
  const euros = new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  });

  return euros.format(cents / 100);
}

const orderByMap: Record<string, ProductOrderByWithRelationInput> = {
  "title-asc": { title: "asc" },
  "title-desc": { title: "desc" },
  "rating-desc": { rating: "desc" },
  "price-asc": { price: "asc" },
  "price-desc": { price: "desc" },
};

export function getOrderBy(
  sortOrder?: string,
): ProductOrderByWithRelationInput {
  return orderByMap[sortOrder ?? ""] ?? { id: "asc" };
}
