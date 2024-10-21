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

const Authentication = () => {
  return (
    <Container ta="center" size={420} my={40}>
      {/* Container header */}
      <Title fw="200" mb={20}>
        Log in to your account
      </Title>

      <Text c="dimmed" size="md">
        Don't have an account?{" "}
        <Anchor size="md" component="button">
          Create one
        </Anchor>{" "}
        in only a minute.
      </Text>

      {/* Container body */}
      <Paper withBorder shadow="md" p={30} mt={30} ta="left">
        <TextInput label="Email" placeholder="Email address" required />
        <PasswordInput
          label="Password"
          placeholder="Password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="md">
          <Checkbox label="Remember me" />
          <Anchor size="sm" component="button">
            Forgot your password?
          </Anchor>
          <Button fullWidth>Sign in</Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default Authentication;
