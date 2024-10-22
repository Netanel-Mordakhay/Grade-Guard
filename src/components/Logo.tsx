import { Image, Title, Box } from "@mantine/core";
import hatIcon from "../assets/img/hat.webp";

const Logo = () => {
  return (
    <Box className="logoContainer">
      <Title>
        <span className="logoTitle">Grade</span>
        <span className="logoTitle logoTitleBlue">Guard</span>
      </Title>
      <Image src={hatIcon} className="logoHat" />
    </Box>
  );
};

export default Logo;
