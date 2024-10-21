import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { CiLight, CiDark } from "react-icons/ci";

const ColorSelect = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="filled"
      aria-label="Toggle theme"
      onClick={() => toggleColorScheme()}
    >
      {colorScheme === "dark" ? <CiLight size={24} /> : <CiDark size={24} />}
    </ActionIcon>
  );
};

export default ColorSelect;
