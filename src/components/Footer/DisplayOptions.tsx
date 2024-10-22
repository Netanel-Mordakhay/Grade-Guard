import { Group } from "@mantine/core";
import ColorSelect from "../ColorSelect";
import LanguageSelect from "../LanguageSelect";

interface Props {
  reverse: boolean;
}

const DisplayOptions = ({ reverse }: Props) => {
  if (reverse) {
    return (
      <Group maw="300px">
        <LanguageSelect />
        <ColorSelect />
      </Group>
    );
  } else {
    return (
      <Group maw="300px">
        <ColorSelect />
        <LanguageSelect />
      </Group>
    );
  }
};

export default DisplayOptions;
