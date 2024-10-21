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
  useDirection,
} from "@mantine/core";
import Logo from "../../components/Logo";
import { useTranslation } from "react-i18next";

const Authentication = () => {
  const { t } = useTranslation();
  const { dir } = useDirection();

  return (
    <Container ta="center" size={420} my={40}>
      {/* Container header */}
      <Logo />
      <Title fw="200" mb={20}>
        {t("login.loginMessage")}
      </Title>

      <Text c="dimmed" size="md">
        {t("login.createMessage1")}{" "}
        <Anchor size="md" component="button">
          {t("login.createAccount")}
        </Anchor>{" "}
        {t("login.createMessage2")}
      </Text>

      {/* Container body */}
      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        ta={dir === "rtl" ? "right" : "left"} // Actuall components always stuck to the side without if, don't change
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
