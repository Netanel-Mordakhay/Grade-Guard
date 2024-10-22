import {
  Container,
  Title,
  Text,
  Paper,
  Anchor,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
} from "@mantine/core";
import Logo from "../Logo";
import { useTranslation } from "react-i18next";

const Authentication = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <Container ta="center" size={420} className="gradientBackground">
      {/* Container header */}
      <Logo />
      <Title fw="200" mb={20}>
        {t("login.loginMessage")}
      </Title>

      <Text c="dimmed" size="md">
        {t("login.createMessage1")}{" "}
        <Anchor size="md" component="button" fw={600}>
          {t("login.createAccount")}
        </Anchor>{" "}
      </Text>

      {/* Container body */}
      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        ta={i18n.language === "he" ? "right" : "left"} // Actuall components always stuck to the side without if, don't change
      >
        <TextInput
          label={t("global.email")}
          placeholder={t("global.emailAdress")}
          required
        />
        <PasswordInput
          label={t("global.password")}
          placeholder={t("global.password")}
          required
          mt="md"
        />
        <Group justify="space-between" mt="md">
          <Checkbox label={t("login.rememeberMe")} />
          <Anchor size="sm" component="button">
            {t("login.forgotPassword")}
          </Anchor>
          <Button fullWidth>{t("login.signIn")}</Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default Authentication;
