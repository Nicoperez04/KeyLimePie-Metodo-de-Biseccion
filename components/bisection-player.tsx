"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { useBisectionStore } from "@/lib/bisection-store"
import { Play, Pause, SkipBack, SkipForward, RotateCcw, Download } from "lucide-react"

export function BisectionPlayer() {
  const {
    result,
    currentStep,
    isPlaying,
    playSpeed,
    setCurrentStep,
    nextStep,
    prevStep,
    togglePlay,
    setPlaySpeed,
    reset,
  } = useBisectionStore()

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && result && currentStep < result.iterations.length - 1) {
      const timer = setTimeout(() => {
        nextStep()
      }, playSpeed)
      return () => clearTimeout(timer)
    }
  }, [isPlaying, currentStep, result, playSpeed, nextStep])

  const exportCSV = () => {
    if (!result) return

    const headers = ["Iteración", "a", "b", "m", "f(m)", "Error"]
    const rows = result.iterations.map((iter) => [
      iter.k,
      iter.a.toFixed(8),
      iter.b.toFixed(8),
      iter.m.toFixed(8),
      iter.fm.toExponential(6),
      iter.error.toExponential(6),
    ])

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "bisection_iterations.csv"
    link.click()
  }

  if (!result) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            Configura la función y el intervalo, luego presiona "Resolver" para comenzar la simulación.
          </p>
        </CardContent>
      </Card>
    )
  }

  const currentIteration = result.iterations[currentStep]
  const progress = ((currentStep + 1) / result.iterations.length) * 100

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Controles de Simulación</span>
            <div className="flex items-center space-x-2">
              <Badge variant={result.converged ? "default" : "secondary"}>
                {result.converged ? "Convergió" : "No convergió"}
              </Badge>
              <Badge variant="outline">
                Paso {currentStep + 1} / {result.iterations.length}
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm" onClick={prevStep} disabled={currentStep === 0}>
              <SkipBack className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={togglePlay}
              disabled={currentStep === result.iterations.length - 1}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={nextStep}
              disabled={currentStep === result.iterations.length - 1}
            >
              <SkipForward className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progreso</span>
              <span>{progress.toFixed(1)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Velocidad de reproducción</label>
            <Slider
              value={[playSpeed]}
              onValueChange={([value]) => setPlaySpeed(value)}
              min={100}
              max={2000}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Rápido (0.1s)</span>
              <span>Lento (2s)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Iteration Details */}
      <Card>
        <CardHeader>
          <CardTitle>Iteración {currentIteration.k}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">a</p>
              <p className="text-lg font-mono">{currentIteration.a.toFixed(6)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">b</p>
              <p className="text-lg font-mono">{currentIteration.b.toFixed(6)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">m</p>
              <p className="text-lg font-mono">{currentIteration.m.toFixed(6)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">f(m)</p>
              <p className="text-lg font-mono">{currentIteration.fm.toExponential(3)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Error</p>
              <p className="text-lg font-mono">{currentIteration.error.toExponential(3)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Iterations Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Tabla de Iteraciones</span>
            <Button variant="outline" size="sm" onClick={exportCSV}>
              <Download className="h-4 w-4 mr-2" />
              Exportar CSV
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-96 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">k</TableHead>
                  <TableHead className="text-center">a</TableHead>
                  <TableHead className="text-center">b</TableHead>
                  <TableHead className="text-center">m</TableHead>
                  <TableHead className="text-center">f(m)</TableHead>
                  <TableHead className="text-center">Error</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result.iterations.map((iteration, index) => (
                  <TableRow key={iteration.k} className={index === currentStep ? "bg-primary/10" : ""}>
                    <TableCell className="text-center font-mono">{iteration.k}</TableCell>
                    <TableCell className="text-center font-mono">{iteration.a.toFixed(6)}</TableCell>
                    <TableCell className="text-center font-mono">{iteration.b.toFixed(6)}</TableCell>
                    <TableCell className="text-center font-mono">{iteration.m.toFixed(6)}</TableCell>
                    <TableCell className="text-center font-mono">{iteration.fm.toExponential(3)}</TableCell>
                    <TableCell className="text-center font-mono">{iteration.error.toExponential(3)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
