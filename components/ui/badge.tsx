import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border border-border text-foreground hover:bg-muted/50",
        gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-sm",
        glow: "bg-slate-900 text-white shadow-[0_0_8px_rgba(255,255,255,0.15)] ring-1 ring-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
  dotColor?: string // e.g., "bg-green-400"
}

function Badge({ className, variant, dot, dotColor = "bg-green-400", children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && <span className={cn("w-2 h-2 rounded-full mr-2", dotColor)} />}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
