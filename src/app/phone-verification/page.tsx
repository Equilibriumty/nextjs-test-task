"use client";
import * as React from "react";
import Image from "next/image";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  phoneVerificationSchema,
  type PhoneVerificationFormData,
} from "@/utils/validations/onboardingForm";
import { useFormStore } from "@/store/formStore";
import { CountryCodeSelector } from "@/components/CountryCodeSelector";
import Modal from "@/components/ui/Modal";
import { useModalStore } from "@/store/modalStore";
import clsx from "clsx";

export default function PhoneValidation() {
  const router = useRouter();

  const { isOpen, open, close } = useModalStore();

  const { phoneVerification, setPhoneVerificationData, clearFormState } =
    useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneVerificationFormData>({
    resolver: zodResolver(phoneVerificationSchema),
    defaultValues: phoneVerification,
    mode: "onChange",
  });

  const onSubmit = (data: PhoneVerificationFormData) => {
    setPhoneVerificationData(data);
    router.push("/success");
    clearFormState();
  };


  return (
    <div className="min-h-screen bg-[#F6FAFE]">
      <div className="flex flex-col mx-auto w-full max-w-[480px] px-6 py-6">
        <header className="flex flex-row justify-between  items-center h-[72]">
          <button
          className="animate-in duration-200 fade-in"
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full animate-slide-left"
          >
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-xl font-bold leading-7 font-primary mt-6 text-slate-900">
                Let&apos;s validate your number
              </h1>
              <div className="flex flex-col w-full  font-light">
                <label
                  htmlFor="phone"
                  className="text-xs leading-4 text-slate-900"
                >
                  Phone number
                </label>
                <div className="flex gap-1 mt-1 items-start w-full text-base leading-6">
                  <div
                    className={
                      "flex flex-col min-w-28 whitespace-nowrap text-slate-900"
                    }
                  >
                    <button
                      type="button"
                      onClick={open}
                      className={clsx(
                        "flex overflow-hidden gap-4 min-h-[56px] focus:border-transparent focus:ring-2 focus:ring-sky-600 justify-center items-center w-full border-2 border-solid  rounded-[56px]",
                        {
                          "border-red-500": errors.phoneNumber,
                          "border-slate-900 border-opacity-10":
                            !errors.phoneNumber,
                        }
                      )}
                      aria-label="Select country code"
                    >
                      <span className="text-[16px] font-light">
                        {phoneVerification.countryCode || "+44"}
                      </span>
                      <Image
                        src="/Arrow.svg"
                        alt=""
                        height={24}
                        width={24}
                        className="self-stretch my-auto w-6 aspect-square"
                      />
                    </button>
                  </div>
                  <div className="flex-1">
                    <input
                      type="tel"
                      placeholder="07890 123456"
                      autoFocus
                      id="phoneNumber"
                      {...register("phoneNumber")}
                      className={clsx(
                        "h-[56px] overflow-hidden self-stretch px-6 py-4 font-light w-full text-base font-(--hanken-grotesk) leading-6",
                        "border-2 border-solid rounded-[56px] text-slate-900",
                        "focus:outline-none focus:border-sky-600 hover:border-sky-600  transition-colors bg-transparent",
                        {
                          "border-red-500 focus:border-red-500":
                            errors.phoneNumber?.message,
                          "border-slate-900 border-opacity-10":
                            !errors.phoneNumber?.message,
                        }
                      )}
                      aria-invalid={
                        errors.phoneNumber?.message ? "true" : "false"
                      }
                    />
                  </div>
                </div>
                {errors.phoneNumber?.message && (
                  <div className="flex flex-row items-center mt-1">
                    <Image
                      src="/ExclamationMark.svg"
                      alt="ExclamationMark"
                      width={16}
                      height={16}
                    />
                    <p className="text-xs text-red-500 ml-1" role="alert">
                      {errors.phoneNumber?.message}
                    </p>
                  </div>
                )}
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
              <Button type="submit" variant="primary">
                Continue
              </Button>
            </div>
          </form>
        </main>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={close}>
          <CountryCodeSelector />
        </Modal>
      )}
    </div>
  );
}
