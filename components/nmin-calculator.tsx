"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"
import { BisectionEngine } from "@/lib/bisection-engine"

export function NminCalculator() {
  const [a, setA] = useState<string>("1")
  const [b, setB] = useState<string>("2")
  const [epsilon, setEpsilon] = useState<string>("1e-6")
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    const engine = new BisectionEngine()
    const aNum = Number.parseFloat(a)
    const bNum = Number.parseFloat(b)
    const epsNum = Number.parseFloat(epsilon)

    if (isNaN(aNum) || isNaN(bNum) || isNaN(epsNum) || epsNum <= 0 || aNum >= bNum) {
      setResult(null)
      return
    }

    const nmin = engine.calculateMinIterations(aNum, bNum, epsNum)
    setResult(nmin)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="h-5 w-5" />
          <span>Calculadora n_min</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">Calcula el número mínimo de iteraciones necesarias</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="a-input">a</Label>
            <Input id="a-input" value={a} onChange={(e) => setA(e.target.value)} placeholder="1" />
          </div>
          <div>
            <Label htmlFor="b-input">b</Label>
            <Input id="b-input" value={b} onChange={(e) => setB(e.target.value)} placeholder="2" />
          </div>
          <div>
            <Label htmlFor="eps-input">ε</Label>
            <Input id="eps-input" value={epsilon} onChange={(e) => setEpsilon(e.target.value)} placeholder="1e-6" />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Calcular n_min
        </Button>

        {result !== null && (
          <div className="bg-muted/30 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Número mínimo de iteraciones:</p>
            <p className="text-2xl font-bold">{result}</p>
            <p className="text-xs text-muted-foreground mt-2">
              n_min = ⌈log₂((b-a)/ε)⌉ = ⌈log₂(({Number.parseFloat(b)} - {Number.parseFloat(a)}) /{" "}
              {Number.parseFloat(epsilon)})⌉
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
