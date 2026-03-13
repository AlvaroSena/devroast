'use client';

import { useState } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';

export function ToggleDemo() {
  const [toggleOn, setToggleOn] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Toggle checked={toggleOn} onCheckedChange={setToggleOn} />
          <span
            className={cn(
              'font-mono text-xs',
              toggleOn ? 'text-accent-green' : 'text-text-secondary'
            )}
          >
            roast mode
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Toggle />
          <span className="font-mono text-xs text-text-secondary">
            roast mode
          </span>
        </div>
      </div>
    </div>
  );
}
