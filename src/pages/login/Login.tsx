import { Flex, Group } from "@mantine/core";
import Authentication from "./Authentication";
import Welcome from "./Welcome";
import LanguageSelect from "../../components/LanguageSelect";
//import ColorSelect from "../../components/ColorSelect";
import Features from "./Features";

const login = () => {
  return (
    <Flex
      //mih={50}
      h="100svh"
      //bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Group>
        <Authentication />
        <Features />
      </Group>
      <Welcome />
      <LanguageSelect />
    </Flex>
  );
};

export default login;
