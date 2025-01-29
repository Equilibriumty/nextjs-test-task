'use client'

import * as React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  type = "button",
  disabled = false,
}) => (
  <button
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={`gap-2 self-stretch px-6 py-4 w-full text-base font-bold leading-6 rounded-[56px]
              transition-all duration-200 ease-in-out
              ${
                variant === "primary"
                  ? "bg-btnPrimary text-slate-50 hover:bg-sky-700 focus:ring-2 focus:ring-sky-600 focus:border-transparent focus:ring-offset-2"
                  : "text-btnPrimary hover:bg-sky-50 focus:ring-2 focus:ring-sky-600"
              }
              disabled:opacity-50 disabled:cursor-not-allowed`}
    aria-disabled={disabled}
  >
    {children}
  </button>
);
