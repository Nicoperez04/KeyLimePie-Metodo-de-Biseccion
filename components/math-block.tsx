"use client"

import { useEffect, useRef } from "react"

interface MathBlockProps {
  children: string
  display?: boolean
  className?: string
}

export function MathBlock({ children, display = false, className = "" }: MathBlockProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const renderMath = async () => {
        try {
          const katex = await import("katex")

          if (ref.current) {
            katex.default.render(children, ref.current, {
              displayMode: display,
              throwOnError: false,
              strict: false,
            })
          }
        } catch (error) {
          // Fallback to plain text if KaTeX fails
          if (ref.current) {
            ref.current.textContent = children
          }
        }
      }

      renderMath()
    }
  }, [children, display])

  return <div ref={ref} className={`${display ? "block text-center my-4" : "inline"} ${className}`} />
}
