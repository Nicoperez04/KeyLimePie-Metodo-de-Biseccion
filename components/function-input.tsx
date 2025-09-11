"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

interface FunctionInputProps {
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  className?: string
}

export function FunctionInput({
  value,
  onChange,
  label = "Función f(x)",
  placeholder = "Ej: x^2 - 2, cos(x) - x",
  className = "",
}: FunctionInputProps) {
  const [error, setError] = useState<string | null>(null)

  const handleChange = (newValue: string) => {
    setError(null)

    // Basic validation
    if (newValue.trim() === "") {
      setError("La función no puede estar vacía")
      return
    }

    // Check for dangerous patterns
    if (newValue.includes("eval") || newValue.includes("Function")) {
      setError("Función no permitida por seguridad")
      return
    }

    onChange(newValue)
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor="function-input">{label}</Label>
      <Input
        id="function-input"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className={error ? "border-destructive" : ""}
      />
      {error && (
        <Alert variant="destructive" className="py-2">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-sm">{error}</AlertDescription>
        </Alert>
      )}
      <p className="text-xs text-muted-foreground">Formatos soportados: x^2, cos(x), sin(x), tan(x), sqrt(x), log(x)</p>
    </div>
  )
}
