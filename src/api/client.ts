import { Article, User } from './types';
import { articles } from '../data/articles.json';
import { users } from '../data/users.json';

export class ApiClient {
  async getArticle(id: string): Promise<Article | undefined> {
    return articles.find((article) => article.id === id);
  }

  async getCurrentUser(id: string): Promise<User | undefined> {
    return users.find((user) => user.id === id);
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    const user = users.find((user) => user.id === id);
    if (!user) throw new Error('User not found');

    return { ...user, ...userData };
  }
}

export const api = new ApiClient();
