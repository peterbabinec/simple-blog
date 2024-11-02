import { UnstyledButton, Avatar, rem, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './UserButton.module.css';
import { useUser } from '../hooks/useUser';

export function UserButton() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <UnstyledButton
      className={classes.user}
      m={rem(6)}
      px={rem(8)}
      py={rem(4)}
      onClick={() => navigate('/profile')}
    >
      <Group gap="sm" align="center">
        <Avatar src={user?.avatar} radius="xl" />
      </Group>
    </UnstyledButton>
  );
}
