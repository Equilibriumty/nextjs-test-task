'use client'

import * as React from "react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  id,
  value,
  onChange,
}) => (
  <div className="flex flex-col w-full">
    <label htmlFor={id} className="text-xs leading-4 text-slate-900">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${label ? 'mt-1' : ''} overflow-hidden self-stretch px-6 py-4 font-light w-full text-base font-(--hanken-grotesk) leading-6 border-2 
                border-solid border-slate-900 border-opacity-10 rounded-[56px] text-slate-900 
                focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                hover:border-sky-600 transition-colors bg-transparent`}
      aria-label={label}
      required
    />
  </div>
);
