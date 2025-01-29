"use client";

import * as React from "react";
import { Stepper } from "@/components/Stepper";
import { InputField } from "@/components/ui/InputField";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema, type OnboardingFormData } from "@/utils/validations/onboardingForm";
import { useFormStore } from "@/store/formStore";

export default function OnboardingPage() {
  const router = useRouter();
  const { onboarding, setOnboardingData } = useFormStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors, },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: onboarding,
    mode: "onChange",
  });

  const onSubmit = (data: OnboardingFormData) => {
    setOnboardingData(data);
    router.push("/phone-validation");
  };

  return (
    <div className="min-h-screen bg-[#F6FAFE]">
      <div className="flex flex-col mx-auto w-full max-w-[480px] px-6 py-6">
        <header className="flex flex-col items-center justify-center h-[72px]">
          <Image
            src="/Logo.svg"
            alt="Company Logo"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
        </header>

        <main className="flex flex-col w-full">
          <div className="flex justify-center h-[48]">
              <Stepper  />
          </div>
          <div className="flex flex-col gap-6 w-full">
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
                <Button
                  variant="primary"
                  type="submit"
                >
                  Continue
                </Button>
                <Button variant="secondary">Already have an account?</Button>
              </div>
              <div className="text-center text-xs text-slate-500">
                Version 0.1
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
