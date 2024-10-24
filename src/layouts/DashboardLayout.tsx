import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function DashboardLayout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Header>
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default DashboardLayout;
