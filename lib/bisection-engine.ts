export interface BisectionIteration {
  k: number
  a: number
  b: number
  m: number
  fm: number
  error: number
  converged: boolean
}

export interface BisectionResult {
  iterations: BisectionIteration[]
  converged: boolean
  finalRoot: number
  finalError: number
  reason: string
}

export class BisectionEngine {
  private parseFunction(fx: string): (x: number) => number {
    // Simple function parser - in production, use mathjs
    const cleanFx = fx.toLowerCase().replace(/\s/g, "")

    return (x: number): number => {
      try {
        // Replace common math functions
        let expr = cleanFx
          .replace(/\bx\b/g, x.toString())
          .replace(/cos/g, "Math.cos")
          .replace(/sin/g, "Math.sin")
          .replace(/tan/g, "Math.tan")
          .replace(/log/g, "Math.log")
          .replace(/sqrt/g, "Math.sqrt")
          .replace(/\^/g, "**")

        // Handle implicit multiplication like 2x -> 2*x
        expr = expr.replace(/(\d)([a-zA-Z])/g, "$1*$2")

        return eval(expr)
      } catch (error) {
        throw new Error(`Error evaluating function at x=${x}: ${error}`)
      }
    }
  }

  solve(fx: string, a: number, b: number, epsilon = 1e-6, maxIterations = 100): BisectionResult {
    const f = this.parseFunction(fx)
    const iterations: BisectionIteration[] = []

    const fa = f(a)
    const fb = f(b)

    // Check Bolzano condition
    if (fa * fb >= 0) {
      throw new Error("Bolzano condition not satisfied: f(a) * f(b) >= 0")
    }

    let currentA = a
    let currentB = b
    let k = 0

    while (k < maxIterations) {
      const m = (currentA + currentB) / 2
      const fm = f(m)
      const error = (currentB - currentA) / 2

      const iteration: BisectionIteration = {
        k,
        a: currentA,
        b: currentB,
        m,
        fm,
        error,
        converged: error <= epsilon,
      }

      iterations.push(iteration)

      if (error <= epsilon) {
        return {
          iterations,
          converged: true,
          finalRoot: m,
          finalError: error,
          reason: `Converged: error ${error.toExponential(3)} ≤ ε = ${epsilon}`,
        }
      }

      // Update interval
      const fa = f(currentA)
      if (Math.sign(fa) === Math.sign(fm)) {
        currentA = m
      } else {
        currentB = m
      }

      k++
    }

    const finalM = (currentA + currentB) / 2
    return {
      iterations,
      converged: false,
      finalRoot: finalM,
      finalError: (currentB - currentA) / 2,
      reason: `Maximum iterations (${maxIterations}) reached`,
    }
  }

  checkBolzano(fx: string, a: number, b: number): { fa: number; fb: number; product: number; valid: boolean } {
    const f = this.parseFunction(fx)
    const fa = f(a)
    const fb = f(b)
    const product = fa * fb

    return {
      fa,
      fb,
      product,
      valid: product < 0,
    }
  }

  calculateMinIterations(a: number, b: number, epsilon: number): number {
    return Math.ceil(Math.log2((b - a) / epsilon))
  }
}
