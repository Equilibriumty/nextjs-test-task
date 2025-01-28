export interface StatusIndicatorProps {
  number: number;
  isActive: boolean;
}

export interface InputFieldProps extends React.ComponentProps<'input'> {
  label?: string;
  placeholder: string;
  id: string;
  value: string;
}

export interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export interface OnboardingFormData {
  firstName: string;
  lastName: string;
}
