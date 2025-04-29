import { create } from "zustand"
import { gameData } from "@/utils/constants/data"

interface GameStats {
  correctAnswers: number
  incorrectAnswers: number
  totalTime: number
  startTime: number
}

interface GameState {
  currentScenarioIndex: number
  scenarios: typeof gameData.scenarios
  currentScenario: (typeof gameData.scenarios)[0]
  gameCompleted: boolean
  gameStats: GameStats
  lives: number
  gameOver: boolean

  moveToNextScenario: () => void
  advanceDialog: () => void
  isDialogComplete: () => boolean
  answerQuestion: (hotspotIndex: number, answerId: string, isCorrect: boolean) => void
  checkAllQuestionsAnswered: () => boolean
  resetGame: () => void
  loseLife: () => void
}

export const useGameStore = create<GameState>((set, get) => ({
  currentScenarioIndex: 0,
  scenarios: gameData.scenarios,
  currentScenario: gameData.scenarios[0],
  gameCompleted: false,
  gameStats: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    totalTime: 0,
    startTime: Date.now(),
  },
  lives: 5,
  gameOver: false,

  moveToNextScenario: () => {
    const nextIndex = get().currentScenarioIndex + 1

    if (nextIndex < get().scenarios.length) {
      set({
        currentScenarioIndex: nextIndex,
        currentScenario: get().scenarios[nextIndex],
      })
    } else {
      const endTime = Date.now()
      const totalSeconds = Math.floor((endTime - get().gameStats.startTime) / 1000)

      set((state) => ({
        gameCompleted: true,
        gameStats: {
          ...state.gameStats,
          totalTime: totalSeconds,
        },
      }))
    }
  },

  advanceDialog: () => {
    const { currentScenario } = get()

    if (currentScenario.type === "dialog") {
      const nextDialogIndex = currentScenario.currentDialogIndex + 1

      if (nextDialogIndex < currentScenario.dialogs.length) {
        set((state) => ({
          currentScenario: {
            ...state.currentScenario,
            currentDialogIndex: nextDialogIndex,
          },
        }))
      }
    }
  },

  isDialogComplete: () => {
    const { currentScenario } = get()

    if (currentScenario.type === "dialog") {
      return currentScenario.currentDialogIndex === currentScenario.dialogs.length - 1
    }

    return false
  },

  answerQuestion: (hotspotIndex, answerId, isCorrect) => {
    set((state) => {
      const updatedHotspots = [...state.currentScenario.hotspots]
      updatedHotspots[hotspotIndex] = {
        ...updatedHotspots[hotspotIndex],
        answered: true,
        selectedAnswer: answerId,
        isCorrect
      }

      const updatedStats = {
        ...state.gameStats,
        correctAnswers: isCorrect ? state.gameStats.correctAnswers + 1 : state.gameStats.correctAnswers,
        incorrectAnswers: !isCorrect ? state.gameStats.incorrectAnswers + 1 : state.gameStats.incorrectAnswers,
      }

      return {
        currentScenario: {
          ...state.currentScenario,
          hotspots: updatedHotspots,
        },
        gameStats: updatedStats,
      }
    })
  },

  checkAllQuestionsAnswered: () => {
    const { currentScenario } = get()

    if (currentScenario.type === "interactive") {
      return currentScenario.hotspots.every((hotspot) => hotspot.answered)
    }

    return false
  },

  resetGame: () => {
    const resetScenarios = JSON.parse(JSON.stringify(gameData.scenarios))

    set({
      currentScenarioIndex: 0,
      scenarios: resetScenarios,
      currentScenario: resetScenarios[0],
      gameCompleted: false,
      lives: 5,
      gameOver: false,
      gameStats: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        totalTime: 0,
        startTime: Date.now(),
      },
    })
  },

  loseLife: () => {
    set((state) => {
      const newLives = state.lives - 1
      return {
        lives: newLives,
        gameOver: newLives <= 0,
      }
    })
  },
}))
