"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { BisectionEngine, type BisectionResult } from "./bisection-engine"

interface BisectionState {
  // Function and interval
  fx: string
  a: number
  b: number
  epsilon: number
  maxIterations: number

  // Simulation state
  result: BisectionResult | null
  currentStep: number
  isPlaying: boolean
  playSpeed: number

  // UI state
  showConvergenceLog: boolean

  // Actions
  setFunction: (fx: string) => void
  setInterval: (a: number, b: number) => void
  setParameters: (epsilon: number, maxIterations: number) => void
  solve: () => void
  reset: () => void
  setCurrentStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  togglePlay: () => void
  setPlaySpeed: (speed: number) => void
  toggleConvergenceLog: () => void
}

const engine = new BisectionEngine()

export const useBisectionStore = create<BisectionState>()(
  persist(
    (set, get) => ({
      // Initial state
      fx: "x^2 - 2",
      a: 1,
      b: 2,
      epsilon: 1e-6,
      maxIterations: 100,
      result: null,
      currentStep: 0,
      isPlaying: false,
      playSpeed: 1000,
      showConvergenceLog: false,

      // Actions
      setFunction: (fx) => set({ fx, result: null, currentStep: 0 }),

      setInterval: (a, b) => set({ a, b, result: null, currentStep: 0 }),

      setParameters: (epsilon, maxIterations) => set({ epsilon, maxIterations, result: null, currentStep: 0 }),

      solve: () => {
        const { fx, a, b, epsilon, maxIterations } = get()
        try {
          const result = engine.solve(fx, a, b, epsilon, maxIterations)
          set({ result, currentStep: 0, isPlaying: false })
        } catch (error) {
          console.error("Bisection solve error:", error)
          set({ result: null })
        }
      },

      reset: () =>
        set({
          result: null,
          currentStep: 0,
          isPlaying: false,
        }),

      setCurrentStep: (step) => {
        const { result } = get()
        if (result && step >= 0 && step < result.iterations.length) {
          set({ currentStep: step, isPlaying: false })
        }
      },

      nextStep: () => {
        const { currentStep, result } = get()
        if (result && currentStep < result.iterations.length - 1) {
          set({ currentStep: currentStep + 1 })
        }
      },

      prevStep: () => {
        const { currentStep } = get()
        if (currentStep > 0) {
          set({ currentStep: currentStep - 1 })
        }
      },

      togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

      setPlaySpeed: (speed) => set({ playSpeed: speed }),

      toggleConvergenceLog: () =>
        set((state) => ({
          showConvergenceLog: !state.showConvergenceLog,
        })),
    }),
    {
      name: "klp-bisection-state",
      partialize: (state) => ({
        fx: state.fx,
        a: state.a,
        b: state.b,
        epsilon: state.epsilon,
        maxIterations: state.maxIterations,
        showConvergenceLog: state.showConvergenceLog,
      }),
    },
  ),
)
