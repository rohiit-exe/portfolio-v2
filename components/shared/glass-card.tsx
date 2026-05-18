import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = false, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass-panel p-6 md:p-8',
        hover && 'glass-panel-hover',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
);
GlassCard.displayName = 'GlassCard';
