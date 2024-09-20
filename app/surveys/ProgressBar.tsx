import { Progress } from "@chakra-ui/react";
import React from "react";

const ProgressBar = () => {
  return (
    <Progress
      size="md"
      sx={{ "& > div": { backgroundColor: "#7D9CB7" } }}
      value={50}
      width="30%"
      borderRadius="full"
    />
  );
};

export default ProgressBar;
