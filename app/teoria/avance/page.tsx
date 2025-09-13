import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MathBlock } from "@/components/math-block";
import { FlowDiagram } from "@/components/flow-diagram";
import { TrendingUp, AlertTriangle, CheckCircle, XCircle, Calculator, Zap, Clock, Target } from "lucide-react";
import Link from "next/link";

export default function TeoriaAvancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 text-center">
          <div className="absolute inset-0 bg-lime-600 opacity-10 dark:hidden"></div>
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge variant="secondary" className="mb-4">
                Parte II
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Análisis Avanzado del Método</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Convergencia, criterios de paro y limitaciones
              </p>
            </div>
          </PageContainer>
        </section>

        {/* Advanced Theory Content */}
        <section className="py-12 px-4">
          <PageContainer>
            <div className="max-w-4xl mx-auto">
              <Accordion type="multiple" className="space-y-4" defaultValue={["convergencia"]}>
                
                {/* 1. Convergencia y Cota de Error */}
                <AccordionItem value="convergencia" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Análisis de Convergencia</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-6 pt-4">
                    <p className="text-muted-foreground">El método de bisección tiene una convergencia lineal, lo que lo hace predecible y robusto. Analicemos sus propiedades clave.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base">Cota de Error</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <MathBlock display>{"|p_n - p| \\leq \\frac{b_0 - a_0}{2^n}"}</MathBlock>
                          <p className="text-xs text-muted-foreground mt-2">El error se reduce a la mitad en cada paso (n).</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base">Orden de Convergencia</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <MathBlock display>{"p_n = p + O\\left((\\frac{1}{2})^n\\right)"}</MathBlock>
                          <p className="text-xs text-muted-foreground mt-2">Convergencia lineal con razón 1/2.</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30">
                        <CardHeader>
                          <CardTitle className="text-base">Iteraciones Mínimas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <MathBlock display>{"n_{\\min} = \\left\\lceil \\log_2\\left(\\frac{b-a}{\\varepsilon}\\right) \\right\\rceil"}</MathBlock>
                          <p className="text-xs text-muted-foreground mt-2">Para alcanzar una tolerancia ε.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Criterios de Paro */}
                <AccordionItem value="criterios" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold">Criterios de Paro</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                     <p className="text-muted-foreground">Es crucial saber cuándo detener el algoritmo. Se usan principalmente tres condiciones:</p>
                    <div className="space-y-4">
                      <Card className="bg-muted/30">
                        <CardHeader className="flex flex-row items-center justify-between pb-4">
                           <CardTitle className="text-base flex items-center space-x-2">
                            <Target className="h-4 w-4" />
                            <span>1. Error Absoluto (El más robusto)</span>
                          </CardTitle>
                          <Badge variant="secondary">Recomendado</Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">Detenerse cuando el tamaño del intervalo de incertidumbre es menor que la tolerancia.</p>
                          <div className="bg-background border rounded p-2 text-center">
                            <MathBlock display>{"e_n = \\frac{b_n - a_n}{2} \\leq \\varepsilon"}</MathBlock>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-base flex items-center space-x-2">
                            <Zap className="h-4 w-4" />
                            <span>2. Número Máximo de Iteraciones</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">Una salvaguarda para evitar bucles infinitos si algo sale mal.</p>
                          <div className="bg-background border rounded p-2 text-center">
                            <MathBlock display>{"k \\geq N_{\\max}"}</MathBlock>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/30">
                         <CardHeader className="flex flex-row items-center justify-between pb-4">
                           <CardTitle className="text-base flex items-center space-x-2">
                            <Calculator className="h-4 w-4" />
                            <span>3. Valor de la Función (Con precaución)</span>
                          </CardTitle>
                          <Badge variant="outline">Opcional</Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-2">Detenerse si |f(m)| está muy cerca de cero. Puede ser engañoso si la función es muy "plana" cerca de la raíz.</p>
                          <div className="bg-background border rounded p-2 text-center">
                            <MathBlock display>{"|f(m_n)| \\leq \\tau"}</MathBlock>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                {/* 3. Limitaciones y Casos de Falla */}
                <AccordionItem value="casos-invalidos" className="border rounded-2xl px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <span className="text-lg font-semibold">Limitaciones y Casos de Falla</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Atención:</strong> Aunque es robusto, el método de bisección no es universal. Falla en los siguientes casos:
                      </AlertDescription>
                    </Alert>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="bg-destructive/5 border-destructive/20">
                        <CardHeader>
                          <CardTitle className="text-base text-destructive">Sin cambio de signo</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Si <MathBlock>{"f(a) \\cdot f(b) \\geq 0"}</MathBlock>, el método ni siquiera puede empezar. Esto ocurre si no hay raíces o si hay un número par de raíces en el intervalo (ej. una parábola que toca el eje X pero no lo cruza).
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-destructive/5 border-destructive/20">
                        <CardHeader>
                          <CardTitle className="text-base text-destructive">Discontinuidades</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Si la función no es continua, el Teorema de Bolzano no aplica. El método puede converger a una discontinuidad en lugar de una raíz. Ejemplo: <MathBlock>{"f(x) = 1/x"}</MathBlock> en [-1, 1].
                          </p>
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
                    <CardTitle className="text-xl text-center">Diagrama de Flujo del Algoritmo</CardTitle>
                    <p className="text-center text-muted-foreground">
                      Un resumen visual del proceso de decisión en cada paso de bisección.
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
                    <p className="text-muted-foreground mb-6">Aplica lo aprendido con nuestro simulador interactivo y ponte a prueba con los ejercicios.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg">
                        <Link href="/practica">Ir al Simulador</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link href="/ejercicios">Resolver Ejercicios</Link>
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
  );
}