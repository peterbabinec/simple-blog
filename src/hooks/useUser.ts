import { useState, useEffect } from 'react';
import { api } from '../api/client';
import { User } from '../api/types';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await api.getCurrentUser('1');
        setUser(userData ?? null);
      } catch (error) {
        console.error('Failed to load user:', error);
      }
    };
    loadUser();
  }, []);

  const updateUser = async (userInput: Partial<User>) => {
    try {
      const updatedUserData = await api.updateUser('1', userInput);
      setUser({ ...updatedUserData });
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  };

  return { user, updateUser };
}
