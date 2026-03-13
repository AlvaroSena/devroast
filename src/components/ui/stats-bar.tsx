import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface StatsBarProps extends HTMLAttributes<HTMLDivElement> {
  totalCodes: number;
  avgScore: number;
}

export function StatsBar({
  totalCodes,
  avgScore,
  className,
  ...props
}: StatsBarProps) {
  return (
    <div className={cn('flex items-center gap-6', className)} {...props}>
      <span className="font-mono text-xs text-text-tertiary">
        {totalCodes.toLocaleString()} codes roasted
      </span>
      <span className="font-mono text-xs text-text-tertiary">·</span>
      <span className="font-mono text-xs text-text-tertiary">
        avg score: {avgScore}/10
      </span>
    </div>
  );
}
