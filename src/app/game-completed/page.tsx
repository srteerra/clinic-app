"use client"

import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useGameStore } from "@/stores/game.store"

export default function GameCompletedPage() {
  const router = useRouter()
  const { resetGame, gameStats } = useGameStore()

  const handlePlayAgain = () => {
    resetGame()
    router.push("/game")
  }

  return (
    <Center height="100vh" bg="gray.800" color="white">
      <VStack gap={9}>
        <Heading size="2xl">¡Felicidades!</Heading>
        <Text fontSize="xl">Has completado todos los escenarios del juego</Text>

        <Box bg="gray.700" p={6} borderRadius="md" w={"full"}>
          <Heading size="md" mb={4}>
            Estadísticas:
          </Heading>
          <Text>Preguntas correctas: {gameStats.correctAnswers}</Text>
          <Text>Preguntas incorrectas: {gameStats.incorrectAnswers}</Text>
          <Text>
            Tiempo total: {Math.floor(gameStats.totalTime / 60)} minutos y {gameStats.totalTime % 60} segundos
          </Text>
        </Box>

        <Button bgColor={"green.700"} size="lg" onClick={handlePlayAgain} p={5} w={"full"}>
          Jugar de nuevo
        </Button>
      </VStack>
    </Center>
  )
}
