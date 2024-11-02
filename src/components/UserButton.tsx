import { UnstyledButton, Avatar, Text, rem, Group } from '@mantine/core';
import classes from './UserButton.module.css';

export function UserButton() {
  return (
    <UnstyledButton className={classes.user} m={rem(6)} px={rem(8)} py={rem(4)}>
      <Group gap="sm" align="center">
        <Text size="md" fw={500}>
          Bill Headbanger
        </Text>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
          radius="xl"
        />
      </Group>
    </UnstyledButton>
  );
}
