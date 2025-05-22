import { Box } from "@mui/material";
import { PockerCard } from "./pokerCard";

const planningPockerOptions = [
  "0.5",
  "1",
  "2",
  " 3",
  "5",
  "8",
  "13",
  "21",
  "?",
  "C",
];

export const PlanningPoker = () => {
  return (
    <Box display="flex" gap={2}>
      {planningPockerOptions.map((value: string) => (
        <Box>
          <PockerCard value={value} />
        </Box>
      ))}
    </Box>
  );
};
