"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
}

export function LazySection({ children, fallback, rootMargin = "200px" }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref}>
      {isVisible ? children : fallback || <div className="min-h-[200px]" />}
    </div>
  )
}
