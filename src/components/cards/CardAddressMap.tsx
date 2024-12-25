import React from "react";

export default function CardAddressMap() {
  return (
    <div className="flex justify-between pb-[20px] border-b">
      <div className="flex h-[40px] gap-[16px]">
        <div className="w-[65.5px]  flex  justify-center items-center bg-grey_first rounded-md">
          <svg
            className="invert-[56%] "
            width="24"
            height="24"
            viewBox="0 0 24 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.5328C1 18.9146 7.66993 25.019 10.6222 27.3595C11.0447 27.6944 11.2585 27.8639 11.5737 27.9498C11.8192 28.0167 12.1805 28.0167 12.4259 27.9498C12.7417 27.8637 12.954 27.6959 13.3781 27.3597C16.3304 25.0193 23 18.9153 23 11.5335C23 8.7399 21.8411 6.06042 19.7782 4.08508C17.7153 2.10974 14.9176 1 12.0002 1C9.08279 1 6.28476 2.1099 4.22184 4.08525C2.15893 6.06059 1 8.73922 1 11.5328Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.85719 10.1287C8.85719 11.8093 10.2643 13.1716 12.0001 13.1716C13.7358 13.1716 15.1429 11.8093 15.1429 10.1287C15.1429 8.44816 13.7358 7.0858 12.0001 7.0858C10.2643 7.0858 8.85719 8.44816 8.85719 10.1287Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="font-[MullerBold]">ул. Солнечная, дом 7</p>
          <p className="text-[14px]">г. Бишкек</p>
        </div>
      </div>

      <div>
        <svg
          className="invert-[56%]"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4"
            stroke="#1E2128"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
