import { codeToHtml } from 'shiki';

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export async function CodeBlock({
  code,
  language = 'javascript',
  filename,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: 'vesper',
  });

  return (
    <div className="w-full rounded-none border border-border-primary bg-bg-input">
      <div className="flex h-10 items-center gap-3 border-b border-border-primary px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-red" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
        {filename && (
          <>
            <div className="h-px flex-1 bg-border-primary" />
            <span className="font-mono text-xs text-text-tertiary">
              {filename}
            </span>
          </>
        )}
      </div>
      <div
        className="font-mono text-xs [&_pre]:!bg-transparent [&_pre]:!p-3 [&_pre]:!m-0 [&_pre]:!overflow-x-auto"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki returns sanitized HTML
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
