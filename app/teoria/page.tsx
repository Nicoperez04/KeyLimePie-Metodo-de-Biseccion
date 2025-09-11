import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer } from "@/components/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MathBlock } from "@/components/math-block"
import { BookOpen, ArrowRight, Info, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function TeoriaPage() {
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
                Parte I
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Teoría de Raíces y Bisección</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Fundamentos matemáticos del método de bisección
              </p>
            </div>
          </PageContainer>
        </section>

        {/* Theory Content */}
        <section className="py-12 px-4">
          <PageContainer>
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">Test de renderizado matemático:</h3>
                <p>
                  Inline: <MathBlock>x^2 + 1 = 0</MathBlock>
                </p>
                <p>Display:</p>
                <MathBlock display>f(x) = x^3 - 2x - 5</MathBlock>
              </div>

              <Accordion type="multiple" className="space-y-4">
                {/* Raíz de una función */}
                <AccordionItem value="raiz" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Raíz de una función</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <Card className="bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-lg">Definición</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          Una raíz de una función f(x) es un valor{" "}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="font-mono bg-muted px-2 py-1 rounded cursor-help">x_i</span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Valor de x donde la función se hace cero</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>{" "}
                          tal que:
                        </p>
                        <div className="bg-background border rounded-lg p-4 text-center">
                          <MathBlock display="f(x_i) = 0" />
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Ejemplos:</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>
                            Polinomios: <MathBlock>x^2 - 2 = 0</MathBlock> tiene raíces en{" "}
                            <MathBlock>x = \pm\sqrt{2}</MathBlock>
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>
                            Ecuaciones implícitas: <MathBlock>\tan(x) - x = 0</MathBlock>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Continuidad */}
                <AccordionItem value="continuidad" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Continuidad</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p>Una función f(x) es continua en un punto x = a si se cumplen tres condiciones:</p>

                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-muted/30">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">1. Existencia</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <MathBlock display="f(a)" />
                            <p className="text-sm text-muted-foreground mt-2">existe</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">2. Límite</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <MathBlock display="\lim_{x \to a} f(x)" />
                            <p className="text-sm text-muted-foreground mt-2">existe</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">3. Coincidencia</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <MathBlock display="\lim_{x \to a} f(x) = f(a)" />
                            <p className="text-sm text-muted-foreground mt-2">son iguales</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Teorema de Bolzano */}
                <AccordionItem value="bolzano" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Info className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Teorema de Bolzano (Valor Intermedio)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <Info className="h-5 w-5" />
                          <span>Enunciado del Teorema</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p>Si f es continua en [a,b] y:</p>
                        <div className="bg-background border rounded-lg p-4 text-center">
                          <MathBlock display="f(a) \cdot f(b) < 0" />
                        </div>
                        <p>Entonces existe p ∈ (a,b) tal que:</p>
                        <div className="bg-background border rounded-lg p-4 text-center">
                          <MathBlock display="f(p) = 0" />
                        </div>
                      </CardContent>
                    </Card>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Precondición clave:</strong> Este teorema es la base fundamental que permite aplicar el
                        método de bisección. Sin el cambio de signo <MathBlock display="f(a) \cdot f(b) < 0" />, no
                        podemos garantizar la existencia de una raíz en el intervalo.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                {/* Método de Bisección - Idea */}
                <AccordionItem value="idea" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Método de Bisección — Idea</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p>El algoritmo se basa en dividir repetidamente el intervalo por la mitad:</p>

                    <div className="bg-background border rounded-lg p-6">
                      <div className="text-center mb-4">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="inline-block cursor-help">
                                <MathBlock display="m_k = \frac{a_k + b_k}{2}" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Punto medio en la iteración k</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-center">Algoritmo:</h4>
                          <ol className="space-y-2 text-sm">
                            <li className="flex items-start space-x-2">
                              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                1
                              </span>
                              <span>
                                Verificar <MathBlock display="f(a) \cdot f(b) < 0" />
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                2
                              </span>
                              <span>
                                Calcular <MathBlock display="m = \frac{a + b}{2}" />
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                3
                              </span>
                              <span>Evaluar f(m)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                4
                              </span>
                              <span>Actualizar intervalo</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                5
                              </span>
                              <span>Repetir hasta convergencia</span>
                            </li>
                          </ol>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-center">Reglas de actualización:</h4>
                          <div className="space-y-3 text-sm">
                            <Card className="p-3 bg-muted/30">
                              <p className="font-medium mb-2">Si sign(f(a)) = sign(f(m)):</p>
                              <div className="text-center">
                                <MathBlock display="a = m" />
                              </div>
                            </Card>

                            <Card className="p-3 bg-muted/30">
                              <p className="font-medium mb-2">Si no:</p>
                              <div className="text-center">
                                <MathBlock display="b = m" />
                              </div>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Error Bound */}
                <AccordionItem value="error" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Cota de Error</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <Card className="bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-lg">Teorema de Convergencia</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Después de n iteraciones, el error está acotado por:</p>
                        <div className="bg-background border rounded-lg p-4 text-center">
                          <MathBlock display="|p_n - p| \leq \frac{b - a}{2^n}" />
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                          Donde p es la raíz exacta y p_n es la aproximación en la iteración n.
                        </p>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                {/* Pros y Contras */}
                <AccordionItem value="pros-cons" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Ventajas y Desventajas</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-800 dark:text-green-200">Ventajas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start space-x-2">
                              <span className="text-green-600">✓</span>
                              <span>Siempre converge si se cumplen las condiciones</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-600">✓</span>
                              <span>Robusto y estable numéricamente</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-600">✓</span>
                              <span>Fácil de implementar</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-600">✓</span>
                              <span>Error predecible y acotado</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-800 dark:text-red-200">Desventajas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start space-x-2">
                              <span className="text-red-600">✗</span>
                              <span>Convergencia lenta (lineal)</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-red-600">✗</span>
                              <span>Requiere cambio de signo</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-red-600">✗</span>
                              <span>Solo encuentra una raíz por intervalo</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-red-600">✗</span>
                              <span>No funciona con raíces múltiples</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Navigation to Part II */}
              <div className="mt-12 text-center">
                <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">¿Listo para profundizar?</h3>
                    <p className="text-muted-foreground mb-6">
                      Continúa con el análisis de convergencia, criterios de paro y casos especiales
                    </p>
                    <Button asChild size="lg">
                      <Link href="/teoria/avance" className="flex items-center space-x-2">
                        <span>Ir a Teoría Avanzada</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
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
