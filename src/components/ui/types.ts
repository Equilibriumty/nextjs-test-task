export type InputFieldProps = React.ComponentProps<'input'> & { 
  label?: string;
  error?: string;
  showErrorState?: boolean
}

export type ButtonProps = React.ComponentProps<'button'> &  {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}
