# Padrões de Componentes UI

## Estrutura de Arquivos

```
src/components/ui/
├── button.tsx
├── agents.md        # Este arquivo
└── [component].tsx  # Novos componentes
```

## Padrões de Implementação

### 1. Named Exports

Sempre use named exports, nunca default exports.

```typescript
// ✅ Correto
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(...);

// ❌ Errado
export default function Button() { ... }
```

### 2. Extender Props Nativas

Use `forwardRef` e extenda as propriedades nativas do elemento HTML.

```typescript
import { type ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
}
```

### 3. Usar tailwind-variants

Não use `twMerge` ou `clsx` diretamente com `tailwind-variants`. O `tv()` já faz o merge automaticamente quando você passa `className` como propriedade.

```typescript
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'classes base sempre aplicadas',
  variants: {
    variant: {
      default: 'classes da variant default',
      secondary: 'classes da variant secondary',
    },
    size: {
      sm: 'classes do tamanho sm',
      md: 'classes do tamanho md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

// ✅ Correto - passando className diretamente
<button className={buttonVariants({ variant, size, className })} />

// ❌ Errado - não use cn/twMerge com tv
<button className={cn(buttonVariants({ variant, size }), className)} />
```

### 4. Cores Tailwind

Prefira cores Tailwind nativas ao invés de hexadecimais. Use hex apenas quando não houver correspondência.

```typescript
// ✅ Correto
"bg-emerald-500 text-zinc-950";

// ❌ Errado
"bg-[#10B981] text-[#0A0A0A]";
```

### 5. Props com forwardRef

```typescript
export const Component = forwardRef<HTMLElementType, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={componentVariants({ variant, className })}
        {...props}
      />
    );
  },
);

Component.displayName = 'Component';
```

### 6. Nomenclatura de Arquivos

- Arquivo: `kebab-case.tsx`
- Componente: `PascalCase`
- Interface: `ComponentNameProps`

```typescript
// arquivo: button.tsx
export interface ButtonProps { ... }
export const Button = ...;
```

## Checklist para Novos Componentes

- [ ] Named export
- [ ] Extende props nativas do HTML
- [ ] Usa `forwardRef`
- [ ] Usa `tailwind-variants` (não usa `cn`/`twMerge`)
- [ ] Cores Tailwind nativas
- [ ] Interface com `ComponentNameProps`
- [ ] `displayName` definido
