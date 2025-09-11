"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface QuizProgress {
  mcqAnswers: Record<string, string>
  mcqCorrect: Record<string, boolean>
  exerciseAnswers: Record<string, { root: number; iterations: number }>
  exerciseCorrect: Record<string, boolean>
  completedMCQ: string[]
  completedExercises: string[]
}

interface QuizState extends QuizProgress {
  // Actions
  answerMCQ: (questionId: string, answerId: string, isCorrect: boolean) => void
  answerExercise: (questionId: string, root: number, iterations: number, isCorrect: boolean) => void
  resetProgress: () => void

  // Computed
  getMCQStats: () => { total: number; attempted: number; correct: number }
  getExerciseStats: () => { total: number; attempted: number; correct: number }
  getOverallProgress: () => number
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      // Initial state
      mcqAnswers: {},
      mcqCorrect: {},
      exerciseAnswers: {},
      exerciseCorrect: {},
      completedMCQ: [],
      completedExercises: [],

      // Actions
      answerMCQ: (questionId, answerId, isCorrect) => {
        set((state) => ({
          mcqAnswers: { ...state.mcqAnswers, [questionId]: answerId },
          mcqCorrect: { ...state.mcqCorrect, [questionId]: isCorrect },
          completedMCQ: state.completedMCQ.includes(questionId)
            ? state.completedMCQ
            : [...state.completedMCQ, questionId],
        }))
      },

      answerExercise: (questionId, root, iterations, isCorrect) => {
        set((state) => ({
          exerciseAnswers: { ...state.exerciseAnswers, [questionId]: { root, iterations } },
          exerciseCorrect: { ...state.exerciseCorrect, [questionId]: isCorrect },
          completedExercises: state.completedExercises.includes(questionId)
            ? state.completedExercises
            : [...state.completedExercises, questionId],
        }))
      },

      resetProgress: () => {
        set({
          mcqAnswers: {},
          mcqCorrect: {},
          exerciseAnswers: {},
          exerciseCorrect: {},
          completedMCQ: [],
          completedExercises: [],
        })
      },

      // Computed
      getMCQStats: () => {
        const state = get()
        const total = 8 // Total MCQ questions
        const attempted = state.completedMCQ.length
        const correct = Object.values(state.mcqCorrect).filter(Boolean).length
        return { total, attempted, correct }
      },

      getExerciseStats: () => {
        const state = get()
        const total = 3 // Total exercise questions
        const attempted = state.completedExercises.length
        const correct = Object.values(state.exerciseCorrect).filter(Boolean).length
        return { total, attempted, correct }
      },

      getOverallProgress: () => {
        const mcqStats = get().getMCQStats()
        const exerciseStats = get().getExerciseStats()
        const totalQuestions = mcqStats.total + exerciseStats.total
        const totalAttempted = mcqStats.attempted + exerciseStats.attempted
        return totalQuestions > 0 ? (totalAttempted / totalQuestions) * 100 : 0
      },
    }),
    {
      name: "klp-bisection-progress",
    },
  ),
)
