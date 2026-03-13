import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface LeaderboardEntry {
  rank: number;
  score: number;
  code: string;
  language: string;
}

export interface LeaderboardTableProps extends HTMLAttributes<HTMLDivElement> {
  entries: LeaderboardEntry[];
}

export function LeaderboardTable({
  entries,
  className,
  ...props
}: LeaderboardTableProps) {
  return (
    <div
      className={cn('flex flex-col border border-border-primary', className)}
      {...props}
    >
      <LeaderboardTableHeader />
      {entries.map((entry) => (
        <LeaderboardTableRow key={entry.rank} entry={entry} />
      ))}
    </div>
  );
}

export interface LeaderboardTableHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export function LeaderboardTableHeader({
  className,
  ...props
}: LeaderboardTableHeaderProps) {
  return (
    <div
      className={cn(
        'flex h-10 items-center bg-bg-surface px-5 border-b border-border-primary',
        className
      )}
      {...props}
    >
      <span className="w-12 font-mono text-xs text-text-tertiary">#</span>
      <span className="w-16 font-mono text-xs text-text-tertiary">score</span>
      <span className="flex-1 font-mono text-xs text-text-tertiary">code</span>
      <span className="w-24 font-mono text-xs text-text-tertiary">lang</span>
    </div>
  );
}

export interface LeaderboardTableRowProps
  extends HTMLAttributes<HTMLDivElement> {
  entry: LeaderboardEntry;
}

export function LeaderboardTableRow({
  entry,
  className,
  ...props
}: LeaderboardTableRowProps) {
  return (
    <div
      className={cn(
        'flex items-center px-5 py-4 border-b border-border-primary last:border-b-0',
        className
      )}
      {...props}
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
  );
}

export interface LeaderboardTableFooterProps
  extends HTMLAttributes<HTMLDivElement> {
  total: number;
}

export function LeaderboardTableFooter({
  total,
  className,
  ...props
}: LeaderboardTableFooterProps) {
  return (
    <p
      className={cn(
        'text-center font-mono text-xs text-text-tertiary',
        className
      )}
      {...props}
    >
      showing top 3 of {total.toLocaleString()} · view full leaderboard &gt;&gt;
    </p>
  );
}
