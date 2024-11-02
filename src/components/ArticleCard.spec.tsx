import { ArticleCard } from './ArticleCard';
import { render, screen } from '@testing-library/react';

describe('ArticleCard', () => {
  let article;

  beforeEach(() => {
    article = {
      id: '123',
      image: 'https://example.com/plant.jpg',
      title: 'Top 50 underrated plants',
      category: 'decorations',
      author: {
        name: 'Elsa Gardenowl',
        avatar: 'https://example.com/avatar.jpg',
      },
      postedAt: new Date(),
      likes: 733,
    };

    render(<ArticleCard article={article} />);
  });

  it('renders with name of the author', () => {
    // ...
  });

  it('renders title and image', () => {
    // ...
  });

  it('does something else', () => {
    // ...
  });

  it('shows number of likes', () => {
    // how is it possible component is rendered here?
    // where is 733 coming from?
    screen.getByText('733 people liked this');
  });
});
