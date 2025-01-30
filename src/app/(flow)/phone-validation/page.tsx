"use client";
import * as React from "react";
import Image from "next/image";
import { Stepper } from "@/components/Stepper";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  phoneVerificationSchema,
  toPhoneNumberMask,
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

  const onSubmit = () => {
    router.push("/success");
    clearFormState();
  };

  return (
    <div className="bg-[#F6FAFE]">
        <main className="flex flex-col w-full">
          <div className="flex justify-center h-[48]">
            <Stepper />
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
                          "border-errorText": errors.phoneNumber,
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
                      onChange={(e) => {
                        const value = toPhoneNumberMask(e.target.value);
                        e.target.value = value;
                        setPhoneVerificationData({
                          phoneNumber: value,
                          countryCode: phoneVerification.countryCode,
                        });
                      }}
                      className={clsx(
                        "h-[56px] overflow-hidden self-stretch px-6 py-4 font-light w-full text-base font-(--hanken-grotesk) leading-6",
                        "border-2 border-solid rounded-[56px] text-slate-900",
                        "focus:outline-none focus:border-sky-600 hover:border-sky-600  transition-colors bg-transparent",
                        {
                          "border-errorText focus:border-errorText":
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
                    <p className="text-xs text-errorText ml-1" role="alert">
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
                className="font-bold text-btnPrimary"
              >
                terms and conditions
              </Link>
              <span className="text-slate-900"> and </span>
              <Link
                href="/privacy-policy"
                className="font-bold text-btnPrimary"
              >
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
      {isOpen && (
        <Modal isOpen={isOpen} onClose={close}>
          <CountryCodeSelector />
        </Modal>
      )}
    </div>
  );
}
