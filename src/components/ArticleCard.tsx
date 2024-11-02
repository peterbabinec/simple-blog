import { Article } from '../api/types';
import {
  Image,
  ActionIcon,
  Group,
  Text,
  Badge,
  useMantineTheme,
  rem,
  Stack,
  Avatar,
  Card,
} from '@mantine/core';
import {
  IconBookmark,
  IconHeart,
  IconShare,
} from '@tabler/icons-react';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const theme = useMantineTheme();

  if (!article) return null;

  return (
    <Card withBorder padding="lg" radius="md">
      <Card.Section mb="sm">
        <Image src={article.image} alt={article.title} height={180} />
      </Card.Section>

      <Badge w="fit-content" variant="light">
        {article.category}
      </Badge>

      <Text fw={700} mt="xs">
        {article.title}
      </Text>

      <Group mt="lg">
        <Avatar src={article.author.avatar} radius="sm" />
        <Stack gap={0} align="flex-start" dir="column">
          <Text fw={500}>{article.author.name}</Text>
          <Text style={{ textAlign: 'left' }} fz="xs" c="dimmed">
            posted {new Date(article.postedAt).toLocaleDateString()}
          </Text>
        </Stack>
      </Group>

      <Card.Section px="lg" py="xs" mt="md" withBorder>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            {article.likes} people liked this
          </Text>
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray" title="Like">
              <IconHeart
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.red[6]}
                stroke={1.5}
                title="Like"
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray" title="Bookmark">
              <IconBookmark
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray" title="Share">
              <IconShare
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
