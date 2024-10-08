import { Progress } from "@chakra-ui/react";
import React from "react";

interface ProgressBarProps {
  currentQuestionIndex: number; // Add prop for the current question index
  totalQuestions: number; // Add prop for total questions
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestionIndex, totalQuestions }) => {
  // Calculate the progress percentage
  const progressValue = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <Progress
      size="md"
      sx={{ "& > div": { backgroundColor: "#7D9CB7" } }}
      value={progressValue} // Use calculated value
      width="30%"
      borderRadius="full"
    />
  );
};

export default ProgressBar;
