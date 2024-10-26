import { Paper, Title } from "@mantine/core";

interface Props {
  title: string;
}

const PageBanner = ({ title }: Props) => {
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      className="statisticsContainer statisticsText"
    >
      <Title>{title}</Title>
    </Paper>
  );
};

export default PageBanner;
