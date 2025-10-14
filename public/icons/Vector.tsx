import React, { SVGProps } from "react";

export default function Vector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.16602 10H23.8327M23.8327 10L15.3327 1.5M23.8327 10L15.3327 18.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
