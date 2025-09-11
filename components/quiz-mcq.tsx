"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { mcqQuestions } from "@/lib/quiz-data"
import { useQuizStore } from "@/lib/quiz-store"
import { CheckCircle, XCircle, Info, ChevronLeft, ChevronRight } from "lucide-react"

export function QuizMCQ() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [showResult, setShowResult] = useState(false)

  const { mcqAnswers, mcqCorrect, answerMCQ } = useQuizStore()

  const question = mcqQuestions[currentQuestion]
  const hasAnswered = question.id in mcqAnswers
  const isCorrect = mcqCorrect[question.id]

  const handleSubmit = () => {
    if (!selectedAnswer) return

    const correctOption = question.options.find((opt) => opt.isCorrect)
    const isAnswerCorrect = selectedAnswer === correctOption?.id

    answerMCQ(question.id, selectedAnswer, isAnswerCorrect)
    setShowResult(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < mcqQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
      setShowResult(false)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer("")
      setShowResult(false)
    }
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

  return (
    <div className="space-y-6">
      {/* Question Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Anterior
        </Button>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Pregunta {currentQuestion + 1} de {mcqQuestions.length}
          </span>
          <Badge className={`text-white ${getDifficultyColor(question.difficulty)}`}>
            {question.difficulty === "easy" ? "Fácil" : question.difficulty === "medium" ? "Medio" : "Difícil"}
          </Badge>
        </div>

        <Button variant="outline" onClick={nextQuestion} disabled={currentQuestion === mcqQuestions.length - 1}>
          Siguiente
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={hasAnswered}>
            {question.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label
                  htmlFor={option.id}
                  className={`flex-1 cursor-pointer p-3 rounded-lg border transition-colors ${
                    hasAnswered && option.isCorrect
                      ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-950/20 dark:border-green-800 dark:text-green-300"
                      : hasAnswered && selectedAnswer === option.id && !option.isCorrect
                        ? "bg-red-50 border-red-200 text-red-800 dark:bg-red-950/20 dark:border-red-800 dark:text-red-300"
                        : "hover:bg-muted/50"
                  }`}
                >
                  <span className="font-medium mr-2">{option.id.toUpperCase()})</span>
                  {option.text}
                  {hasAnswered && option.isCorrect && <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />}
                  {hasAnswered && selectedAnswer === option.id && !option.isCorrect && (
                    <XCircle className="h-4 w-4 text-red-600 ml-auto" />
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {!hasAnswered && (
            <Button onClick={handleSubmit} disabled={!selectedAnswer} className="w-full">
              Responder
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
                  <p className="text-sm">{question.explanation}</p>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2">
        {mcqQuestions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentQuestion(index)
              setSelectedAnswer("")
              setShowResult(false)
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentQuestion
                ? "bg-primary"
                : mcqQuestions[index].id in mcqAnswers
                  ? mcqCorrect[mcqQuestions[index].id]
                    ? "bg-green-600"
                    : "bg-red-600"
                  : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
