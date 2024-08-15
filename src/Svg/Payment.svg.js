import React from "react";

const PaymentIcon = ({ color = "black", width = 24, height = 24 }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 26 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.3333 1H3.66667C2.19391 1 1 2.19391 1 3.66667V15.6667C1 17.1394 2.19391 18.3333 3.66667 18.3333H22.3333C23.8061 18.3333 25 17.1394 25 15.6667V3.66667C25 2.19391 23.8061 1 22.3333 1Z"
      stroke="#34A9A1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 6.3335H24.3333"
      stroke="#34A9A1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.33331 13H8.99998"
      stroke="#34A9A1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default PaymentIcon;
