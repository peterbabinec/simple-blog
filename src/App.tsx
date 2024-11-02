import { AppShell, Group, MantineProvider, Stack } from '@mantine/core';
import { ArticleCard } from './components/ArticleCard';
import '@mantine/core/styles.css';
import { UserButton } from './components/UserButton';

function App() {
  const article = {
    id: '123',
    image:
      'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    title: 'Top 50 underrated plants for house decoration',
    category: 'decorations',
    author: {
      name: 'Elsa Gardenowl',
      avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    },
    postedAt: new Date(),
    likes: 733,
  };

  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Group justify="flex-end" align="center">
            <UserButton />
          </Group>
        </AppShell.Header>

        <AppShell.Main h="100vh">
          <Stack align="center" justify="center" h="100%">
            <ArticleCard article={article} />
          </Stack>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
