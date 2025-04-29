"use client"
import { Box, Text, Flex, Image, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react"
import { useGameStore } from "@/stores/game.store"
import { useEffect, useRef, useState } from "react"

export default function DialogScenario() {
  const { currentScenario, advanceDialog, isDialogComplete, moveToNextScenario } = useGameStore()
  const [typingText, setTypingText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [multiAnswers, setMultiAnswers] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const currentDialog = currentScenario?.dialogs?.[currentScenario.currentDialogIndex] ?? null
  if (!currentDialog) return null

  const isMulti = currentDialog?.isMulti ?? false
  const options = currentDialog?.options ?? []
  const correctAnswers = currentDialog?.correctAnswers ?? []

  useEffect(() => {
    if (currentDialog && !isMulti) {
      setIsTyping(true)
      setTypingText("")
      let index = 0

      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
      }

      typingIntervalRef.current = setInterval(() => {
        if (index < currentDialog.text.length) {
          setTypingText((prev) => prev + currentDialog.text.charAt(index))
          index++
        } else {
          setIsTyping(false)
          clearInterval(typingIntervalRef.current!)
          typingIntervalRef.current = null
        }
      }, 30)

      return () => {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current)
          typingIntervalRef.current = null
        }
      }
    }
  }, [currentDialog, isMulti])

  const handleClick = () => {
    if (isTyping) {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
      }
      setTypingText(currentDialog.text)
      setIsTyping(false)
    } else if (isMulti) {
      const isAnswerCorrect = checkAnswers(multiAnswers, correctAnswers)
      setIsCorrect(isAnswerCorrect)
    } else {
      if (isDialogComplete()) {
        moveToNextScenario()
      } else {
        advanceDialog()
      }
    }
  }

  const handleMultiChange = (selected: string[]) => {
    setMultiAnswers(selected)
  }

  const checkAnswers = (selectedAnswers: string[], correctAnswers: string[]): boolean => {
    if (selectedAnswers.length !== correctAnswers.length) {
      return false
    }
    return selectedAnswers.every((answer) => correctAnswers.includes(answer))
  }

  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage={`url(${currentScenario.backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      onClick={!isMulti ? handleClick : undefined}
      cursor="pointer"
    >
      {currentDialog && (
        <Flex
          position="absolute"
          bottom="0"
          width="100%"
          bg="rgba(0, 0, 0, 0.7)"
          p={6}
          color="white"
          flexDirection="column"
        >
          {currentDialog.character && (
            <Text fontWeight="bold" fontSize="xl" mb={2}>
              {currentDialog.character}:
            </Text>
          )}

          {isMulti ? (
            <CheckboxGroup value={multiAnswers} onChange={handleMultiChange}>
              <Stack gap{2}>
                {options.map((option) => (
                  <Checkbox key={option.id} value={option.value} colorScheme="teal">
                    {option.text}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          ) : (
            <Text fontSize="lg" w={"60%"}>{typingText}</Text>
          )}

          {!isTyping && !isMulti && (
            <Text position="absolute" right={"20%"} bottom={"30%"} fontSize="sm" color="gray.300">
              Haz clic para continuar...
            </Text>
          )}

          {isMulti && (
            <Text
              color="gray.300"
              fontSize="md"
              mt={4}
              textAlign="right"
              onClick={handleClick}
              cursor="pointer"
            >
              Confirmar selección
            </Text>
          )}

          {isCorrect !== null && isMulti && (
            <Text fontSize="lg" color={isCorrect ? "green.400" : "red.400"} mt={4}>
              {isCorrect ? "¡Respuestas correctas!" : "Respuestas incorrectas. Inténtalo de nuevo."}
            </Text>
          )}

          <Image
            src={"/images/nurse.png"}
            alt="Character"
            position="absolute"
            bottom="0"
            right="5%"
            width="200px"
          />
        </Flex>
      )}
    </Box>
  )
}