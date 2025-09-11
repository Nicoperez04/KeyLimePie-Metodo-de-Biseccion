export interface MCQOption {
  id: string
  text: string
  isCorrect: boolean
}

export interface MCQQuestion {
  id: string
  question: string
  options: MCQOption[]
  explanation: string
  difficulty: "easy" | "medium" | "hard"
}

export interface ExerciseQuestion {
  id: string
  title: string
  description: string
  fx: string
  a: number
  b: number
  epsilon: number
  expectedRoot: number
  expectedIterations: number
  difficulty: "easy" | "medium" | "hard"
}

export const mcqQuestions: MCQQuestion[] = [
  {
    id: "bolzano-condition",
    question: "¿Cuándo se puede aplicar el teorema de Bolzano?",
    options: [
      { id: "a", text: "Cuando f es continua en [a,b] y f(a) · f(b) < 0", isCorrect: true },
      { id: "b", text: "Cuando f es derivable en [a,b]", isCorrect: false },
      { id: "c", text: "Cuando f(a) = f(b)", isCorrect: false },
      { id: "d", text: "Cuando f es creciente en [a,b]", isCorrect: false },
    ],
    explanation:
      "El teorema de Bolzano requiere que f sea continua en [a,b] y que haya cambio de signo: f(a) · f(b) < 0.",
    difficulty: "easy",
  },
  {
    id: "min-iterations",
    question: "Dado [a,b] = [0,1] y ε = 10⁻⁴, ¿cuántas iteraciones mínimas necesita bisección?",
    options: [
      { id: "a", text: "10 iteraciones", isCorrect: false },
      { id: "b", text: "14 iteraciones", isCorrect: true },
      { id: "c", text: "20 iteraciones", isCorrect: false },
      { id: "d", text: "8 iteraciones", isCorrect: false },
    ],
    explanation: "n_min = ⌈log₂((b-a)/ε)⌉ = ⌈log₂((1-0)/10⁻⁴)⌉ = ⌈log₂(10⁴)⌉ = ⌈13.29⌉ = 14",
    difficulty: "medium",
  },
  {
    id: "interval-update",
    question: "Si f(a) = -2, f(m) = 1, f(b) = 3, ¿cómo se actualiza el intervalo?",
    options: [
      { id: "a", text: "a = m (nuevo intervalo [m,b])", isCorrect: false },
      { id: "b", text: "b = m (nuevo intervalo [a,m])", isCorrect: true },
      { id: "c", text: "No se puede determinar", isCorrect: false },
      { id: "d", text: "Se mantiene igual", isCorrect: false },
    ],
    explanation: "Como sign(f(a)) = sign(-2) = - y sign(f(m)) = sign(1) = +, son diferentes, entonces b = m.",
    difficulty: "medium",
  },
  {
    id: "convergence-rate",
    question: "¿Cuál es el orden de convergencia del método de bisección?",
    options: [
      { id: "a", text: "Cuadrático (orden 2)", isCorrect: false },
      { id: "b", text: "Lineal con razón 1/2", isCorrect: true },
      { id: "c", text: "Cúbico (orden 3)", isCorrect: false },
      { id: "d", text: "Superlineal", isCorrect: false },
    ],
    explanation: "Bisección tiene convergencia lineal con razón 1/2: el error se reduce a la mitad en cada iteración.",
    difficulty: "medium",
  },
  {
    id: "error-bound",
    question: "¿Qué representa la cota (b-a)/2ⁿ?",
    options: [
      { id: "a", text: "El error exacto en la iteración n", isCorrect: false },
      { id: "b", text: "Una cota superior del error en la iteración n", isCorrect: true },
      { id: "c", text: "El valor de la función en la iteración n", isCorrect: false },
      { id: "d", text: "El número de iteraciones necesarias", isCorrect: false },
    ],
    explanation: "Es una cota superior: |p_n - p| ≤ (b-a)/2ⁿ. El error real puede ser menor.",
    difficulty: "hard",
  },
  {
    id: "stopping-criteria",
    question: "¿Cuál NO es un criterio de paro típico para bisección?",
    options: [
      { id: "a", text: "Número máximo de iteraciones", isCorrect: false },
      { id: "b", text: "Error del intervalo ≤ ε", isCorrect: false },
      { id: "c", text: "|f(m)| ≤ τ", isCorrect: false },
      { id: "d", text: "Derivada de f igual a cero", isCorrect: true },
    ],
    explanation:
      "Bisección no requiere derivadas. Los criterios típicos son: máx iteraciones, error del intervalo, y opcionalmente |f(m)|.",
    difficulty: "easy",
  },
  {
    id: "advantages",
    question: "¿Cuál es la principal ventaja del método de bisección?",
    options: [
      { id: "a", text: "Convergencia muy rápida", isCorrect: false },
      { id: "b", text: "Requiere derivadas", isCorrect: false },
      { id: "c", text: "Siempre converge si se cumplen las condiciones", isCorrect: true },
      { id: "d", text: "Funciona sin continuidad", isCorrect: false },
    ],
    explanation: "La robustez es la principal ventaja: siempre converge si f es continua y f(a)·f(b) < 0.",
    difficulty: "easy",
  },
  {
    id: "invalid-case",
    question: "¿En cuál caso NO se puede aplicar bisección?",
    options: [
      { id: "a", text: "f(x) = x² en [-1, 2]", isCorrect: true },
      { id: "b", text: "f(x) = x³ - 2 en [1, 2]", isCorrect: false },
      { id: "c", text: "f(x) = cos(x) - x en [0, 1]", isCorrect: false },
      { id: "d", text: "f(x) = x - 1 en [0, 2]", isCorrect: false },
    ],
    explanation: "f(x) = x² en [-1, 2]: f(-1) = 1, f(2) = 4, entonces f(-1)·f(2) = 4 > 0. No hay cambio de signo.",
    difficulty: "medium",
  },
]

export const exerciseQuestions: ExerciseQuestion[] = [
  {
    id: "sqrt2-easy",
    title: "Raíz cuadrada de 2",
    description: "Encuentra la raíz de f(x) = x² - 2 en el intervalo [1, 2] con tolerancia 10⁻³",
    fx: "x^2 - 2",
    a: 1,
    b: 2,
    epsilon: 1e-3,
    expectedRoot: 1.414,
    expectedIterations: 10,
    difficulty: "easy",
  },
  {
    id: "cubic-medium",
    title: "Polinomio cúbico",
    description: "Encuentra la raíz de f(x) = x³ - x - 2 en el intervalo [1, 2] con tolerancia 10⁻⁴",
    fx: "x^3 - x - 2",
    a: 1,
    b: 2,
    epsilon: 1e-4,
    expectedRoot: 1.5214,
    expectedIterations: 14,
    difficulty: "medium",
  },
  {
    id: "transcendental-hard",
    title: "Ecuación trascendente",
    description: "Encuentra la raíz de f(x) = cos(x) - x en el intervalo [0, 1] con tolerancia 10⁻⁵",
    fx: "cos(x) - x",
    a: 0,
    b: 1,
    epsilon: 1e-5,
    expectedRoot: 0.73908,
    expectedIterations: 17,
    difficulty: "hard",
  },
]
