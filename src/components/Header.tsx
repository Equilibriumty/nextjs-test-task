"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import { Stepper } from "./Stepper";
import { useFormStore } from "@/store/formStore";

export const Header = () => {

  const { currentStep, setCurrentStep } = useFormStore()

  const handleGoBack = () => {
    setCurrentStep('initial')
  }

  const pathname = usePathname();
  const withNavigation = currentStep !== "initial";

  if (pathname !== '/') {
    return null
  }

  return (
    <header
      className={clsx("flex flex-col justify-center items-center ")}
    >

      <div className={clsx("h-[72px] flex items-center justify-center w-full flex-row", {
        "justify-between": withNavigation,
      })}>
      {withNavigation && (
        <button
          className="animate-in duration-200 fade-in"
          onClick={handleGoBack}
          aria-label="Go back to previous page"
        >
          <Image src="/ArrowLeft.svg" alt="" width={14} height={14} />
        </button>
      )}
        <Image
          src="/Logo.svg"
          alt="Company Logo"
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
      {withNavigation && <div className="w-[14px] h-[14px] invisible" />}
      </div>
      <div className="flex justify-center h-[48]">
        <Stepper />
      </div>
    </header>
  );
};
