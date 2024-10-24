import { Box, Stack } from "@mantine/core";
import Footer from "../components/Footer/Footer";
import { ReactNode } from "react";
import classes from "../styles/guest.module.css";
//import "../styles/guest-layout.css";

interface Props {
  children: ReactNode;
}

const GuestLayout = ({ children }: Props) => {
  return (
    <Stack
      mih="100svh"
      align="stretch"
      justify="space-between"
      gap="md"
      className={classes.studentBackground}
    >
      <Box />
      {children}
      <Footer />
    </Stack>
  );
};

export default GuestLayout;
