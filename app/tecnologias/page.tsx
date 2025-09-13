import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer } from "@/components/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Palette, Database, BarChart3, Zap, Layers, Globe, Cpu, ExternalLink } from "lucide-react"
import Link from "next/link"

const techStack = [
  {
    category: "Frontend Framework",
    icon: Code2,
    color: "bg-blue-500",
    technologies: [
      {
        name: "Next.js 15",
        description: "Framework React con App Router para aplicaciones web modernas",
        url: "https://nextjs.org",
        features: ["Server Components", "App Router", "TypeScript", "Optimización automática"],
      },
      {
        name: "React 18",
        description: "Biblioteca para construir interfaces de usuario interactivas",
        url: "https://react.dev",
        features: ["Hooks", "Suspense", "Concurrent Features", "Server Components"],
      },
    ],
  },
  {
    category: "Styling & UI",
    icon: Palette,
    color: "bg-purple-500",
    technologies: [
      {
        name: "Tailwind CSS v4",
        description: "Framework CSS utility-first para diseño rápido y consistente",
        url: "https://tailwindcss.com",
        features: ["Utility Classes", "Responsive Design", "Dark Mode", "Custom Properties"],
      },
      {
        name: "shadcn/ui",
        description: "Componentes UI accesibles y personalizables",
        url: "https://ui.shadcn.com",
        features: ["Radix UI", "Accesibilidad", "Theming", "Composición"],
      },
    ],
  },
  {
    category: "Mathematical Rendering",
    icon: Cpu,
    color: "bg-green-500",
    technologies: [
      {
        name: "KaTeX",
        description: "Renderizado rápido de matemáticas en el navegador",
        url: "https://katex.org",
        features: ["LaTeX Syntax", "Server-side Rendering", "Ligero", "Sin JavaScript"],
      },
      {
        name: "mathjs",
        description: "Biblioteca matemática para parsing seguro de expresiones",
        url: "https://mathjs.org",
        features: ["Expression Parser", "Function Evaluation", "Seguridad", "Extensible"],
      },
    ],
  },
  {
    category: "Data Visualization",
    icon: BarChart3,
    color: "bg-orange-500",
    technologies: [
      {
        name: "Recharts",
        description: "Biblioteca de gráficos construida con React y D3",
        url: "https://recharts.org",
        features: ["Responsive Charts", "Composable", "SVG", "Animaciones"],
      },
      {
        name: "React Flow",
        description: "Biblioteca para diagramas de flujo interactivos",
        url: "https://reactflow.dev",
        features: ["Drag & Drop", "Nodos Personalizados", "Minimap", "Controles"],
      },
    ],
  },
  {
    category: "State Management",
    icon: Database,
    color: "bg-red-500",
    technologies: [
      {
        name: "Zustand",
        description: "Gestión de estado ligera y flexible para React",
        url: "https://zustand-demo.pmnd.rs",
        features: ["TypeScript", "Persistence", "Middleware", "DevTools"],
      },
      {
        name: "localStorage",
        description: "Persistencia local del progreso y configuraciones",
        url: "#",
        features: ["Progreso de Quiz", "Configuraciones", "Historial", "Offline"],
      },
    ],
  },
  {
    category: "Animation & UX",
    icon: Zap,
    color: "bg-yellow-500",
    technologies: [
      {
        name: "Framer Motion",
        description: "Biblioteca de animaciones para React",
        url: "https://www.framer.com/motion",
        features: ["Declarative", "Gestures", "Layout Animations", "Performance"],
      },
      {
        name: "Lucide React",
        description: "Iconos SVG hermosos y consistentes",
        url: "https://lucide.dev",
        features: ["Tree Shaking", "Customizable", "Consistent", "Lightweight"],
      },
    ],
  },
  {
    category: "Development Tools",
    icon: Layers,
    color: "bg-indigo-500",
    technologies: [
      {
        name: "TypeScript",
        description: "JavaScript con tipado estático para mayor robustez",
        url: "https://www.typescriptlang.org",
        features: ["Type Safety", "IntelliSense", "Refactoring", "Error Prevention"],
      },
      {
        name: "ESLint & Prettier",
        description: "Herramientas para calidad y formato de código",
        url: "#",
        features: ["Code Quality", "Formatting", "Best Practices", "Team Consistency"],
      },
    ],
  },
  {
    category: "Deployment",
    icon: Globe,
    color: "bg-teal-500",
    technologies: [
      {
        name: "Vercel",
        description: "Plataforma de deployment optimizada para Next.js",
        url: "https://vercel.com",
        features: ["Edge Network", "Serverless", "Analytics", "Preview Deployments"],
      },
    ],
  },
]

export default function TecnologiasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 px-4 text-center dark:bg-black">
          <div className="absolute inset-0 bg-lime-600 opacity-10 dark:hidden"></div>
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Stack Tecnológico</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Tecnologías modernas para una experiencia educativa excepcional
              </p>
            </div>
          </PageContainer>
        </section>

        {/* Architecture Overview */}
        <section className="py-12 px-4">
          <PageContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Arquitectura de la Aplicación</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Una aplicación web moderna construida con las mejores prácticas de desarrollo, optimizada para
                rendimiento, accesibilidad y experiencia de usuario.
              </p>
            </div>

            {/* Architecture Layers */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Capa de Presentación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Interfaz de usuario construida con React, Tailwind CSS y componentes accesibles para una experiencia
                    visual atractiva y funcional.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Lógica de Negocio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Algoritmos matemáticos implementados en TypeScript con validación segura y manejo de errores
                    robusto.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Visualización</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Gráficos interactivos, renderizado matemático y diagramas de flujo para facilitar el aprendizaje
                    visual.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Technology Stack */}
            <div className="space-y-12">
              {techStack.map((category, categoryIndex) => {
                const Icon = category.icon
                return (
                  <div key={categoryIndex} className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className={`h-10 w-10 rounded-lg ${category.color} flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.category}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {category.technologies.map((tech, techIndex) => (
                        <Card key={techIndex} className="hover:scale-[1.01] transition-transform">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{tech.name}</CardTitle>
                              {tech.url !== "#" && (
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={tech.url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                  </Link>
                                </Button>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {tech.features.map((feature, featureIndex) => (
                                <Badge key={featureIndex} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Key Features */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Características Clave</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Rendimiento</h4>
                    <p className="text-sm text-muted-foreground">Optimizado para carga rápida y experiencia fluida</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Accesibilidad</h4>
                    <p className="text-sm text-muted-foreground">Diseñado para ser inclusivo y usable por todos</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-4">
                      <Layers className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Modular</h4>
                    <p className="text-sm text-muted-foreground">Arquitectura componetizada y mantenible</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mx-auto mb-4">
                      <Database className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Persistente</h4>
                    <p className="text-sm text-muted-foreground">Progreso guardado localmente sin servidor</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="border-primary/20 bg-klp/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">¿Listo para explorar?</h3>
                  <p className="text-muted-foreground mb-6">
                    Descubre cómo estas tecnologías trabajan juntas para crear una experiencia educativa excepcional
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-[#d3ff99] text-black hover:opacity-90">
                      <Link href="/teoria">Comenzar con la Teoría</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent">
                      <Link href="/practica">Probar el Simulador</Link>
                    </Button>
                  </div>
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
