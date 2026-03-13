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
    const prefix = tv({
      base: 'w-4 shrink-0 text-center',
      variants: {
        type: {
          removed: 'text-accent-red',
          added: 'text-accent-green',
          context: 'text-text-tertiary',
        },
      },
    })({ type });

    return (
      <div
        ref={ref}
        className={diffLineVariants({ type, className })}
        {...props}
      >
        <span className={prefix}>
          {type === 'removed' ? '-' : type === 'added' ? '+' : ' '}
        </span>
        <span className="flex-1 px-4">{children}</span>
      </div>
    );
  }
);

DiffLine.displayName = 'DiffLine';
