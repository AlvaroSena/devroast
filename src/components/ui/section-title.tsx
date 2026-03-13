import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
}

export function SectionTitle({
  children,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <h2 className={cn('font-mono text-sm font-bold', className)} {...props}>
      <span className="text-accent-green">{'//'}</span>
      <span className="text-text-primary"> {children}</span>
    </h2>
  );
}

export interface SectionDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
}

export function SectionDescription({
  children,
  className,
  ...props
}: SectionDescriptionProps) {
  return (
    <p
      className={cn('font-mono text-sm text-text-tertiary', className)}
      {...props}
    >
      {'//'} {children}
    </p>
  );
}
