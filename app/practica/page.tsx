"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer } from "@/components/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FunctionInput } from "@/components/function-input"
import { BolzanoCheck } from "@/components/bolzano-check"
import { BisectionPlayer } from "@/components/bisection-player"
import { ConvergenceCharts } from "@/components/convergence-charts"
import { NminCalculator } from "@/components/nmin-calculator"
import { useBisectionStore } from "@/lib/bisection-store"
import { FlaskConical, Play, BarChart3 } from "lucide-react"

const presets = [
  { name: "x² - 2", fx: "x^2 - 2", a: 1, b: 2, description: "Raíz cuadrada de 2" },
  { name: "x³ - x - 2", fx: "x^3 - x - 2", a: 1, b: 2, description: "Polinomio cúbico" },
  { name: "cos(x) - x", fx: "cos(x) - x", a: 0, b: 1, description: "Ecuación trascendente" },
  { name: "x² (inválido)", fx: "x^2", a: -1, b: 2, description: "Sin cambio de signo" },
]

export default function PracticaPage() {
  const { fx, a, b, epsilon, maxIterations, setFunction, setInterval, setParameters, solve, reset } =
    useBisectionStore()

  const [aInput, setAInput] = useState(a.toString())
  const [bInput, setBInput] = useState(b.toString())
  const [epsInput, setEpsInput] = useState(epsilon.toString())
  const [maxIterInput, setMaxIterInput] = useState(maxIterations.toString())

  const handleSolve = () => {
    const aNum = Number.parseFloat(aInput)
    const bNum = Number.parseFloat(bInput)
    const epsNum = Number.parseFloat(epsInput)
    const maxIterNum = Number.parseInt(maxIterInput)

    if (isNaN(aNum) || isNaN(bNum) || isNaN(epsNum) || isNaN(maxIterNum)) {
      alert("Por favor, ingresa valores numéricos válidos")
      return
    }

    if (aNum >= bNum) {
      alert("El valor de 'a' debe ser menor que 'b'")
      return
    }

    if (epsNum <= 0) {
      alert("La tolerancia debe ser positiva")
      return
    }

    setInterval(aNum, bNum)
    setParameters(epsNum, maxIterNum)
    solve()
  }

  const loadPreset = (preset: (typeof presets)[0]) => {
    setFunction(preset.fx)
    setAInput(preset.a.toString())
    setBInput(preset.b.toString())
    setInterval(preset.a, preset.b)
    reset()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 text-center">
          <div className="absolute inset-0 gradient-lime opacity-10"></div>
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">SIMULACIÓN</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Experimenta con el método de bisección paso a paso
              </p>
            </div>
          </PageContainer>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <PageContainer>
            <Tabs defaultValue="bolzano" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bolzano" className="flex items-center space-x-2">
                  <FlaskConical className="h-4 w-4" />
                  <span>Bolzano Tester</span>
                </TabsTrigger>
                <TabsTrigger value="simulator" className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Simulador</span>
                </TabsTrigger>
                <TabsTrigger value="convergence" className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>Convergencia</span>
                </TabsTrigger>
              </TabsList>

              {/* Bolzano Tester */}
              <TabsContent value="bolzano" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Configuration */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Configuración</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FunctionInput value={fx} onChange={setFunction} />

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="a-input">Límite inferior (a)</Label>
                          <Input
                            id="a-input"
                            value={aInput}
                            onChange={(e) => setAInput(e.target.value)}
                            placeholder="1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="b-input">Límite superior (b)</Label>
                          <Input
                            id="b-input"
                            value={bInput}
                            onChange={(e) => setBInput(e.target.value)}
                            placeholder="2"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium">Ejemplos predefinidos:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {presets.map((preset, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => loadPreset(preset)}
                              className="text-left justify-start h-auto p-3"
                            >
                              <div>
                                <p className="font-medium">{preset.name}</p>
                                <p className="text-xs text-muted-foreground">{preset.description}</p>
                              </div>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Bolzano Check Result */}
                  <BolzanoCheck fx={fx} a={Number.parseFloat(aInput) || 0} b={Number.parseFloat(bInput) || 0} />
                </div>
              </TabsContent>

              {/* Bisection Simulator */}
              <TabsContent value="simulator" className="space-y-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Parameters */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Parámetros</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="eps-input">Tolerancia (ε)</Label>
                        <Input
                          id="eps-input"
                          value={epsInput}
                          onChange={(e) => setEpsInput(e.target.value)}
                          placeholder="1e-6"
                        />
                      </div>

                      <div>
                        <Label htmlFor="maxiter-input">Máx. iteraciones</Label>
                        <Input
                          id="maxiter-input"
                          value={maxIterInput}
                          onChange={(e) => setMaxIterInput(e.target.value)}
                          placeholder="100"
                        />
                      </div>

                      <div className="space-y-2">
                        <Button onClick={handleSolve} className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Resolver
                        </Button>
                        <Button onClick={reset} variant="outline" className="w-full bg-transparent">
                          Reiniciar
                        </Button>
                      </div>

                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>
                          <strong>Función:</strong> {fx}
                        </p>
                        <p>
                          <strong>Intervalo:</strong> [{aInput}, {bInput}]
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Simulation Results */}
                  <div className="lg:col-span-2">
                    <BisectionPlayer />
                  </div>
                </div>
              </TabsContent>

              {/* Convergence Analysis */}
              <TabsContent value="convergence" className="space-y-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  <NminCalculator />
                  <div className="lg:col-span-2">
                    <ConvergenceCharts />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  )
}
