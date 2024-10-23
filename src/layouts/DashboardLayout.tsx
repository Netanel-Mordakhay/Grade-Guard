import { AppShell } from "@mantine/core";
//import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../components/navbar/Navbar";
import Homepage from "../components/homepage/Homepage";

function DashboardLayout() {
  const [opened] = useDisclosure();
  //const [opened, { toggle }] = useDisclosure();
  //<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="sm"
    >
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Homepage />
      </AppShell.Main>
    </AppShell>
  );
}

export default DashboardLayout;
