import {
  SimpleGrid,
  Text,
  ThemeIcon,
  Grid,
  rem,
  Container,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IoIosPricetag, IoIosNotifications } from "react-icons/io";
import { TbSchool } from "react-icons/tb";
import { GiThreeFriends } from "react-icons/gi";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: IoIosPricetag,
      title: t("login.features.feat1title"),
      description: t("login.features.feat1desc"),
    },
    {
      icon: TbSchool,
      title: t("login.features.feat2title"),
      description: t("login.features.feat2desc"),
    },
    {
      icon: GiThreeFriends,
      title: t("login.features.feat3title"),
      description: t("login.features.feat3desc"),
    },
    {
      icon: IoIosNotifications,
      title: t("login.features.feat4title"),
      description: t("login.features.feat4desc"),
    },
  ];

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} radius="md" variant="gradient">
        <feature.icon style={{ width: rem(26), height: rem(26) }} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container size={350}>
      <Grid>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
          {items}
        </SimpleGrid>
      </Grid>
    </Container>
  );
};

export default Features;
