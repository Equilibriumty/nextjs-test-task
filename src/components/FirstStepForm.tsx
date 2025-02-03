"use client";

import * as React from "react";
import { InputField } from "@/components/ui/InputField";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  onboardingSchema,
  type OnboardingFormData,
} from "@/utils/validations/onboardingForm";
import { useFormStore } from "@/store/formStore";

export function FormFirstStep() {
  const { onboarding, setOnboardingData, setCurrentStep, setDirection } = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: onboarding,
    mode: "onChange",
  });

  const onSubmit = (data: OnboardingFormData) => {
    setOnboardingData(data);
    setCurrentStep("phone-validation");
    setDirection('forward')
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full animate-slide-right"
    >
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-xl font-bold text-slate-900 mt-6 font-primary">
          Some introductions
        </h1>

        <div className="flex flex-col gap-1">
          <InputField
            label="First name"
            placeholder="Your first name"
            id="firstName"
            error={errors.firstName?.message}
            {...register("firstName")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <InputField
            label="Last name"
            placeholder="Your last name"
            id="lastName"
            error={errors.lastName?.message}
            {...register("lastName")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="primary" type="submit">
          Continue
        </Button>
        <Button variant="secondary">Already have an account?</Button>
      </div>
      <div className="text-center text-xs text-slate-500">Version 0.1</div>
    </form>
  );
}
