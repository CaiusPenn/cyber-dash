'use client';
import React, { useEffect, useState } from "react";
import Layout from "./layout";
import {
  Grid,
  GridItem,
  Stack,
  Text,
  Progress,
  Center,
  Flex,
  HStack,
} from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import Options from "./options";

export default function Survey() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [userId, setUserId] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch question from database based on the currentQuestionId
      const fetchQuestions = async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/questions'); // Adjust API endpoint as needed
          const data = await response.json();
          setQuestions(data);
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
         finally {
          setLoading(false);
        }
      };
      
  
      fetchQuestions();
    }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleAnswerSubmit = async () => {
    
    const questionId = questions[currentQuestionIndex].id; // Assuming each question has an ID

    try {
      await fetch('/api/submit-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, questionId, answer: selectedAnswer }),
      });

      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
      } else {
        alert('Survey complete! Thank you for your answers.');
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('Error submitting survey. Please try again.');
    }
  };


const handlePrevious = () => {
  if (currentQuestionIndex > 0) {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedAnswer(answers[currentQuestionIndex - 1] || '');
  }
};

  return (
    <Stack mt="10" spacing="10">
      <Flex justifyContent="center" alignContent="center">
        <ProgressBar />
      </Flex>
      <Flex justifyContent="center" alignContent="center">
        <Text textColor="#4F6D7A" fontSize="2xl">
          Questions
        </Text>
      </Flex>
      <Flex justifyContent="center" alignContent="center">
        <Text fontSize="2xl" width="60%">
         {questions[currentQuestionIndex].question + "."}
        </Text>
      </Flex>
      <Options
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        onSubmit={handleAnswerSubmit}
        onPrevious={handlePrevious}
      />
    </Stack>
  );
};

