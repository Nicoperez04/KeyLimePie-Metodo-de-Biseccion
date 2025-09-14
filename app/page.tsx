import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer } from "@/components/page-container"
import { BookOpen, FlaskConical, Calculator, ArrowRight } from "@/components/simple-icons"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-10 px-4 text-center dark:bg-black">
          <div className="absolute inset-0 bg-lime-600 opacity-10 dark:hidden"></div>
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance dark:text-white">Método de Bisección</h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                Encontrar raíces con un método robusto y simple
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Aprende los fundamentos teóricos y practica con simulaciones interactivas del método de bisección para
                encontrar raíces de funciones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild size="lg" className="text-lg px-8 bg-klp text-black hover:opacity-90">
                  <Link href="/teoria" className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Ir a Teoría</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/practica" className="flex items-center space-x-2">
                    <FlaskConical className="h-5 w-5" />
                    <span>Probar Simulador</span>
                  </Link>
                </Button>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* Features Section */}
        <section className="py-4 px-4">
          <PageContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="rounded-2xl border-border/40 hover:scale-[1.01] transition-transform">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Teoría Completa</CardTitle>
                  <CardDescription>
                    Fundamentos matemáticos, teorema de Bolzano, convergencia y análisis de errores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/teoria">Explorar Teoría</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border/40 hover:scale-[1.01] transition-transform">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Simulador Interactivo</CardTitle>
                  <CardDescription>
                    Visualiza paso a paso el algoritmo con gráficos dinámicos y análisis de convergencia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/practica">Usar Simulador</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border/40 hover:scale-[1.01] transition-transform">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Ejercicios Prácticos</CardTitle>
                  <CardDescription>
                    Autoevaluación con preguntas de opción múltiple y ejercicios con validación automática
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/ejercicios">Practicar</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  )
}
