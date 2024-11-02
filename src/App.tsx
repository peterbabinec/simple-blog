import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { AppShell, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProfile } from './components/UserProfile';
import { Header } from './components/Header';
import { Articles } from './components/Articles';

function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Notifications position="top-center" />
        <AppShell header={{ height: 60 }} padding="md">
          <Header />
          <AppShell.Main>
            <Routes>
              <Route path="/" element={<Articles />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
