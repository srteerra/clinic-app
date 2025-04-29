"use client"

import { Box } from "@chakra-ui/react"
import { useGameStore } from "@/stores/game.store"
import DialogScenario from "@/components/DialogScenario"
import InteractiveScenario from "@/components/InteractiveScenario"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import LivesDisplay from "@/components/LivesDisplay";
import GameOverDialog from "@/components/GameOverDialog";

export default function GamePage() {
  const { currentScenario, gameCompleted, gameOver } = useGameStore()
  const router = useRouter()

  useEffect(() => {
    if (gameCompleted) {
      router.push("/game-completed")
    }
  }, [gameCompleted, router])

  return (
    <Box height="100vh" width="100%" position="relative">
      <LivesDisplay />
      {currentScenario.type === "dialog" && <DialogScenario />}
      {currentScenario.type === "interactive" && <InteractiveScenario />}
      <GameOverDialog isOpen={gameOver} />
    </Box>
  )
}
