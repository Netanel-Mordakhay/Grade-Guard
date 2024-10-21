import { Image, Title, Box } from "@mantine/core";
import hatIcon from "../assets/img/hat.png";
import "../global.css";

const Logo = () => {
  return (
    <Box className="logoContainer">
      <Image src={hatIcon} className="titleHat" />
      <Title>
        <span className="title titleDark">Grade</span>
        <span className="title titleLight">Guard</span>
      </Title>
    </Box>
  );
};

export default Logo;
