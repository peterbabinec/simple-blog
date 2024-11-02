import { Article } from '@/api/types';
import { faker } from '@faker-js/faker';

export function createArticle(
  overrides: Partial<Article> = {},
): Article {
  return {
    id: faker.string.uuid(),
    image: faker.image.urlPicsumPhotos(),
    title: faker.lorem.words({ min: 3, max: 7 }),
    category: faker.helpers.arrayElement([
      'indoor-plants',
      'care',
      'gardening',
    ]),
    author: {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
    },
    postedAt: faker.date.recent(),
    likes: faker.number.int({ min: 0, max: 1000 }),
    ...overrides,
  };
}
