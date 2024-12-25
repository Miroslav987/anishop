import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Link
        className="flex gap-[10px] items-center justify-start"
        href={"/profile/my-address-creditcard"}
      >
        <svg
          className="rotate-90"
          width="8"
          height="8"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1L5 5L1 1"
            stroke="#1E2128"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Назад</span>
      </Link>
    </>
  );
}
