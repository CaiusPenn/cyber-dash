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
import {
  FormControl,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

export default function Survey() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  const [user_id, setUserId] = useState<number>(1001);
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

  const handleAnswerSelect = (answer: number) => {
    setSelectedAnswer(answer);
    
  };

  const handleAnswerSubmit = async () => {
    console.log("IM IN THIS");
    const q_id = questions[currentQuestionIndex].id; // Assuming each question has an ID
    console.log("ANSWER SELECTD: " + selectedAnswer);

    console.log("q_id: " + q_id);
    console.log("user_id: " + user_id);
    try {
      console.log("FETCHING");
      await fetch('/api/submit-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: selectedAnswer, q_id, user_id }),
      }
      );

      console.log("FETCHED");

      const newAnswers = [...answers, selectedAnswer];  
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(0);
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
    setSelectedAnswer(answers[currentQuestionIndex - 1] || 0);
  }
};

  return (
    <Stack mt="10" spacing="10">
      <Flex justifyContent="center" alignContent="center">
        <ProgressBar />
      </Flex>
      <Flex justifyContent="center" alignContent="center">
        <Text textColor="#4F6D7A" fontSize="2xl">
          {"Question: " + (currentQuestionIndex + 1)}
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

