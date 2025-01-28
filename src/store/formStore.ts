import { create } from 'zustand'

interface FormState {
  onboarding: {
    firstName: string
    lastName: string
  }
  phoneVerification: {
    phoneNumber: string
    countryCode: string
  }
  setOnboardingData: (data: FormState['onboarding']) => void
  setPhoneVerificationData: (data: FormState['phoneVerification']) => void
  clearFormState: () => void
}

export const useFormStore = create<FormState>()(

    (set) => ({
      onboarding: {
        firstName: '',
        lastName: '',
      },
      phoneVerification: {
        phoneNumber: '',
        countryCode: '+44',
      },
      setOnboardingData: (data) =>
        set((state) => ({
          ...state,
          onboarding: data,
        })),
      setPhoneVerificationData: (data) =>
        set((state) => ({
          ...state,
          phoneVerification: data,
        })),
      clearFormState: () => set({onboarding: {firstName: '', lastName: ''}, phoneVerification: {countryCode: '', phoneNumber: ''}}),
    }),
) 