"use client";
import { cookies } from "next/headers";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Grid,
  GridItem,
  Stack,
  Text,
  Progress,
  Center,
  Flex,
  HStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import Options from "@/app/dashboard/survey/options";
import { FormControl, RadioGroup, Radio, Button } from "@chakra-ui/react";

export default function Survey() {
  const router = useRouter();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  const [user_id, setUserId] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUserId(Number(data.id));
    };

    fetchUserId();

    console.log(user_id);
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/questions"); // Adjust API endpoint as needed
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const handleAnswerSelect = (answer: number) => {
    setSelectedAnswer(answer);
  };

  const handleAnswerSubmit = async () => {
    if (selectedAnswer == 0) {
      setError("Please select an answer to continue."); // Set error message
      return;
    }

    const q_id = questions[currentQuestionIndex].id;
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, q_id, answer: selectedAnswer }),
      });

      if (!response.ok) {
        throw new Error("Error submitting survey");
      }
      setError(null);

      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(0);
      } else {
        alert("Survey complete! Thank you for your answers.");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert("Error submitting survey. Please try again.");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] || 0);
    }
  };

  return (
    <Stack mt="10" spacing="10" align="center">
      <Flex justifyContent="center" alignItems="center" width="100%">
        <ProgressBar
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={64}
        />
      </Flex>

      <Flex justifyContent="center" alignItems="center" width="100%">
        <Text textColor="black" fontSize="2xl" fontWeight="600">
          {"Question " + (currentQuestionIndex + 1) + ":"}
        </Text>
      </Flex>

      <Flex justifyContent="center" alignItems="center" width="100%">
        <Text fontSize="2xl" textAlign="center" width="60%" textColor="black">
          {questions[currentQuestionIndex].question + "."}
        </Text>
      </Flex>

      <FormControl isInvalid={!!error} width="100%" textAlign="center">
        <Options
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onSubmit={handleAnswerSubmit}
          onPrevious={handlePrevious}
        />
        {error && (
          <Flex justifyContent="center" alignItems="center" mt={4}>
            <FormErrorMessage>{error}</FormErrorMessage>{" "}
            {/* Center error message */}
          </Flex>
        )}
      </FormControl>
    </Stack>
  );
}