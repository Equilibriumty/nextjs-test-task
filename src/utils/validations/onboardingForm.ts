import { z } from 'zod'

export const onboardingSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
})

export const phoneVerificationSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[0-9\s]+$/, 'Invalid phone number format'),
  countryCode: z.string().default('+44')
})

export type OnboardingFormData = z.infer<typeof onboardingSchema>
export type PhoneVerificationFormData = z.infer<typeof phoneVerificationSchema> 
