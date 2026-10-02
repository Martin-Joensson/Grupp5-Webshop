"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LIMIT_OPTIONS = [12, 24, 36, 48, 60, 72, 84, 96];

interface LimitDropDownProps {
  currentLimit: number;
}

export default function LimitDropDown({ currentLimit }: LimitDropDownProps) {
  const searchParams = useSearchParams();
  const path = usePathname();
  const { replace } = useRouter();

  const changeLimit = (limit: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.set("limit", limit);
    replace(`${path}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
      <label htmlFor="page-limit" className="sr-only">
        Number of products per page:
      </label>
      <select
        id="page-limit"
        className="w-full sm:w-auto p-2 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md"
        defaultValue={currentLimit}
        onChange={(e) => {
          changeLimit(e.target.value);
        }}
      >
        {LIMIT_OPTIONS.map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
}
