"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Calculator, ArrowDown, ArrowRight } from "lucide-react"

export function FlowDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-col items-center space-y-6">
        {/* Start */}
        <Card className="w-64 bg-primary/10 border-primary/30">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="font-semibold">Inicio</span>
            </div>
            <p className="text-sm text-muted-foreground">Dados f(x), a, b</p>
          </CardContent>
        </Card>

        <ArrowDown className="h-6 w-6 text-muted-foreground" />

        {/* Check Bolzano */}
        <Card className="w-64 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="font-semibold">¿f(a)·f(b) &lt; 0?</span>
            </div>
            <p className="text-sm text-muted-foreground">Verificar Bolzano</p>
          </CardContent>
        </Card>

        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <Badge variant="destructive" className="px-3 py-1">
              NO
            </Badge>
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
            <Card className="w-48 bg-destructive/10 border-destructive/30">
              <CardContent className="p-3 text-center">
                <XCircle className="h-5 w-5 text-destructive mx-auto mb-1" />
                <p className="text-sm font-medium">No aplicar método</p>
                <p className="text-xs text-muted-foreground">Ajustar intervalo</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Badge className="px-3 py-1 bg-green-600 text-white">SÍ</Badge>
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
            <Card className="w-48 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-3 text-center">
                <CheckCircle className="h-5 w-5 text-green-600 mx-auto mb-1" />
                <p className="text-sm font-medium">Continuar</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <ArrowDown className="h-6 w-6 text-muted-foreground" />

        {/* Calculate m */}
        <Card className="w-64 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Calcular m</span>
            </div>
            <p className="text-sm">m = (a + b) / 2</p>
          </CardContent>
        </Card>

        <ArrowDown className="h-6 w-6 text-muted-foreground" />

        {/* Evaluate f(m) */}
        <Card className="w-64 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="font-semibold">Evaluar f(m)</span>
            </div>
            <p className="text-sm text-muted-foreground">Calcular valor de función</p>
          </CardContent>
        </Card>

        <ArrowDown className="h-6 w-6 text-muted-foreground" />

        {/* Update interval */}
        <Card className="w-80 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <span className="font-semibold">Actualizar [a,b]</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-background border rounded p-2">
                <p className="font-medium">Si sign(f(a)) = sign(f(m))</p>
                <p>a ← m</p>
              </div>
              <div className="bg-background border rounded p-2">
                <p className="font-medium">Si no</p>
                <p>b ← m</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <ArrowDown className="h-6 w-6 text-muted-foreground" />

        {/* Stop criteria */}
        <Card className="w-64 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="font-semibold">¿Criterio de paro?</span>
            </div>
            <p className="text-sm text-muted-foreground">e_k ≤ ε o k ≥ N</p>
          </CardContent>
        </Card>

        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <Badge variant="secondary" className="px-3 py-1">
              NO
            </Badge>
            <div className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4 text-muted-foreground rotate-180" />
              <span className="text-sm text-muted-foreground">Repetir</span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Badge className="px-3 py-1 bg-green-600 text-white">SÍ</Badge>
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
            <Card className="w-48 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-3 text-center">
                <CheckCircle className="h-5 w-5 text-green-600 mx-auto mb-1" />
                <p className="text-sm font-medium">Raíz encontrada</p>
                <p className="text-xs text-muted-foreground">raíz ≈ m ± error</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
