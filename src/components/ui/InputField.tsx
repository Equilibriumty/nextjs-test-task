'use client'

import * as React from "react";
import { InputFieldProps } from "./types";
import Image from "next/image";
import clsx from "clsx";

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error,  className, ...props }, ref) => (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={props.id} className="text-xs leading-4 text-slate-900">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...props}
        className={clsx(
          'overflow-hidden self-stretch px-6 py-4 font-light w-full text-base font-(--hanken-grotesk) leading-6',
          'border-2 border-solid rounded-[56px] text-slate-900',
          'focus:outline-none focus:border-sky-600 hover:border-sky-600  transition-colors bg-transparent',
          {
            'mt-1': label,
            'border-errorText focus:border-errorText': error ,
            'border-slate-900 border-opacity-10': !error,
          },
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-errormessage={error ? `${props.id}-error` : undefined}
      />
      {error && (
        <div className="mt-1 flex items-start flex-row">
          <Image src="/ExclamationMark.svg" alt="ExclamationMark" width={16} height={16} />
        <p
          id={`${props.id}-error`}
          className="text-xs text-errorText ml-1"
          role="alert"
        >
          {error}
        </p>
        </div>
      )}
    </div>
  )
);

InputField.displayName = 'InputField';
