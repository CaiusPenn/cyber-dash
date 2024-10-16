import { Progress } from "@chakra-ui/react";
import React from "react";

interface ProgressBarProps {
  currentQuestionIndex: number; 
  totalQuestions: number; 
}
const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestionIndex,
  totalQuestions,
}) => {
  
  const progressValue = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <Progress
      size="md"
      sx={{ "& > div": { backgroundColor: "blue" } }}
      value={progressValue} 
      width="30%"
      borderRadius="full"
    />
  );
};

export default ProgressBar;