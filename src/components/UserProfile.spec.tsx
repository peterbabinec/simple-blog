import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { UserProfile } from './UserProfile';
import { api } from '../api/client';
import { renderWrapped } from '../tests/wrappers';

describe('UserProfile', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders user profile form', async () => {
    const user = {
      id: '1',
      displayName: 'Test User',
      email: 'test@example.com',
      avatar: 'https://example.com/avatar.jpg',
    };
    vi.spyOn(api, 'getCurrentUser').mockResolvedValue(user);

    renderWrapped(<UserProfile />);

    expect(await screen.findByText('Profile Settings')).toBeVisible();
    expect(screen.getByLabelText('Display Name')).toBeVisible();
    expect(screen.getByLabelText('Email')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Save' })).toBeVisible();
  });

  it('shows success message after successful save', async () => {
    const user = {
      id: '1',
      displayName: 'Test User',
      email: 'test@example.com',
      avatar: 'https://example.com/avatar.jpg',
    };
    const userEvt = userEvent.setup();
    vi.spyOn(api, 'getCurrentUser').mockResolvedValue(user);
    vi.spyOn(api, 'updateUser').mockResolvedValue(user);

    renderWrapped(<UserProfile />);

    const nameInput = await screen.findByDisplayValue('Test User');
    await userEvt.type(nameInput, 'New Name');
    await userEvt.click(screen.getByRole('button', { name: 'Save' }));

    expect(await screen.findByText('Profile updated')).toBeVisible();
  });
});
