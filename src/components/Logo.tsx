import { Image, Title } from "@mantine/core";
import hatIcon from "../assets/img/hat.png";
import "../global.css";

const Logo = () => {
  return (
    <div>
      <Image src={hatIcon} className="titleHat" />
      <Title>
        <span className="title titleDark">Grade</span>
        <span className="title titleLight">Guard</span>
      </Title>
    </div>
  );
};

export default Logo;
