import * as React from "react";

export default function PlusCircleIcon({
  className = "w-5 h-5 text-white",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 19"
      fill="none"
      className={className}
    >
      <path
        d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z"
        stroke="currentColor"
        strokeWidth="1.125"
      />
      <path
        d="M11.25 9.5H9M9 9.5H6.75M9 9.5V7.25M9 9.5V11.75"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinecap="round"
      />
    </svg>
  );
}
