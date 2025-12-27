'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Button, { ButtonProps } from '@/components/ui/Button'

interface AnimatedButtonProps extends ButtonProps {
  enableRipple?: boolean
  loading?: boolean
}

export default function AnimatedButton({
  children,
  enableRipple = true,
  loading = false,
  className,
  onClick,
  ...props
}: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleIdRef = useRef(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (enableRipple && !prefersReducedMotion && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = rippleIdRef.current++
      
      setRipples((prev) => [...prev, { x, y, id }])
      
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
      }, 600)
    }
    
    onClick?.(e)
  }

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="relative inline-block"
    >
      <Button
        ref={buttonRef}
        onClick={handleClick}
        disabled={loading}
        className={cn('relative overflow-hidden', className)}
        {...props}
      >
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute rounded-full bg-white opacity-50"
              initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y }}
              animate={{ width: 200, height: 200, x: ripple.x - 100, y: ripple.y - 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{ pointerEvents: 'none' }}
            />
          ))}
        </AnimatePresence>
        
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading && (
            <motion.span
              className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          )}
          {children}
        </span>
      </Button>
    </motion.div>
  )
}

