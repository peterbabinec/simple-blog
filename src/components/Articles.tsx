import { ArticleCard } from './ArticleCard';
import { useArticle } from '../hooks/useArticle';
import { Stack } from '@mantine/core';

export function Articles() {
  const { article } = useArticle('1');

  if (!article) return null;

  return (
    <Stack align="center" justify="center" h="100%">
      <ArticleCard article={article} />
    </Stack>
  );
}
