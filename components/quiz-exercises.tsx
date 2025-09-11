"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { exerciseQuestions } from "@/lib/quiz-data"
import { useQuizStore } from "@/lib/quiz-store"
import { BisectionEngine } from "@/lib/bisection-engine"
import { Info, ChevronDown, Eye, Calculator } from "lucide-react"

export function QuizExercises() {
  const [currentExercise, setCurrentExercise] = useState(0)
  const [rootInput, setRootInput] = useState("")
  const [iterationsInput, setIterationsInput] = useState("")
  const [showSolution, setShowSolution] = useState(false)

  const { exerciseAnswers, exerciseCorrect, answerExercise } = useQuizStore()

  const exercise = exerciseQuestions[currentExercise]
  const hasAnswered = exercise.id in exerciseAnswers
  const isCorrect = exerciseCorrect[exercise.id]

  const handleSubmit = () => {
    const root = Number.parseFloat(rootInput)
    const iterations = Number.parseInt(iterationsInput)

    if (isNaN(root) || isNaN(iterations)) {
      alert("Por favor, ingresa valores numéricos válidos")
      return
    }

    // Check if answer is close enough
    const rootTolerance = 0.01 // 1% tolerance
    const iterationTolerance = 2 // ±2 iterations

    const rootCorrect = Math.abs(root - exercise.expectedRoot) <= rootTolerance
    const iterationsCorrect = Math.abs(iterations - exercise.expectedIterations) <= iterationTolerance

    const isAnswerCorrect = rootCorrect && iterationsCorrect

    answerExercise(exercise.id, root, iterations, isAnswerCorrect)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-600"
      case "medium":
        return "bg-yellow-600"
      case "hard":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  const generateSolution = () => {
    const engine = new BisectionEngine()
    try {
      const result = engine.solve(exercise.fx, exercise.a, exercise.b, exercise.epsilon)
      return result
    } catch (error) {
      return null
    }
  }

  const solution = generateSolution()

  return (
    <div className="space-y-6">
      {/* Exercise Navigation */}
      <div className="flex items-center justify-center space-x-4">
        {exerciseQuestions.map((ex, index) => (
          <Button
            key={ex.id}
            variant={index === currentExercise ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setCurrentExercise(index)
              setRootInput("")
              setIterationsInput("")
              setShowSolution(false)
            }}
            className="relative"
          >
            Ejercicio {index + 1}
            {ex.id in exerciseAnswers && (
              <div
                className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                  exerciseCorrect[ex.id] ? "bg-green-600" : "bg-red-600"
                }`}
              />
            )}
          </Button>
        ))}
      </div>

      {/* Exercise Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{exercise.title}</CardTitle>
            <Badge className={`text-white ${getDifficultyColor(exercise.difficulty)}`}>
              {exercise.difficulty === "easy" ? "Fácil" : exercise.difficulty === "medium" ? "Medio" : "Difícil"}
            </Badge>
          </div>
          <p className="text-muted-foreground">{exercise.description}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Problem Statement */}
          <div className="bg-muted/30 rounded-lg p-4 space-y-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-medium">Función:</span>
                <p className="font-mono">{exercise.fx}</p>
              </div>
              <div>
                <span className="font-medium">Intervalo:</span>
                <p className="font-mono">
                  [{exercise.a}, {exercise.b}]
                </p>
              </div>
              <div>
                <span className="font-medium">Tolerancia:</span>
                <p className="font-mono">{exercise.epsilon}</p>
              </div>
              <div>
                <span className="font-medium">Método:</span>
                <p>Bisección</p>
              </div>
            </div>
          </div>

          {/* Answer Inputs */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="root-input">Raíz aproximada</Label>
              <Input
                id="root-input"
                value={rootInput}
                onChange={(e) => setRootInput(e.target.value)}
                placeholder="Ej: 1.414"
                disabled={hasAnswered}
              />
            </div>
            <div>
              <Label htmlFor="iterations-input">Número de iteraciones</Label>
              <Input
                id="iterations-input"
                value={iterationsInput}
                onChange={(e) => setIterationsInput(e.target.value)}
                placeholder="Ej: 10"
                disabled={hasAnswered}
              />
            </div>
          </div>

          {!hasAnswered && (
            <Button onClick={handleSubmit} disabled={!rootInput || !iterationsInput} className="w-full">
              <Calculator className="h-4 w-4 mr-2" />
              Validar Respuesta
            </Button>
          )}

          {hasAnswered && (
            <Alert
              className={
                isCorrect
                  ? "border-green-200 bg-green-50 dark:bg-green-950/20"
                  : "border-red-200 bg-red-50 dark:bg-red-950/20"
              }
            >
              <Info className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-2">
                  <p
                    className={`font-medium ${isCorrect ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}
                  >
                    {isCorrect ? "¡Correcto!" : "Incorrecto"}
                  </p>
                  <div className="text-sm space-y-1">
                    <p>
                      Tu respuesta: Raíz ≈ {exerciseAnswers[exercise.id]?.root},{" "}
                      {exerciseAnswers[exercise.id]?.iterations} iteraciones
                    </p>
                    <p>
                      Respuesta esperada: Raíz ≈ {exercise.expectedRoot}, ~{exercise.expectedIterations} iteraciones
                    </p>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Solution */}
          <Collapsible open={showSolution} onOpenChange={setShowSolution}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full bg-transparent">
                <Eye className="h-4 w-4 mr-2" />
                Ver solución paso a paso
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 mt-4">
              {solution && (
                <div className="bg-muted/30 rounded-lg p-4 space-y-4">
                  <h4 className="font-medium">Solución detallada:</h4>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Resultado final:</span>
                      <p>Raíz ≈ {solution.finalRoot.toFixed(6)}</p>
                      <p>Error ≈ {solution.finalError.toExponential(3)}</p>
                      <p>Iteraciones: {solution.iterations.length}</p>
                    </div>
                    <div>
                      <span className="font-medium">Estado:</span>
                      <p>{solution.converged ? "Convergió" : "No convergió"}</p>
                      <p className="text-xs text-muted-foreground">{solution.reason}</p>
                    </div>
                  </div>

                  <div className="max-h-48 overflow-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-1">k</th>
                          <th className="text-left p-1">a</th>
                          <th className="text-left p-1">b</th>
                          <th className="text-left p-1">m</th>
                          <th className="text-left p-1">f(m)</th>
                          <th className="text-left p-1">Error</th>
                        </tr>
                      </thead>
                      <tbody>
                        {solution.iterations.slice(0, 10).map((iter) => (
                          <tr key={iter.k} className="border-b">
                            <td className="p-1 font-mono">{iter.k}</td>
                            <td className="p-1 font-mono">{iter.a.toFixed(4)}</td>
                            <td className="p-1 font-mono">{iter.b.toFixed(4)}</td>
                            <td className="p-1 font-mono">{iter.m.toFixed(4)}</td>
                            <td className="p-1 font-mono">{iter.fm.toExponential(2)}</td>
                            <td className="p-1 font-mono">{iter.error.toExponential(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {solution.iterations.length > 10 && (
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        ... y {solution.iterations.length - 10} iteraciones más
                      </p>
                    )}
                  </div>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  )
}
