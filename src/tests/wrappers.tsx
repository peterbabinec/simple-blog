import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export function renderWrapped(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter>
        <MantineProvider>
          <Notifications />
          {children}
        </MantineProvider>
      </MemoryRouter>
    ),
    ...options,
  });
}
