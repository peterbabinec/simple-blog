export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface Article {
  id: string;
  image: string;
  title: string;
  category: string;
  author: Author;
  postedAt: string;
  likes: number;
}

export interface User {
  id: string;
  displayName: string;
  email: string;
  avatar: string;
}
