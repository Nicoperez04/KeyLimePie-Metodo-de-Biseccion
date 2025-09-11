import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MathBlock } from "@/components/math-block";
import { BookOpen, ArrowRight, Info, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function TeoriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 text-center dark:bg-black">
          <div className="absolute inset-0 gradient-lime opacity-10 dark:hidden"></div>
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
              <Accordion type="multiple" className="space-y-4" defaultValue={["raiz"]}>
                {/* 1. Raíz de una función */}
                <AccordionItem value="raiz" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Raíz de una función</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 pt-4">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      {/* Columna Izquierda: La Definición Formal */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-center">La Definición Formal</h3>
                        <Card className="bg-muted/30 h-full">
                          <CardHeader>
                            <CardTitle>¿Qué es una raíz?</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p>
                              Una raíz (o cero) de una función f(x) es un valor{" "}
                              <span className="font-mono bg-muted px-2 py-1 rounded">p</span> en el dominio de f tal que la función evaluada en ese punto es igual a cero:
                            </p>
                            <div className="bg-background border rounded-lg p-4 text-center">
                              <MathBlock display>{"f(p) = 0"}</MathBlock>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Columna Derecha: La Interpretación Gráfica */}
                      <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-center">La Interpretación Gráfica</h3>
                          <Card className="border-primary/20 bg-primary/5 h-full">
                              <CardHeader>
                                  <CardTitle>¿Cómo se ve una raíz?</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                  <p>
                                      Imagina que dibujas la función en un plano cartesiano. Las raíces son, simplemente, los puntos donde la línea de la función <span className="font-bold text-primary">corta o toca el eje horizontal (el eje X)</span>.
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                      En esos puntos de cruce, la "altura" de la función (el valor de 'y' o f(x)) es exactamente cero.
                                  </p>
                              </CardContent>
                          </Card>
                      </div>
                    </div>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Idea Clave:</strong> Encontrar la raíz de <MathBlock>{"f(x)"}</MathBlock> es lo mismo que resolver la ecuación <MathBlock>{"f(x) = 0"}</MathBlock>
                      </AlertDescription>
                    </Alert>
                    <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Ejemplos Prácticos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 ml-4">
                              <li className="flex items-start space-x-2">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                  Para la función <MathBlock>{"f(x) = x^2 - 4"}</MathBlock>, las raíces son <MathBlock>{"p = 2"}</MathBlock> y <MathBlock>{"p = -2"}</MathBlock>.
                                </span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                  En la función <MathBlock>{"g(x) = \\cos(x)"}</MathBlock>, una raíz es <MathBlock>{"p = \\frac{\\pi}{2}"}</MathBlock>.
                                </span>
                              </li>
                            </ul>
                        </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Continuidad */}
                <AccordionItem value="continuidad" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Continuidad</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Intuitivamente, una función es continua si puedes dibujar su gráfica completa sin levantar el lápiz del papel. Formalmente, se deben cumplir tres condiciones en un punto x = a:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-muted/30">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">1. Existencia</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <MathBlock display>{"f(a)"}</MathBlock>
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
                            <MathBlock display>{"\\lim_{x \\to a} f(x)"}</MathBlock>
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
                            <MathBlock display>{"\\lim_{x \\to a} f(x) = f(a)"}</MathBlock>
                            <p className="text-sm text-muted-foreground mt-2">son iguales</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Teorema de Bolzano */}
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
                        <p>Si f es continua en [a,b] y sus valores en los extremos tienen signos opuestos:</p>
                        <div className="bg-background border rounded-lg p-4 text-center">
                          <MathBlock display>{"f(a) \\cdot f(b) < 0"}</MathBlock>
                        </div>
                        <p>Entonces, se garantiza que existe al menos una raíz p en el intervalo (a,b) tal que:</p>
                        <div className="bg-background border rounded-lg p-4 text-center">
                          <MathBlock display>{"f(p) = 0"}</MathBlock>
                        </div>
                      </CardContent>
                    </Card>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Precondición clave:</strong> Este teorema es la base del método de bisección. Sin el cambio de signo, no podemos asegurar que exista una raíz.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>
                
                {/* 4. Método de Bisección - Idea */}
                <AccordionItem value="idea" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Método de Bisección — La Idea</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 pt-4">
                    <p>El algoritmo se basa en dividir repetidamente el intervalo por la mitad y quedarse con la sub-mitad que mantiene el cambio de signo.</p>
                    <div className="text-center">
                        <p className="mb-2">Calculamos el punto medio en cada iteración k:</p>
                        <MathBlock display>{"m_k = \\frac{a_k + b_k}{2}"}</MathBlock>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Columna Izquierda: Algoritmo por pasos */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-center">Algoritmo por Pasos</h4>
                        <div className="space-y-2">
                          <Card className="p-3 bg-muted/30 flex items-center space-x-3">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                            <span className="text-sm">Verificar <MathBlock>{"f(a) \\cdot f(b) < 0"}</MathBlock></span>
                          </Card>
                          <Card className="p-3 bg-muted/30 flex items-center space-x-3">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                            <span className="text-sm">Calcular punto medio <MathBlock>{"m = (a + b) / 2"}</MathBlock></span>
                          </Card>
                          <Card className="p-3 bg-muted/30 flex items-center space-x-3">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                            <span className="text-sm">Evaluar el signo de <MathBlock>{"f(m)"}</MathBlock></span>
                          </Card>
                          <Card className="p-3 bg-muted/30 flex items-center space-x-3">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                            <span className="text-sm">Actualizar el intervalo para encerrar la raíz</span>
                          </Card>
                          <Card className="p-3 bg-muted/30 flex items-center space-x-3">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</span>
                            <span className="text-sm">Repetir hasta alcanzar la precisión deseada</span>
                          </Card>
                        </div>
                      </div>
                      {/* Columna Derecha: Reglas de Actualización */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-center">Reglas de Actualización</h4>
                        <div className="space-y-3 text-sm">
                          <Card className="p-3 bg-muted/30">
                            <p className="font-medium mb-2">Si <MathBlock>{"f(a) \\cdot f(m) < 0"}</MathBlock>:</p>
                            <p>La raíz está en <MathBlock>{"[a, m]"}</MathBlock>, entonces <MathBlock>{"b = m"}</MathBlock></p>
                          </Card>
                          <Card className="p-3 bg-muted/30">
                            <p className="font-medium mb-2">Si <MathBlock>{"f(b) \\cdot f(m) < 0"}</MathBlock>:</p>
                            <p>La raíz está en <MathBlock>{"[m, b]"}</MathBlock>, entonces <MathBlock>{"a = m"}</MathBlock></p>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                {/* 5. Cota de Error */}
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
                        <CardTitle className="text-lg">Convergencia Garantizada</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Después de n iteraciones, el error (la distancia máxima a la raíz real) está acotado por:</p>
                        <div className="bg-background border rounded-lg p-4 text-center">
                          <MathBlock display>{"|p_n - p| \\leq \\frac{b_0 - a_0}{2^n}"}</MathBlock>
                        </div>
                        <Alert variant="outline" className="mt-4">
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            Esta fórmula es la gran fortaleza del método: nos permite saber de antemano cuántas iteraciones necesitamos para garantizar un error tan pequeño como queramos.
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
                
                {/* 6. Pros y Contras */}
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
                              <span>Siempre converge si se cumplen las condiciones.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-600">✓</span>
                              <span>Es robusto y estable numéricamente.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-600">✓</span>
                              <span>Fácil de implementar y entender.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-600">✓</span>
                              <span>El error está acotado y es predecible.</span>
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
                              <span>La convergencia es relativamente lenta (lineal).</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-red-600">✗</span>
                              <span>Requiere un intervalo inicial con cambio de signo.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-red-600">✗</span>
                              <span>Puede descartar otras raíces fuera del intervalo.</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-red-600">✗</span>
                              <span>No es eficiente para funciones con raíces múltiples.</span>
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
                <Card className="border-primary/20 bg-klp/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">¿Listo para profundizar?</h3>
                    <p className="text-muted-foreground mb-6">
                      Continúa con el análisis de convergencia, criterios de paro y casos especiales
                    </p>
                    <Button asChild size="lg" className="bg-[#d3ff99] text-black hover:opacity-90">
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
  );
}