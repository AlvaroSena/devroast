'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CodeInput } from '@/components/ui/code-input';
import { Toggle } from '@/components/ui/toggle';
import { MOCK_LEADERBOARD, MOCK_STATS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const [roastMode, setRoastMode] = useState(true);

  return (
    <main className="flex min-h-[calc(100vh-56px)] flex-col items-center px-10 py-20">
      <div className="flex w-full max-w-[960px] flex-col items-center gap-8">
        {/* Hero Title */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="font-mono text-3xl font-bold">
            <span className="text-accent-green">$</span>{' '}
            <span className="text-text-primary">
              paste your code. get roasted.
            </span>
          </h1>
          <p className="font-mono text-sm text-text-secondary">
            {
              "// drop your code below and we'll rate it — brutally honest or full roast mode"
            }
          </p>
        </div>

        {/* Code Input */}
        <CodeInput />

        {/* Actions Bar */}
        <div className="flex w-full max-w-[780px] items-center justify-between">
          <div className="flex items-center gap-4">
            <Toggle checked={roastMode} onCheckedChange={setRoastMode} />
            <span
              className={cn(
                'font-mono text-sm',
                roastMode ? 'text-accent-green' : 'text-text-tertiary'
              )}
            >
              roast mode
            </span>
            <span className="font-mono text-xs text-text-tertiary">
              {'// maximum sarcasm enabled'}
            </span>
          </div>
          <Button variant="default" size="md">
            $ roast_my_code
          </Button>
        </div>

        {/* Footer Hint */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-text-tertiary">
            {MOCK_STATS.totalCodesRoasted.toLocaleString()} codes roasted
          </span>
          <span className="font-mono text-xs text-text-tertiary">·</span>
          <span className="font-mono text-xs text-text-tertiary">
            avg score: {MOCK_STATS.avgScore}/10
          </span>
        </div>

        {/* Leaderboard Preview */}
        <div className="mt-8 flex w-full flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-sm font-bold">
              <span className="text-accent-green">{'//'}</span>{' '}
              <span className="text-text-primary">shame_leaderboard</span>
            </h2>
            <Button variant="link" size="sm">
              $ view_all &gt;&gt;
            </Button>
          </div>
          <p className="font-mono text-sm text-text-tertiary">
            {'// the worst code on the internet, ranked by shame'}
          </p>

          {/* Table */}
          <div className="flex flex-col border border-border-primary">
            {/* Header */}
            <div className="flex h-10 items-center bg-bg-surface px-5 border-b border-border-primary">
              <span className="w-12 font-mono text-xs text-text-tertiary">
                #
              </span>
              <span className="w-16 font-mono text-xs text-text-tertiary">
                score
              </span>
              <span className="flex-1 font-mono text-xs text-text-tertiary">
                code
              </span>
              <span className="w-24 font-mono text-xs text-text-tertiary">
                lang
              </span>
            </div>
            {/* Rows */}
            {MOCK_LEADERBOARD.map((entry) => (
              <div
                key={entry.rank}
                className="flex items-center px-5 py-4 border-b border-border-primary last:border-b-0"
              >
                <span className="w-12 font-mono text-sm text-text-tertiary">
                  #{entry.rank}
                </span>
                <span className="w-16 font-mono text-sm font-bold text-accent-red">
                  {entry.score}
                </span>
                <span className="flex-1 font-mono text-xs text-text-secondary truncate">
                  {entry.code}
                </span>
                <span className="w-24 font-mono text-xs text-text-tertiary">
                  {entry.language}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center font-mono text-xs text-text-tertiary">
            showing top 3 of {MOCK_STATS.totalCodesRoasted.toLocaleString()} ·
            view full leaderboard &gt;&gt;
          </p>
        </div>
      </div>
    </main>
  );
}
