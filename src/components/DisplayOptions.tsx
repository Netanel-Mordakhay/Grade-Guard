import { Group } from "@mantine/core";
import ColorSelect from "./ColorSelect";
import LanguageSelect from "./LanguageSelect";

const DisplayOptions = () => {
  return (
    <Group maw="300px">
      <ColorSelect />
      <LanguageSelect />
    </Group>
  );
};

export default DisplayOptions;
