import {
  Container,
  Title,
  Paper,
  Anchor,
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  useDirection,
} from "@mantine/core";
import Logo from "../Logo";
import { useTranslation } from "react-i18next";
import "../../styles/login.css";
const Form = () => {
  const { t } = useTranslation();
  const { dir } = useDirection();

  return (
    <Container ta="center" size={420}>
      {/* Container header */}
      <Logo />
      <Title fw="200" mb={20}>
        {t("signup.signupMessage")}
      </Title>

      {/* Container body */}
      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        ta={dir === "rtl" ? "right" : "left"} // Actuall components always stuck to the side without if, don't change
      >
        <TextInput
          label={t("signup.firstName")}
          placeholder={t("signup.firstName")}
          required
          mt="md"
        />
        <TextInput
          label={t("signup.lastName")}
          placeholder={t("signup.lastName")}
          mt="md"
        />
        <TextInput
          label={t("global.email")}
          placeholder={t("global.emailAdress")}
          required
          mt="md"
        />
        <PasswordInput
          label={t("global.password")}
          placeholder={t("global.password")}
          required
          mt="md"
        />
        <PasswordInput
          label={t("signup.repeatPassword")}
          placeholder={t("global.password")}
          required
          mt="md"
        />
        <Group justify="space-between" mt="md">
          <Checkbox label={t("signup.acceptTermsOfService")} />
          <Anchor size="sm" component="button">
            {t("signup.termsOfService")}
          </Anchor>
          <Button fullWidth>{t("signup.register")}</Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default Form;
