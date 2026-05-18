import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors',
  {
    variants: {
      variant: {
        default: 'border-ink-300 bg-ink-200/60 text-bone-200 backdrop-blur',
        accent: 'border-magenta-600/40 bg-magenta-600/10 text-magenta-400',
        cool: 'border-cobalt-500/40 bg-cobalt-500/10 text-cobalt-300',
        warm: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
