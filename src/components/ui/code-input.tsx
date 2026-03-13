'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface CodeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const DEFAULT_CODE = `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// TODO: handle tax calculation
// TODO: handle currency conversion`;

const LINE_NUMBERS = Array.from({ length: 20 }, (_, i) => i + 1);

export function CodeInput({
  value = DEFAULT_CODE,
  onChange,
  className,
  ...props
}: CodeInputProps) {
  const [code, setCode] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
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
      <div className="flex h-10 items-center justify-between border-b border-border-primary px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-accent-red" />
          <span className="h-3 w-3 rounded-full bg-accent-amber" />
          <span className="h-3 w-3 rounded-full bg-accent-green" />
        </div>
      </div>
      <div className="flex min-h-[320px] flex-1">
        <div className="flex w-12 shrink-0 flex-col justify-start border-r border-border-primary bg-bg-surface pr-3 pt-4 text-right">
          {LINE_NUMBERS.map((num) => (
            <span
              key={num}
              className="font-mono text-xs leading-6 text-text-tertiary"
            >
              {num}
            </span>
          ))}
        </div>
        <textarea
          value={code}
          onChange={handleChange}
          className="flex-1 resize-none bg-transparent p-4 font-mono text-xs leading-6 text-text-primary outline-none placeholder:text-text-tertiary"
          spellCheck={false}
          {...props}
        />
      </div>
    </div>
  );
}
