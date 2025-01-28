'use client'

import * as React from "react";
import { InputFieldProps } from "./types";

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={props.id} className="text-xs leading-4 text-slate-900">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...props}
        className={`${label ? 'mt-1' : ''} overflow-hidden self-stretch px-6 py-4 font-light w-full text-base font-(--hanken-grotesk) leading-6 border-2 
                  border-solid ${error ? 'border-red-500' : 'border-slate-900 border-opacity-10'} rounded-[56px] text-slate-900 
                  focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent
                  hover:border-sky-600 transition-colors bg-transparent ${className || ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-errormessage={error ? `${props.id}-error` : undefined}
      />
      {error && (
        <p
          id={`${props.id}-error`}
          className="mt-1 text-xs text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
);

InputField.displayName = 'InputField';
