import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-black disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]'
  
  const variants = {
    primary: 'bg-primary-black text-primary-white hover:bg-gray-dark hover:scale-105 focus:ring-primary-black active:scale-95',
    secondary: 'bg-transparent border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-primary-white hover:scale-105 focus:ring-primary-black active:scale-95',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
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

