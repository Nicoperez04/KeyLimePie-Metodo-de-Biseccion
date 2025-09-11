import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer } from "@/components/page-container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProgressCard } from "@/components/progress-card"
import { QuizMCQ } from "@/components/quiz-mcq"
import { QuizExercises } from "@/components/quiz-exercises"
import { HelpCircle, Calculator } from "lucide-react"

export default function EjerciciosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 text-center dark:bg-black">
          <div className="absolute inset-0 gradient-lime opacity-10 dark:hidden"></div>
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Ejercicios y Autoevaluación</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Pon a prueba tus conocimientos sobre el método de bisección
              </p>
            </div>
          </PageContainer>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <PageContainer>
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Progress Sidebar */}
              <div className="lg:col-span-1">
                <ProgressCard />
              </div>

              {/* Quiz Content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="mcq" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="mcq" className="flex items-center space-x-2">
                      <HelpCircle className="h-4 w-4" />
                      <span>Opción Múltiple</span>
                    </TabsTrigger>
                    <TabsTrigger value="exercises" className="flex items-center space-x-2">
                      <Calculator className="h-4 w-4" />
                      <span>Resolver y Validar</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* Multiple Choice Questions */}
                  <TabsContent value="mcq" className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold">Preguntas de Opción Múltiple</h2>
                      <p className="text-muted-foreground">
                        Responde las preguntas sobre conceptos teóricos del método de bisección
                      </p>
                    </div>
                    <QuizMCQ />
                  </TabsContent>

                  <TabsContent value="exercises" className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl font-bold">Resolver y Validar</h2>
                      <p className="text-muted-foreground">Resuelve ejercicios prácticos y valida tus respuestas</p>
                    </div>
                    <QuizExercises />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  )
}
