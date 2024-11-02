import { AppShell, Group, Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserButton } from './UserButton';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isProfilePage = location.pathname === '/profile';

  return (
    <AppShell.Header>
      <Group justify="space-between" align="center" h="100%" px="md">
        {isProfilePage && (
          <Group gap="xs" justify="center" align="center">
            <Button size="md" leftSection={<IconArrowLeft size={20} />} variant="white" onClick={() => navigate('/')}>
              Back
            </Button>
          </Group>
        )}
        <Group ml={!isProfilePage ? 'auto' : 0}>
          <UserButton />
        </Group>
      </Group>
    </AppShell.Header>
  );
}
