"use client";

import * as React from "react";
import { useFormStore } from "@/store/formStore";
import { FormFirstStep } from "@/components/FirstStepForm";
import { PhoneValidationForm } from "@/components/PhoneValidationForm";
import clsx from "clsx";

const onboardingStepToFormComponent = {
  initial: FormFirstStep,
  "phone-validation": PhoneValidationForm,
};

export default function OnboardingPage() {
  const { currentStep, direction } = useFormStore();

  const CurrentFormComponent =
    onboardingStepToFormComponent[
      currentStep as keyof typeof onboardingStepToFormComponent
    ];

  return (
    <main className="bg-[#F6FAFE] flex flex-col w-full">
      <div
        className={clsx("flex flex-col gap-6 w-full", {
          "animate-slide-forward-enter": direction === "forward",
          "animate-slide-backward-exit": direction === "backward",
        })}
      >
        <CurrentFormComponent />
      </div>
    </main>
  );
}
