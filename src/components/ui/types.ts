export interface StatusIndicatorProps {
  number: number;
  isActive: boolean;
}

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
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
