"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LIMIT_OPTIONS = [12, 24, 36, 48, 60, 72, 84, 96];

interface LimitDropDownProps {
  currentLimit: number;
  limitId: number;
  // The reason `limitId` exist is to make the <select> id:s diffent
  // which is important if you have multiple pagination components on the same page.
  // It's not the prettiest solution and probably not the best, but it works.
}

export default function LimitDropDown({ currentLimit, limitId }: LimitDropDownProps)
{
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
    <div aria-labelledby={`limit-dropdown-label${limitId}`} className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
      <label id={`limit-dropdown-label${limitId}`} htmlFor={`page-limit-${limitId}`} className="sr-only">
        Number of products per page {currentLimit}
      </label>
      <select
        id={`page-limit-${limitId}`}
        className="w-full sm:w-auto p-2 border border-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md"
        defaultValue={currentLimit}
        onChange={(e) => {
          changeLimit(e.target.value);
        }}
        title="Number of products per page"
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
