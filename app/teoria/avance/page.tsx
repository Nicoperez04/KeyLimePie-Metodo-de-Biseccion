import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer } from "@/components/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MathBlock } from "@/components/math-block"
import { FlowDiagram } from "@/components/flow-diagram"
import { TrendingUp, AlertTriangle, CheckCircle, XCircle, Calculator, Zap, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function TeoriaAvancePage() {
  const a = 1 // Declare variable a
  const b = 2 // Declare variable b
  const n = 3 // Declare variable n
  const min = 4 // Declare variable min
  const b_n = 5 // Declare variable b_n
  const a_n = 6 // Declare variable a_n
  const x = 7 // Declare variable x

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 text-center">
          <div className="absolute inset-0 gradient-lime opacity-10"></div>
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge variant="secondary" className="mb-4">
                Parte II
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Análisis Avanzado</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Convergencia, criterios de paro y casos especiales
              </p>
            </div>
          </PageContainer>
        </section>

        {/* Advanced Theory Content */}
        <section className="py-12 px-4">
          <PageContainer>
            <div className="max-w-4xl mx-auto">
              <Accordion type="multiple" className="space-y-4">
                {/* Convergencia y cota de error */}
                <AccordionItem value="convergencia" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Convergencia y cota de error</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 pt-4">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-lg">Teorema de Convergencia</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p>El error en la iteración n está acotado por:</p>
                        <div className="bg-background border rounded-lg p-4 text-center">
                          <MathBlock display={`|p_n - p| \\leq \\frac{${b} - ${a}}{2^${n}}`}></MathBlock>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          donde p es la raíz exacta y p_n es la aproximación en la iteración n.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base">Orden de Convergencia</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center mb-3">
                            <MathBlock
                              display={`p_n = p + O\\left(\\left(\\frac{1}{2}\\right)^${n}\\right)`}
                            ></MathBlock>
                          </div>
                          <p className="text-sm text-muted-foreground">Convergencia lineal con razón 1/2</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-accent/10 border-accent/30">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center space-x-2">
                            <Calculator className="h-4 w-4" />
                            <span>¿Cuántas iteraciones?</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center mb-3">
                            <MathBlock
                              display={`n_{${min}} = \\left\\lceil \\log_2\\left(\\frac{${b}-${a}}{\\varepsilon}\\right) \\right\\rceil`}
                            ></MathBlock>
                          </div>
                          <p className="text-sm text-muted-foreground">Para alcanzar tolerancia ε</p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Criterios de paro */}
                <AccordionItem value="criterios" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Criterios de paro</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="grid gap-4">
                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center space-x-2">
                            <Target className="h-4 w-4" />
                            <span>1. Por número de iteraciones</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">Detener después de N iteraciones predefinidas</p>
                          <div className="bg-background border rounded p-2 text-center">
                            <MathBlock display={`k \\geq N`}></MathBlock>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center space-x-2">
                            <Zap className="h-4 w-4" />
                            <span>2. Por error del intervalo</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">Cuando el error estimado es suficientemente pequeño</p>
                          <div className="bg-background border rounded p-2 text-center">
                            <MathBlock display={`e_n = \\frac{${b_n} - ${a_n}}{2} \\leq \\varepsilon`}></MathBlock>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center space-x-2">
                            <Calculator className="h-4 w-4" />
                            <span>3. Por valor de la función (opcional)</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">Cuando f(m) está cerca de cero</p>
                          <div className="bg-background border rounded p-2 text-center">
                            <MathBlock display={`|f(m_${n})| \\leq \\tau`}></MathBlock>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Ventajas y Desventajas */}
                <AccordionItem value="ventajas" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Ventajas y Desventajas</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Ventajas */}
                      <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center space-x-2 text-green-700 dark:text-green-300">
                            <CheckCircle className="h-5 w-5" />
                            <span>Ventajas</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <span className="text-green-600 dark:text-green-400">✓</span>
                              <span className="text-sm">Robusto y siempre converge</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-green-600 dark:text-green-400">✓</span>
                              <span className="text-sm">Algoritmo simple de implementar</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-green-600 dark:text-green-400">✓</span>
                              <span className="text-sm">No requiere calcular derivadas</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-green-600 dark:text-green-400">✓</span>
                              <span className="text-sm">Número de iteraciones conocido a priori</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-green-600 dark:text-green-400">✓</span>
                              <span className="text-sm">No depende de la forma específica de f</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Desventajas */}
                      <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center space-x-2 text-red-700 dark:text-red-300">
                            <XCircle className="h-5 w-5" />
                            <span>Desventajas</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <span className="text-red-600 dark:text-red-400">✗</span>
                              <span className="text-sm">Convergencia relativamente lenta</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-red-600 dark:text-red-400">✗</span>
                              <span className="text-sm">|f(m_k)| no siempre decrece monótonamente</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-red-600 dark:text-red-400">✗</span>
                              <span className="text-sm">La cota de error puede ser conservadora</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-red-600 dark:text-red-400">✗</span>
                              <span className="text-sm">Requiere cambio de signo en el intervalo</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Casos donde NO usar bisección */}
                <AccordionItem value="casos-invalidos" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <span className="text-lg font-semibold">Casos donde NO usar bisección</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <Alert className="border-destructive/50 bg-destructive/5">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Atención:</strong> El método de bisección no se puede aplicar en los siguientes casos:
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <Card className="bg-destructive/5 border-destructive/20">
                        <CardHeader>
                          <CardTitle className="text-base text-destructive">Sin cambio de signo</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">
                            Cuando <MathBlock display={`f(${a}) \\cdot f(${b}) \\geq 0`}></MathBlock>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Ejemplo: <MathBlock display={`f(x) = x^2`}></MathBlock> en [-1, 2] →{" "}
                            <MathBlock display={`f(-1) \\cdot f(2) = 1 \\cdot 4 = 4 \\gt 0`}></MathBlock>
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-destructive/5 border-destructive/20">
                        <CardHeader>
                          <CardTitle className="text-base text-destructive">Discontinuidades</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">Cuando f no es continua en [a,b]</p>
                          <p className="text-xs text-muted-foreground">
                            Ejemplo: <MathBlock display={`f(x) = \\frac{1}{${x}}`}></MathBlock> en [-1, 1] (discontinua
                            en x = 0)
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-destructive/5 border-destructive/20">
                        <CardHeader>
                          <CardTitle className="text-base text-destructive">Intervalo sin raíz</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">Aunque haya cambio de signo, puede no haber raíz</p>
                          <p className="text-xs text-muted-foreground">Raro, pero posible con funciones patológicas</p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Flow Diagram Section */}
              <div className="mt-12">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">Diagrama de Flujo Interactivo</CardTitle>
                    <p className="text-center text-muted-foreground">
                      Visualización del algoritmo de bisección paso a paso
                    </p>
                  </CardHeader>
                  <CardContent>
                    <FlowDiagram />
                  </CardContent>
                </Card>
              </div>

              {/* Navigation to Practice */}
              <div className="mt-12 text-center">
                <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">¡Hora de practicar!</h3>
                    <p className="text-muted-foreground mb-6">Aplica lo aprendido con nuestro simulador interactivo</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg">
                        <Link href="/practica">Ir al Simulador</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link href="/ejercicios">Ver Ejercicios</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  )
}
