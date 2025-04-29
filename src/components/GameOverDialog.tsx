"use client"

import {
  Button,
  Text,
  HStack,
  Portal, Dialog
} from "@chakra-ui/react"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { useGameStore } from "@/stores/game.store"

interface GameOverDialogProps {
  isOpen: boolean
}

export default function GameOverDialog({ isOpen }: GameOverDialogProps) {
  const cancelRef = useRef(null)
  const router = useRouter()
  const { resetGame } = useGameStore()

  const handlePlayAgain = () => {
    resetGame()
    router.push("/game")
  }

  const handleBackToHome = () => {
    resetGame()
    router.push("/")
  }

  return (
    <Dialog.Root
      open={isOpen}
      placement={"center"}
      motionPreset="slide-in-bottom"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content borderRadius="md" padding={4} width="90%" maxWidth="400px" margin="auto">
            <Dialog.Header>
              <Dialog.Title>¡Has perdido!</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body padding={8}>
              <Text textAlign="center" fontSize="lg" mb={4}>
                Te has quedado sin vidas. ¡Inténtalo de nuevo!
              </Text>

              <HStack width="100%" justifyContent="center">
                <Button ref={cancelRef} p={5} onClick={handleBackToHome} variant="outline">
                  Volver al inicio
                </Button>
                <Button colorScheme="teal" p={5} onClick={handlePlayAgain} bgColor={"green.500"} ml={3}>
                  Jugar de nuevo
                </Button>
              </HStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
