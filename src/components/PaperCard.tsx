import { Paper } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PaperCard = ({ children }: Props) => {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      {children}
    </Paper>
  );
};

export default PaperCard;
