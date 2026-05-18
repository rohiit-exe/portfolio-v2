import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md border border-ink-300 bg-ink-100/60 px-4 py-2 text-sm text-bone-50 transition-colors',
        'placeholder:text-bone-400',
        'focus-visible:outline-none focus-visible:border-magenta-600 focus-visible:bg-ink-100',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

export { Input };
