import { Image, Title, Box } from "@mantine/core";
import hatIcon from "../assets/img/hat.webp";

const Logo = () => {
  return (
    <Box className="logoContainer">
      <Image src={hatIcon} className="logoHat" />
      <Title>
        <span className="logoTitle">Grade</span>
        <span className="logoTitle logoTitleBlue">Guard</span>
      </Title>
    </Box>
  );
};

export default Logo;
