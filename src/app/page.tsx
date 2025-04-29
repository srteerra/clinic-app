"use client"

import { Button, Center, Container } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useGameStore } from "@/stores/game.store"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const resetGame = useGameStore((state) => state.resetGame)

  useEffect(() => {
    resetGame()
  }, [resetGame])

  const handlePlay = () => {
    router.push("/game")
  }

  return (
    <Container height="100vh" maxW="100%" p={0}>
      <Center flexDirection="column" height="100%" bg="gray.800" color="white">
        <Button onClick={handlePlay} size="lg" bgColor={"red.600"} height="70px" width="200px" borderRadius={"4xl"}
                fontSize="2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-play"
               viewBox="0 0 16 16">
            <path
              d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
          </svg>
          Jugar
        </Button>
      </Center>
    </Container>
  )
}
