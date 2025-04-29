"use client"

import { HStack, Icon, Box } from "@chakra-ui/react"
import { useGameStore } from "@/stores/game.store"
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

export default function LivesDisplay() {
  const { lives } = useGameStore()

  const maxLives = 5

  return (
    <Box
      position="fixed"
      top="20px"
      left="20px"
      zIndex="10"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="md"
      px={3}
      py={2}
    >
      <HStack spacing={1}>
        {Array.from({ length: maxLives }).map((_, index) => (
          <Icon
            key={index}
            as={index < lives ? FaHeart : FaRegHeart}
            color="red.500"
            w={6}
            h={6}
            transition="all 0.3s"
            transform={index < lives ? "scale(1.1)" : "scale(1)"}
          />
        ))}
      </HStack>
    </Box>
  )
}
