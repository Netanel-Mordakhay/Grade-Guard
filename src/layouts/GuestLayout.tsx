import { Box, Stack } from "@mantine/core";
import Footer from "../components/Footer/Footer";
import { ReactNode } from "react";
import "../styles/guest-layout.css";

interface Props {
  children: ReactNode;
}

const GuestLayout = ({ children }: Props) => {
  return (
    <Stack mih="100svh" align="stretch" justify="space-between" gap="md">
      <Box />
      {children}
      <Footer />
    </Stack>
  );
};

export default GuestLayout;
