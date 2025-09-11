"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Info } from "lucide-react"
import { BisectionEngine } from "@/lib/bisection-engine"

interface BolzanoCheckProps {
  fx: string
  a: number
  b: number
}

export function BolzanoCheck({ fx, a, b }: BolzanoCheckProps) {
  const engine = new BisectionEngine()

  let bolzanoResult
  let error: string | null = null

  try {
    bolzanoResult = engine.checkBolzano(fx, a, b)
  } catch (err) {
    error = err instanceof Error ? err.message : "Error evaluando función"
  }

  if (error) {
    return (
      <Card className="bg-destructive/5 border-destructive/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-destructive" />
            <span>Error en Verificación</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    )
  }

  const { fa, fb, product, valid } = bolzanoResult!

  return (
    <Card
      className={
        valid
          ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
          : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
      }
    >
      <CardHeader>
        <CardTitle className="text-lg flex items-center space-x-2">
          {valid ? (
            <>
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Bolzano OK</span>
              <Badge className="bg-green-600 text-white">✓</Badge>
            </>
          ) : (
            <>
              <XCircle className="h-5 w-5 text-red-600" />
              <span>No aplica</span>
              <Badge variant="destructive">[ {a} , {b} ]</Badge>
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <p className="font-medium">f(a) = f({a})</p>
            <p className="text-lg font-mono">{fa.toFixed(6)}</p>
          </div>
          <div className="text-center">
            <p className="font-medium">f(b) = f({b})</p>
            <p className="text-lg font-mono">{fb.toFixed(6)}</p>
          </div>
          <div className="text-center">
            <p className="font-medium">f(a) · f(b)</p>
            <p className="text-lg font-mono">{product.toFixed(6)}</p>
          </div>
        </div>

        {valid ? (
          <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
            <Info className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700 dark:text-green-300">
              <strong>Condición satisfecha:</strong> f(a) · f(b) = {product.toFixed(6)} &lt; 0. El método de bisección
              puede aplicarse.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert variant="destructive">
            <AlertDescription>
              <strong>Condición NO satisfecha:</strong> f(a) · f(b) = {product.toFixed(6)} ≥ 0. Ajusta el intervalo
              [a,b] para que haya cambio de signo.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
