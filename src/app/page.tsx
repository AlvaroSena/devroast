'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CodeInput } from '@/components/ui/code-input';
import {
  LeaderboardTable,
  LeaderboardTableFooter,
} from '@/components/ui/leaderboard-table';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/ui/section-title';
import { StatsBar } from '@/components/ui/stats-bar';
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
          <SectionDescription>
            drop your code below and we&apos;ll rate it — brutally honest or
            full roast mode
          </SectionDescription>
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
        <StatsBar
          totalCodes={MOCK_STATS.totalCodesRoasted}
          avgScore={MOCK_STATS.avgScore}
        />

        {/* Leaderboard Preview */}
        <div className="mt-8 flex w-full flex-col gap-6">
          <div className="flex items-center justify-between">
            <SectionTitle>shame_leaderboard</SectionTitle>
            <Button variant="link" size="sm">
              $ view_all &gt;&gt;
            </Button>
          </div>
          <SectionDescription>
            the worst code on the internet, ranked by shame
          </SectionDescription>

          <LeaderboardTable entries={MOCK_LEADERBOARD} />

          <LeaderboardTableFooter total={MOCK_STATS.totalCodesRoasted} />
        </div>
      </div>
    </main>
  );
}
