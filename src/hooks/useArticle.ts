import { useState, useEffect } from 'react';
import { api } from '../api/client';
import { Article } from '../api/types';

export function useArticle(id: string) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const articleData = await api.getArticle(id);
        setArticle(articleData ?? null);
      } catch (error) {
        console.error('Failed to load article:', error);
      }
    };
    loadArticle();
  }, [id]);

  return { article };
}
