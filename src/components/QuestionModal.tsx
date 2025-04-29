"use client"

import {
  Button,
  VStack,
  RadioGroup,
  CloseButton,
  Dialog,
  Portal,
  Box,
  Checkbox, CheckboxGroup,
  Fieldset, For,
} from "@chakra-ui/react"
import { useGameStore } from "@/stores/game.store"
import { useState, useEffect } from "react"
import Swal from 'sweetalert2'

interface QuestionPopoverProps {
  hotspotIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function QuestionPopover({ hotspotIndex, isOpen, onClose }: QuestionPopoverProps) {
  const { currentScenario, answerQuestion, loseLife, lives } = useGameStore()
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  const handleMultiChange = (value: any) => {
    if (selectedAnswers.includes(value)) {
      setSelectedAnswers(selectedAnswers.filter((answer) => answer !== value))
    } else {
      setSelectedAnswers([...selectedAnswers, value])
    }
  }

  const hotspot = currentScenario.hotspots[hotspotIndex]
  const question = hotspot.question

  const handleSubmit = () => {
    const isCorrect = question.isMulti ? checkAnswers(selectedAnswers, question.correctAnswers) : selectedAnswer === question.correctAnswer

    if (!isCorrect) {
      loseLife()

      if (lives <= 1) {
        onClose()
        return
      } else {
        Swal.fire({
          title: 'OOPS!',
          text: '¿Estas segur@?',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        })
      }
    }

    if (question.isMulti) {
      answerQuestion(hotspotIndex, selectedAnswers, isCorrect)
    } else {
      answerQuestion(hotspotIndex, selectedAnswer, isCorrect)
    }

    setSelectedAnswer("")
    setSelectedAnswers([])
    onClose()
  }

  const checkAnswers = (selected: string[], correct: string[]): boolean => {
    if (selected.length !== correct.length) return false
    return selected.every((answer) => correct.includes(answer))
  }

  useEffect(() => {
    if (hotspot && hotspot.selectedAnswer) {
      if (question.isMulti) {
        setSelectedAnswers(hotspot.selectedAnswer)
      } else {
        setSelectedAnswer(hotspot.selectedAnswer)
      }
    } else {
      setSelectedAnswer("")
    }
  }, [hotspot]);

  return (
    <Dialog.Root
      open={isOpen}
      placement={"center"}
      motionPreset="slide-in-bottom"
    >
      <Portal>
        <Dialog.Backdrop/>
        <Dialog.Positioner>
          <Dialog.Content borderRadius="md" padding={4} width="90%" maxWidth="400px" margin="auto">
            <Dialog.Header>
              <Dialog.Title>{question.text}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body padding={8}>
              {question.isMulti ?
                <Fieldset.Root>
                  <CheckboxGroup defaultValue={[""]} name="framework">
                    <Fieldset.Content>
                      <For each={question.options}>
                        {(option) => (
                          <Checkbox.Root key={option.id} value={option.value} checked={selectedAnswers.includes(option.value)} onChange={() => handleMultiChange(option.value)} colorScheme="teal">
                            <Checkbox.HiddenInput/>
                            <Checkbox.Control/>
                            <Checkbox.Label>{option.text}</Checkbox.Label>
                          </Checkbox.Root>
                        )}
                      </For>
                    </Fieldset.Content>
                  </CheckboxGroup>
                </Fieldset.Root>
                :
                <RadioGroup.Root value={selectedAnswer} onValueChange={(e) => setSelectedAnswer(e.value)}>
                  <VStack align="start" spacing={3}>
                    {question.options.map((option) => (
                      <Box key={option.id} p={2} width="100%" cursor={"pointer"}
                           onClick={() => setSelectedAnswer(option.value)} borderWidth="1px" borderRadius="md"
                           _hover={{ bg: "gray.50" }}>
                        <RadioGroup.Item key={option.id} value={option.value}>
                          <RadioGroup.ItemHiddenInput/>
                          <RadioGroup.ItemIndicator/>
                          <RadioGroup.ItemText>{option.text}</RadioGroup.ItemText>
                        </RadioGroup.Item>
                      </Box>
                    ))}
                  </VStack>
                </RadioGroup.Root>
              }

              <Button mt={6} colorScheme="teal" width="100%" onClick={handleSubmit}
                      disabled={question.isMulti ? selectedAnswers.length === 0 : (selectedAnswer === "" || selectedAnswer == hotspot.selectedAnswer)}>
                {hotspot.selectedAnswer ? "Cambiar respuesta" : "Responder"}
              </Button>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={() => onClose()}/>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
