import { screen } from '@testing-library/react';

import { ArticleCard } from './ArticleCard';
import { createArticle } from '../tests/factories';
import { renderWrapped } from '../tests/wrappers';

describe('ArticleCard', () => {
  it('renders article information', () => {
    const article = createArticle({
      title: 'Top 50 indoor plants',
      likes: 733,
    });
    renderWrapped(<ArticleCard article={article} />);

    expect(screen.getByText('Top 50 indoor plants')).toBeVisible();
    expect(screen.getByText('733 people liked this')).toBeVisible();
    expect(screen.getByAltText('Top 50 indoor plants')).toBeVisible();
  });

  it('renders like button', () => {
    const article = createArticle({ likes: 733 });
    renderWrapped(<ArticleCard article={article} />);
    expect(screen.getByRole('button', { name: 'Like' })).toBeVisible();
  });
});
