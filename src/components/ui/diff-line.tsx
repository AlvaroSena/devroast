import { forwardRef, type HTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const diffLineVariants = tv({
  base: 'flex font-mono text-xs',
  variants: {
    type: {
      removed: 'bg-[#1A0A0A] text-text-secondary',
      added: 'bg-[#0A1A0F] text-text-primary',
      context: 'text-text-secondary',
    },
  },
  defaultVariants: {
    type: 'context',
  },
});

export interface DiffLineProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof diffLineVariants> {}

export const DiffLine = forwardRef<HTMLDivElement, DiffLineProps>(
  ({ className, type, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={diffLineVariants({ type, className })}
        {...props}
      >
        <DiffLinePrefix type={type} />
        <span className="flex-1 px-4">{children}</span>
      </div>
    );
  }
);

DiffLine.displayName = 'DiffLine';

export interface DiffLinePrefixProps {
  type?: 'removed' | 'added' | 'context';
  className?: string;
}

const prefixVariants = tv({
  base: 'w-4 shrink-0 text-center',
  variants: {
    type: {
      removed: 'text-accent-red',
      added: 'text-accent-green',
      context: 'text-text-tertiary',
    },
  },
  defaultVariants: {
    type: 'context',
  },
});

export function DiffLinePrefix({ type, className }: DiffLinePrefixProps) {
  const symbol = type === 'removed' ? '-' : type === 'added' ? '+' : ' ';

  return <span className={prefixVariants({ type, className })}>{symbol}</span>;
}
