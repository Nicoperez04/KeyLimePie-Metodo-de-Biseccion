import type React from "react"
interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return <div className={`max-w-6xl mx-auto px-4 md:px-6 py-10 ${className}`}>{children}</div>
}
