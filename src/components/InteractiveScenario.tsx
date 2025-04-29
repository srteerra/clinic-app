"use client"

import { Box, Circle, useDisclosure } from "@chakra-ui/react"
import { useGameStore } from "@/stores/game.store"
import { useState } from "react"
import QuestionModal from "./QuestionModal"

export default function InteractiveScenario() {
  const { currentScenario, checkAllQuestionsAnswered, moveToNextScenario } = useGameStore()
  const { open, onOpen, onClose } = useDisclosure()
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null)

  const handleHotspotClick = (index: number) => {
    setSelectedHotspot(index)
    onOpen()
  }

  const handleCloseModal = () => {
    onClose()

    if (checkAllQuestionsAnswered()) {
      moveToNextScenario()
    }
  }

  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage={`url(${currentScenario.backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
    >
      {currentScenario.hotspots.map((hotspot, index) => (
        <Circle
          key={index}
          position="absolute"
          top={`${hotspot.position.y}%`}
          left={`${hotspot.position.x}%`}
          size="50px"
          bg={hotspot.answered ? hotspot.isCorrect ? "green.400" : "red.400" : "yellow.400"}
          opacity={0.8}
          _hover={{ opacity: 1, transform: "scale(1.1)" }}
          cursor="pointer"
          onClick={() => handleHotspotClick(index)}
          transition="all 0.2s"
        />
      ))}

      {selectedHotspot !== null && (
        <QuestionModal isOpen={open} onClose={handleCloseModal} hotspotIndex={selectedHotspot} />
      )}
    </Box>
  )
}
