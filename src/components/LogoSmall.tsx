import { Image, Title, Box } from "@mantine/core";
import hatIcon from "../assets/img/hat.webp";

// NEED TO REFACTOR INTO ONE LOGO WITH PROP //

const LogoSmall = () => {
  return (
    <Box className="logoContainerSmall">
      <Title>
        <span className="logoTitleSmall">Grade</span>
        <span className="logoTitleSmall logoTitleBlue">Guard</span>
      </Title>
      <Image src={hatIcon} className="logoHatSmall" />
    </Box>
  );
};

export default LogoSmall;
