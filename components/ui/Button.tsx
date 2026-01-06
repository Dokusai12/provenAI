import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseStyles = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-black disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] rounded-soft'
    
    const variants = {
      primary: 'bg-primary-black text-primary-white hover:bg-gray-dark focus:ring-primary-black active:scale-[0.98]',
      secondary: 'bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white focus:ring-primary-black active:scale-[0.98]',
    }
    
    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

