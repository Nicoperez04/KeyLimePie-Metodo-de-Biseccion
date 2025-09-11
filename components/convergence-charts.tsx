"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useBisectionStore } from "@/lib/bisection-store"
import { useState } from "react"

export function ConvergenceCharts() {
  const { result, showConvergenceLog, toggleConvergenceLog } = useBisectionStore()
  const [useLogScale, setUseLogScale] = useState(false)

  if (!result) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">Ejecuta una simulación para ver los gráficos de convergencia.</p>
        </CardContent>
      </Card>
    )
  }

  const errorData = result.iterations.map((iter) => ({
    k: iter.k,
    error: iter.error,
    logError: Math.log10(iter.error),
  }))

  const functionData = result.iterations.map((iter) => ({
    k: iter.k,
    fm: Math.abs(iter.fm),
    logFm: Math.log10(Math.abs(iter.fm)),
  }))

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Switch id="log-scale" checked={useLogScale} onCheckedChange={setUseLogScale} />
        <Label htmlFor="log-scale">Escala logarítmica</Label>
      </div>

      {/* Error Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Convergencia del Error</CardTitle>
          <p className="text-sm text-muted-foreground">Error e_k = (b_k - a_k) / 2 vs iteración k</p>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={errorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="k" label={{ value: "Iteración k", position: "insideBottom", offset: -5 }} />
                <YAxis
                  dataKey={useLogScale ? "logError" : "error"}
                  label={{ value: useLogScale ? "log₁₀(Error)" : "Error", angle: -90, position: "insideLeft" }}
                  tickFormatter={(value) => (useLogScale ? `10^${value.toFixed(1)}` : value.toExponential(1))}
                />
                <Tooltip
                  formatter={(value, name) => [
                    useLogScale ? `10^${(value as number).toFixed(3)}` : (value as number).toExponential(3),
                    useLogScale ? "log₁₀(Error)" : "Error",
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey={useLogScale ? "logError" : "error"}
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Function Value Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Valor de la Función</CardTitle>
          <p className="text-sm text-muted-foreground">|f(m_k)| vs iteración k (puede no ser monótono)</p>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={functionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="k" label={{ value: "Iteración k", position: "insideBottom", offset: -5 }} />
                <YAxis
                  dataKey={useLogScale ? "logFm" : "fm"}
                  label={{ value: useLogScale ? "log₁₀(|f(m)|)" : "|f(m)|", angle: -90, position: "insideLeft" }}
                  tickFormatter={(value) => (useLogScale ? `10^${value.toFixed(1)}` : value.toExponential(1))}
                />
                <Tooltip
                  formatter={(value, name) => [
                    useLogScale ? `10^${(value as number).toFixed(3)}` : (value as number).toExponential(3),
                    useLogScale ? "log₁₀(|f(m)|)" : "|f(m)|",
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey={useLogScale ? "logFm" : "fm"}
                  stroke="#82ca9d"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
