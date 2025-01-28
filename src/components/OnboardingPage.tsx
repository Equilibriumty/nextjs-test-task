"use client";

import * as React from "react";
import { StatusIndicator } from "./StatusIndicator";
import { InputField } from "./InputField";
import { Button } from "./Button";
import Image from "next/image";
import { OnboardingFormData } from "./types";
import { useRouter } from "next/navigation";

export const OnboardingPage: React.FC = () => {
  const [formData, setFormData] = React.useState<OnboardingFormData>({
    firstName: "",
    lastName: "",
  });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      router.push("/phone-verification");
    }
  };

  const handleInputChange =
    (field: keyof OnboardingFormData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex flex-col mx-auto w-full max-w-[480px] px-6 py-6">
        <header className="flex flex-col items-center justify-center h-[72]">
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
            <div className="flex gap-1 items-center">
              <StatusIndicator number={1} isActive={true} />
              <div className="flex shrink-0 w-1 h-1 rounded-full bg-slate-900 bg-opacity-10" />
              <StatusIndicator number={2} isActive={false} />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              <div className="flex flex-col gap-4 w-full">
                <h1 className="text-xl font-bold text-slate-900 mt-6 font-primary">
                  Some introductions
                </h1>

                <InputField
                  label="First name"
                  placeholder="Your first name"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName")(e.target.value)
                  }
                />

                <InputField
                  label="Last name"
                  placeholder="Your last name"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName")(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!formData.firstName || !formData.lastName}
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
};
