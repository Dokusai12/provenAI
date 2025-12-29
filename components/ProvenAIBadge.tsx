import React from 'react'
import { cn } from '@/lib/utils'

interface ProvenAIBadgeProps {
  variant?: 'light' | 'dark'
  size?: 'small' | 'large'
  year?: number
  className?: string
}

export default function ProvenAIBadge({
  variant = 'light',
  size = 'large',
  year = 2025,
  className,
}: ProvenAIBadgeProps) {
  const diameter = size === 'small' ? 50 : 150
  const viewBoxSize = size === 'small' ? 50 : 150
  const radius = viewBoxSize / 2
  const center = radius
  const borderWidth = size === 'small' ? 2 : 3
  const fontSize = size === 'small' ? '6px' : '14px'
  const yearFontSize = size === 'small' ? '8px' : '20px'
  
  const strokeColor = variant === 'light' ? '#000000' : '#FFFFFF'
  const fillColor = variant === 'light' ? '#000000' : '#FFFFFF'
  const bgColor = variant === 'light' ? '#FFFFFF' : '#000000'

  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      className={cn('inline-block', className)}
      aria-label={`ProvenAI Certified ${year}`}
      role="img"
    >
      {/* Background circle */}
      <circle
        cx={center}
        cy={center}
        r={radius - borderWidth / 2}
        fill={bgColor}
        stroke={strokeColor}
        strokeWidth={borderWidth}
      />
      
      {/* Top text: "ProvenAI" */}
      <text
        x={center}
        y={size === 'small' ? 14 : 38}
        fontSize={fontSize}
        fill={fillColor}
        fontWeight="bold"
        textAnchor="middle"
        className="font-sans"
      >
        ProvenAI
      </text>
      
      {/* Bottom text: "CERTIFIED" */}
      <text
        x={center}
        y={size === 'small' ? viewBoxSize - 6 : viewBoxSize - 18}
        fontSize={fontSize}
        fill={fillColor}
        fontWeight="bold"
        textAnchor="middle"
        className="font-sans"
      >
        CERTIFIED
      </text>
      
      {/* Year in center */}
      <text
        x={center}
        y={center + (size === 'small' ? 3 : 7)}
        fontSize={yearFontSize}
        fill={fillColor}
        fontWeight="bold"
        textAnchor="middle"
        className="font-mono"
      >
        {year}
      </text>
      
      {/* Small checkmark icon */}
      {size === 'large' && (
        <path
          d={`M ${center - 8} ${center - 2} L ${center - 3} ${center + 3} L ${center + 8} ${center - 8}`}
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </svg>
  )
}

