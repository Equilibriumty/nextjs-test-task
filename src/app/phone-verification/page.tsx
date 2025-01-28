"use client";
import * as React from "react";
import Image from "next/image";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Button } from "@/components/Button";
import { InputField } from "@/components/InputField";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PhoneValidation() {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+44");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex flex-col mx-auto w-full max-w-[480px] px-6 py-6">
        <header className="flex flex-row justify-between  items-center h-[72]">
          <button
            onClick={() => router.back()}
            aria-label="Go back to previous page"
          >
            <Image src="/ArrowLeft.svg" alt="" width={14} height={14} />
          </button>
          <Image
            src="/Logo.svg"
            alt="Company Logo"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <div className="w-[14] h-[14] invisible" />
        </header>

        <main className="flex flex-col w-full">
          <div className="flex justify-center h-[48]">
            <div className="flex gap-1 items-center">
              <StatusIndicator number={1} isActive={false} />
              <div className="flex shrink-0 w-1 h-1 rounded-full bg-slate-900 bg-opacity-10" />
              <StatusIndicator number={2} isActive={true} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-xl font-bold leading-7 font-primary mt-6 text-slate-900">
                Let&apos;s validate your number
              </h1>
              <div className="flex flex-col w-full font-light">
                <label
                  htmlFor="phone"
                  className="text-xs leading-4 text-slate-900"
                >
                  Phone number
                </label>
                <div className="flex gap-1 mt-1 items-start w-full text-base leading-6">
                  <div className="flex flex-col min-w-28 whitespace-nowrap text-slate-900">
                    <button
                      type="button"
                      className="flex overflow-hidden gap-4 focus:border-transparent focus:ring-2 focus:ring-sky-600 justify-center items-center w-full border-2 border-solid border-slate-900 border-opacity-10 min-h-[56px] rounded-[56px]"
                      aria-label="Select country code"
                    >
                      <span className="text-[16px] font-light">{countryCode}</span>
                      <Image
                        src="/Arrow.svg"
                        alt=""
                        height={24}
                        width={24}
                        className="self-stretch my-auto w-6 aspect-square"
                      />
                    </button>
                  </div>
                  <InputField
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="07890 123456"
                    className="flex-1  border-2 border-solid border-slate-900 border-opacity-10 rounded-[56px] text-slate-900"
                    aria-label="Phone number"
                  />
                </div>
              </div>
            </div>

            <div className="w-full text-xs leading-4">
              <span className="text-slate-900">
                By clicking &apos;Continue&apos; you confirm that you agree to
                our{" "}
              </span>
              <Link
                href="/terms-and-conditions"
                className="font-bold text-sky-600"
              >
                terms and conditions
              </Link>
              <span className="text-slate-900"> and </span>
              <Link href="/privacy-policy" className="font-bold text-sky-600">
                privacy policy
              </Link>
            </div>

            <div className="mt-3">
              <Button type="submit" variant="primary" disabled={!phoneNumber}>
                Continue
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
