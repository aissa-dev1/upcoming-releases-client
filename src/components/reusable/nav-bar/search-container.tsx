"use client";

import SearchIcon from "@/components/icons/outline/search";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function NavBarSearchContainer() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="relative w-full text-foreground">
      {!isInputFocused && (
        <SearchIcon
          className={cn(
            "absolute top-1/2 -translate-y-1/2 left-3 size-5 duration-300",
            {
              "opacity-100": !isInputFocused,
              "opacity-0": isInputFocused,
            }
          )}
        />
      )}
      <input
        type="text"
        className={cn(
          "w-full outline-none py-2 pr-4 rounded-full text-sm duration-300",
          {
            "pl-10": !isInputFocused,
            "pl-4": isInputFocused,
          }
        )}
        placeholder="Search"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
    </div>
  );
}
