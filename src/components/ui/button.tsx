import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'tw:inline-flex tw:items-center tw:justify-center tw:gap-3 tw:whitespace-nowrap tw:rounded-none tw:border tw:border-solid tw:text-sm tw:font-medium tw:transition-colors tw:disabled:pointer-events-none tw:disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'tw:border-transparent tw:bg-[#D4B483] tw:text-[#14213D] tw:hover:bg-[#e7ca9d]',
        destructive: 'tw:border-transparent tw:bg-red-700 tw:text-white',
        outline: 'tw:border-[#D4B483]/50 tw:bg-transparent tw:text-[#F7F4EE] tw:hover:bg-white/5',
        secondary: 'tw:border-transparent tw:bg-[#F7F4EE] tw:text-[#14213D]',
        ghost: 'tw:border-transparent tw:bg-transparent tw:text-[#D4B483] tw:hover:bg-white/5',
        link: 'tw:border-transparent tw:bg-transparent tw:text-[#D4B483] tw:underline-offset-4 tw:hover:underline',
      },
      size: {
        default: 'tw:min-h-11 tw:px-5 tw:py-3',
        sm: 'tw:min-h-9 tw:px-3 tw:py-2',
        lg: 'tw:min-h-12 tw:px-6 tw:py-4',
        icon: 'tw:size-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}/>;
});
Button.displayName = 'Button';
export { Button, buttonVariants };
