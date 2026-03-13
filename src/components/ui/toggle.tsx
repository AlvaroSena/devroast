'use client';

import { Toggle as BaseToggle } from '@base-ui/react/toggle';
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '@/lib/utils';

const toggleStyles = tv({
  base: 'relative inline-flex h-[22px] w-[40px] shrink-0 cursor-pointer items-center rounded-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    checked: {
      true: 'bg-accent-green justify-end',
      false: 'bg-border-secondary justify-start',
    },
  },
});

export interface ToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, checked, defaultChecked, onCheckedChange, ...props }, ref) => {
    return (
      <BaseToggle
        ref={ref}
        pressed={checked}
        defaultPressed={defaultChecked}
        onPressedChange={onCheckedChange}
        className={cn(toggleStyles({ checked }), className)}
        {...props}
      >
        <div className="h-[16px] w-[16px] rounded-full bg-white shadow-sm" />
      </BaseToggle>
    );
  }
);

Toggle.displayName = 'Toggle';
