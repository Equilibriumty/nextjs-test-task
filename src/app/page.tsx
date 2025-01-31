"use client";

import * as React from "react";
import { useFormStore } from "@/store/formStore";
import { FormFirstStep } from "@/components/FirstStepForm";
import {PhoneValidationForm} from "@/components/PhoneValidationForm";


const onboardingStepToFormComponent = {
  'initial': FormFirstStep,
  'phone-validation': PhoneValidationForm,
}

export default function OnboardingPage() {

  const { currentStep } = useFormStore();


  const CurrentFormComponent = onboardingStepToFormComponent[currentStep as keyof typeof onboardingStepToFormComponent]


  return (
    <main className="bg-[#F6FAFE] flex flex-col w-full">
      <div className="flex flex-col gap-6 w-full">
        <CurrentFormComponent />
      </div>
    </main>
  );
}
