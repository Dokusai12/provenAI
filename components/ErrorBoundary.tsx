'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import Card from './ui/Card'
import Button from './ui/Button'
import Alert from './ui/Alert'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
    // In production, you could log to an error reporting service
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card variant="elevated" className="max-w-md w-full">
            <Alert variant="error" className="mb-6">
              <strong>Something went wrong</strong>
              <p className="mt-2 text-sm">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
            </Alert>
            <div className="space-y-4">
              <p className="text-body text-gray-dark">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </Button>
                <Button
                  variant="secondary"
                  onClick={this.handleReset}
                >
                  Try Again
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}


