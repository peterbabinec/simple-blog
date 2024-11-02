import { useUser } from '../hooks/useUser';
import {
  Paper,
  TextInput,
  Avatar,
  Stack,
  Title,
  Button,
  Container,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useForm, isNotEmpty, isEmail } from '@mantine/form';
import { useEffect } from 'react';

export function UserProfile() {
  const { user, updateUser } = useUser();

  const { initialize, ...form } = useForm({
    mode: 'uncontrolled',
    initialValues: {
      displayName: '',
      email: '',
    },

    validate: {
      displayName: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  useEffect(() => {
    if (user) {
      initialize(user);
    }
  }, [user, initialize]);

  const handleSubmit = form.onSubmit(async (values) => {
    await updateUser({
      ...values,
    });

    notifications.show({
      message: 'Profile updated',
      color: 'green',
      autoClose: 5000,
    });
  });

  if (!user) return null;

  return (
    <Container size="sm" py="xl">
      <Paper shadow="md" p="xl" radius="md">
        <form onSubmit={handleSubmit}>
          <Stack align="center" gap="lg">
            <Title order={2}>Profile Settings</Title>
            <Avatar src={user.avatar} size="xl" radius="xl" />
            <TextInput
              label="Display Name"
              placeholder="Your name"
              key={form.key('displayName')}
              w="100%"
              {...form.getInputProps('displayName')}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              key={form.key('email')}
              w="100%"
              {...form.getInputProps('email')}
            />
            <Button fullWidth type="submit">
              Save
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
