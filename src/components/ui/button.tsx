import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded-none font-mono text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-accent-green text-zinc-950 hover:bg-green-primary focus-visible:ring-accent-green',
      secondary:
        'border border-border-secondary bg-transparent text-text-primary hover:bg-bg-surface focus-visible:ring-border-primary',
      link: 'text-text-secondary hover:text-text-tertiary focus-visible:ring-border-primary underline-offset-4 hover:underline',
      ghost:
        'hover:bg-zinc-100 focus-visible:ring-border-primary dark:hover:bg-bg-surface',
      outline:
        'border border-zinc-300 bg-transparent hover:bg-zinc-100 focus-visible:ring-border-primary dark:border-border-secondary dark:hover:bg-bg-surface',
      destructive:
        'bg-accent-red text-white hover:bg-red-600 focus-visible:ring-accent-red',
    },
    size: {
      sm: 'h-8 px-4 text-xs',
      md: 'h-[42px] px-6',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
