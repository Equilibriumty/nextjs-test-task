import { create } from 'zustand'

type Step = 'initial' | 'phone-validation' | 'final';

interface FormState {
  currentStep: Step
  direction: 'forward' | 'backward' | null
  setCurrentStep: (step: Step) => void
  setDirection: (direction: 'forward' | 'backward' | null) => void
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
    currentStep: 'initial',
    direction: null,
    setDirection: (direction) => set({ direction }),
    setCurrentStep: (step) => set({currentStep: step}),
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
    clearFormState: () => set({ onboarding: { firstName: '', lastName: '' }, phoneVerification: { countryCode: '', phoneNumber: '' } }),
  }),
) 