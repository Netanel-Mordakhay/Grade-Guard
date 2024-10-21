import { ActionIcon, useDirection } from "@mantine/core";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function LanguageSwitcher() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon
      onClick={() => toggleDirection()}
      variant="default"
      radius="md"
      size="lg"
    >
      {dir === "rtl" ? <FaArrowLeft /> : <FaArrowRight />}
    </ActionIcon>
  );
}

export default LanguageSwitcher;
