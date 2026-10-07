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

interface SortOrderOptions {
  id: number;
  name: string; //what the user sees
  slug: string; //what the system uses
  orderBy: Record<string, string>; //what api uses
}

export const sortingOptions: SortOrderOptions[] = [
  {
    id: 1,
    name: "Product title (A - Z)",
    slug: "title-asc",
    orderBy: { title: "asc" },
  },
  {
    id: 2,
    name: "Product title (Z - A)",
    slug: "title-desc",
    orderBy: { title: "desc" },
  },
  {
    id: 3,
    name: "Ratings (high - low)",
    slug: "rating-desc",
    orderBy: { rating: "desc" },
  },
  {
    id: 4,
    name: "Price (low - high)",
    slug: "price-asc",
    orderBy: { price: "asc" },
  },
  {
    id: 5,
    name: "Price (high - low)",
    slug: "price-desc",
    orderBy: { price: "desc" },
  },
  {
    id: 6,
    name: "Highest discount %",
    slug: "discount-percent-desc",
    orderBy: { discountPercentage: "desc" },
  },
];

export function orderBy(sortSlug: string | undefined) {
  return sortingOptions.find((option) => option.slug === sortSlug)?.orderBy;
}
