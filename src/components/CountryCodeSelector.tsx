"use client";

import * as React from "react";
import {CountryCodeItem} from "./CountryCodeItem";
import { InputField } from "@/components/ui/InputField";
import Image from "next/image";
import { useState } from "react";

export const countries = [
  { code: "+44", country: "United Kingdom", shorthand: "GB" },
  { code: "+353", country: "Ireland", shorthand: "IE" },
  { code: "+1", country: "United States of America", shorthand: "US" },
  { code: "+61", country: "Australia", shorthand: "AU" },
  { code: "+93", country: "Afghanistan", shorthand: "AF" },
  { code: "+355", country: "Albania", shorthand: "AL" },
  { code: "+213", country: "Algeria", shorthand: "DZ" },
] as const;

export type Country = (typeof countries)[number];

export const CountryCodeSelector = () => {
  const [countryValue, setCountryValue] = useState("");
  
  const filteredCountries = countries.filter((country) =>
    country.country.toLowerCase().includes(countryValue)
  );

  return (
    <div className="flex overflow-hidden flex-col bg-slate-50 w-full">
      <div className="flex flex-col w-full backdrop-blur-[calc(24px_/_2] bg-slate-50 bg-opacity-80">
        <div className="flex gap-2 justify-center bg-slate-50 items-end py-2 pr-2 pl-6 w-full min-h-[72px]">
          <InputField value={countryValue} onChange={(e) => setCountryValue(e.target.value)} placeholder="Search" className="w-full" />
          <div className="flex items-center self-stretch my-auto">
            <Image
              src="/Search.svg"
              height={24}
              width={24}
              className="object-contain shrink-0 self-stretch my-auto w-0"
              alt="Magnifying glass"
            />
          </div>
          <div className="flex items-center self-stretch my-auto w-10">
            <Image
              src="/Search.svg"
              width={20}
              height={20}
              className="object-contain self-stretch my-auto w-10 aspect-square"
              alt="search icon"
            />
          </div>
          <img
            loading="lazy"
            src="/Close.svg"
            className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[48px]"
            alt="user icon"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 pb-2 w-full">
        <div className="flex flex-col w-full text-base font-light leading-6 bg-slate-50 text-slate-900">
          <div className="flex flex-col w-full border-b border-slate-900 border-opacity-0">
            {filteredCountries.map((country, index) => (
              <CountryCodeItem key={index} country={country} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

