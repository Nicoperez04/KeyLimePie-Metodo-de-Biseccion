"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useQuizStore } from "@/lib/quiz-store"
import { Trophy, Target, CheckCircle, RotateCcw } from "lucide-react"

export function ProgressCard() {
  const { getMCQStats, getExerciseStats, getOverallProgress, resetProgress } = useQuizStore()

  const mcqStats = getMCQStats()
  const exerciseStats = getExerciseStats()
  const overallProgress = getOverallProgress()

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-primary" />
            <span>Progreso General</span>
          </div>
          <Button variant="ghost" size="sm" onClick={resetProgress}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progreso Total</span>
            <span className="text-sm text-muted-foreground">{overallProgress.toFixed(1)}%</span>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </div>

        {/* MCQ Stats */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-blue-600" />
            <span className="font-medium">Opción Múltiple</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">{mcqStats.total}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">{mcqStats.attempted}</p>
              <p className="text-xs text-muted-foreground">Intentadas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{mcqStats.correct}</p>
              <p className="text-xs text-muted-foreground">Correctas</p>
            </div>
          </div>
          {mcqStats.attempted > 0 && (
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm">{((mcqStats.correct / mcqStats.attempted) * 100).toFixed(1)}% de acierto</span>
            </div>
          )}
        </div>

        {/* Exercise Stats */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-purple-600" />
            <span className="font-medium">Resolver y Validar</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-purple-600">{exerciseStats.total}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">{exerciseStats.attempted}</p>
              <p className="text-xs text-muted-foreground">Intentados</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{exerciseStats.correct}</p>
              <p className="text-xs text-muted-foreground">Correctos</p>
            </div>
          </div>
          {exerciseStats.attempted > 0 && (
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm">
                {((exerciseStats.correct / exerciseStats.attempted) * 100).toFixed(1)}% de acierto
              </span>
            </div>
          )}
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          {mcqStats.attempted >= mcqStats.total && <Badge className="bg-blue-600 text-white">MCQ Completado</Badge>}
          {exerciseStats.attempted >= exerciseStats.total && (
            <Badge className="bg-purple-600 text-white">Ejercicios Completados</Badge>
          )}
          {mcqStats.correct === mcqStats.total && <Badge className="bg-green-600 text-white">MCQ Perfecto</Badge>}
          {exerciseStats.correct === exerciseStats.total && (
            <Badge className="bg-green-600 text-white">Ejercicios Perfectos</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
