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

const Page = () => {
  const [question, setQuestion] = useState("");
  const [currentQuestionId, setCurrentQuestionId] = useState(23); // Example question ID
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch question from database based on the currentQuestionId
    const fetchQuestion = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/questions/${currentQuestionId}`);
        const data = await response.json();
        setQuestion(data.question_text); // Assuming the response has a `question_text` field
      } catch (error) {
        console.error("Error fetching the question:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestion();
  }, [currentQuestionId]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack mt="10" spacing="10">
      <Flex justifyContent="center" alignContent="center">
        <ProgressBar />
      </Flex>
      <Flex justifyContent="center" alignContent="center">
        <Text textColor="#4F6D7A" fontSize="2xl">
          Question {currentQuestionId}:
        </Text>
      </Flex>
      <Flex justifyContent="center" alignContent="center">
        <Text fontSize="2xl" width="60%">
          {question}
        </Text>
      </Flex>
      <Options />
    </Stack>
  );
};

export default Page;
