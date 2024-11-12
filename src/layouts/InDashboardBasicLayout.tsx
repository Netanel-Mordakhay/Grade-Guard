import PageBanner from "../components/PageBanner";
import { Grid } from "@mantine/core";
import InfoCard from "../components/InfoCard";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const InDashboardBasicLayout = ({ title, children }: Props) => {
  const [child1, child2] = React.Children.toArray(children);

  return (
    <>
      <PageBanner title={title}></PageBanner>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <InfoCard title="Assignments">{child1}</InfoCard>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child2}</Grid.Col>
      </Grid>
    </>
  );
};

export default InDashboardBasicLayout;
