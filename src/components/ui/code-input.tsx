'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const DEFAULT_CODE = `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// TODO: handle tax calculation
// TODO: handle currency conversion`;

export interface CodeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function CodeInput({
  value = DEFAULT_CODE,
  onChange,
  className,
}: CodeInputProps) {
  const [code, setCode] = useState(value);

  const handleChange = (newValue: string) => {
    setCode(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={cn(
        'flex w-full max-w-[780px] flex-col rounded-none border border-border-primary bg-bg-input',
        className
      )}
    >
      <CodeInputHeader />
      <div className="flex min-h-[320px] flex-1">
        <CodeInputLineNumbers count={20} />
        <CodeInputTextarea value={code} onChange={handleChange} />
      </div>
    </div>
  );
}

export interface CodeInputHeaderProps {
  className?: string;
}

export function CodeInputHeader({ className }: CodeInputHeaderProps) {
  return (
    <div
      className={cn(
        'flex h-10 items-center justify-between border-b border-border-primary px-4',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-accent-red" />
        <span className="h-3 w-3 rounded-full bg-accent-amber" />
        <span className="h-3 w-3 rounded-full bg-accent-green" />
      </div>
    </div>
  );
}

export interface CodeInputLineNumbersProps {
  count?: number;
  className?: string;
}

export function CodeInputLineNumbers({
  count = 20,
  className,
}: CodeInputLineNumbersProps) {
  const numbers = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div
      className={cn(
        'flex w-12 shrink-0 flex-col justify-start border-r border-border-primary bg-bg-surface pr-3 pt-4 text-right',
        className
      )}
    >
      {numbers.map((num) => (
        <span
          key={num}
          className="font-mono text-xs leading-6 text-text-tertiary"
        >
          {num}
        </span>
      ))}
    </div>
  );
}

export interface CodeInputTextareaProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function CodeInputTextarea({
  value,
  onChange,
  className,
}: CodeInputTextareaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn(
        'flex-1 resize-none bg-transparent p-4 font-mono text-xs leading-6 text-text-primary outline-none placeholder:text-text-tertiary',
        className
      )}
      spellCheck={false}
    />
  );
}
