"use client";

import * as React from "react";
import { CountryCodeItem } from "./CountryCodeItem";
import { InputField } from "@/components/ui/InputField";
import Image from "next/image";
import { useState } from "react";
import { useModalStore } from "@/store/modalStore";

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

  const { close } = useModalStore();

  const clearSearch = () => {
    setCountryValue("");
  };

  const filteredCountries = countries.filter((country) =>
    country.country.toLowerCase().includes(countryValue.toLowerCase())
  );

  return (
    <div className="flex overflow-hidden flex-col bg-slate-50 w-full">
      <div className="flex flex-col w-full backdrop-blur-[calc(24px_/_2] bg-slate-50 bg-opacity-80">
        <div className="flex gap-2 justify-center bg-slate-50 items-center py-2 pr-2 pl-6 w-full min-h-[72px]">
          <div className="relative w-full">
            <InputField
              value={countryValue}
              onChange={(e) => setCountryValue(e.target.value)}
              placeholder="Search"
              className="w-full pr-12"
            />

            {countryValue ? (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Image
                  src="/Close.svg"
                  height={24}
                  width={24}
                  alt="Clear search"
                />
              </button>
            ) : (
              <Image
                src="/Search.svg"
                height={24}
                width={24}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                alt="Magnifying glass"
              />
            )}
          </div>
          <button
            onClick={close}
            className="w-12 flex items-center justify-center"
          >
            <Image
              width={24}
              height={24}
              loading="lazy"
              src="/XMark.svg"
              alt="Close modal"
            />
          </button>
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
