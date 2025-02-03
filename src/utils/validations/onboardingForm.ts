import { z } from "zod";

export const onboardingSchema = z.object({
  firstName: z.string().min(1, "Please enter a first name"),
  lastName: z
    .string()
    .min(1, "Please ener a last name")
    .regex(
      /^[a-zA-Z\s]+$/,
      "We only accept letters and spaces for names, no special characters"
    ),
});

export const phoneVerificationSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^\d{5}\s\d{6}$/,
      "Please check the phone number is in the correct format"
    ),
  countryCode: z.string().default("+44"),
});

export const toPhoneNumberMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d{0,6})/, "$1 $2")
    .trim()
    .substring(0, 12);
};

export type OnboardingFormData = z.infer<typeof onboardingSchema>;
export type PhoneVerificationFormData = z.infer<typeof phoneVerificationSchema>;
