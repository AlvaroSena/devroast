import { Suspense } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';
import { DiffLine } from '@/components/ui/diff-line';
import { ToggleDemo } from './toggle-demo';

const sectionStyles = 'space-y-4 p-8 border border-border-primary rounded-lg';

function CodeBlockWrapper({
  code,
  filename,
}: {
  code: string;
  filename?: string;
}) {
  return (
    <Suspense
      fallback={
        <div className="font-mono text-xs text-text-secondary">Loading...</div>
      }
    >
      <CodeBlock code={code} filename={filename} />
    </Suspense>
  );
}

export default function ComponentsDemo() {
  return (
    <main className="min-h-screen bg-zinc-50 p-8 dark:bg-bg-page">
      <div className="mx-auto max-w-4xl space-y-12">
        <h1 className="font-mono text-3xl font-bold">Components Demo</h1>

        <section className={sectionStyles}>
          <h2 className="font-mono text-xl font-semibold">Button</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-mono text-sm text-text-secondary">
                Variants
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">$ roast_my_code</Button>
                <Button variant="secondary">$ share_roast</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">$ view_all &gt;&gt;</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-sm text-text-secondary">
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Icon button" />
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-mono text-sm text-text-secondary">
                States
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionStyles}>
          <h2 className="font-mono text-xl font-semibold">Toggle</h2>
          <ToggleDemo />
        </section>

        <section className={sectionStyles}>
          <h2 className="font-mono text-xl font-semibold">Badge</h2>

          <div className="flex flex-wrap gap-6">
            <Badge variant="critical">
              <span className="h-2 w-2 rounded-full bg-accent-red" />
              critical
            </Badge>
            <Badge variant="warning">
              <span className="h-2 w-2 rounded-full bg-accent-amber" />
              warning
            </Badge>
            <Badge variant="good">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              good
            </Badge>
            <Badge variant="needs_serious_help">
              <span className="h-2 w-2 rounded-full bg-accent-red" />
              needs_serious_help
            </Badge>
          </div>
        </section>

        <section className={sectionStyles}>
          <h2 className="font-mono text-xl font-semibold">Card</h2>

          <Card>
            <CardHeader>
              <span className="h-2 w-2 rounded-full bg-accent-red" />
              <Badge variant="critical">critical</Badge>
            </CardHeader>
            <CardTitle>using var instead of const/let</CardTitle>
            <CardDescription>
              the var keyword is function-scoped rather than block-scoped, which
              can lead to unexpected behavior and bugs. modern javascript uses
              const for immutable bindings and let for mutable ones.
            </CardDescription>
          </Card>
        </section>

        <section className={sectionStyles}>
          <h2 className="font-mono text-xl font-semibold">CodeBlock</h2>

          <CodeBlockWrapper
            code={`function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}`}
            filename="calculate.js"
          />
        </section>

        <section className={sectionStyles}>
          <h2 className="font-mono text-xl font-semibold">DiffLine</h2>

          <div className="flex flex-col">
            <DiffLine type="removed">var total = 0;</DiffLine>
            <DiffLine type="added">const total = 0;</DiffLine>
            <DiffLine type="context">
              for (let i = 0; i &lt; items.length; i++) {'{'}
            </DiffLine>
          </div>
        </section>
      </div>
    </main>
  );
}
