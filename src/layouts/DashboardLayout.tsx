import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";

function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();
  //<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Header />
      </AppShell.Main>
    </AppShell>
  );
}

export default DashboardLayout;
