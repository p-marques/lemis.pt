export interface INewsCollection {
  newsItems: INewsItem[];
}

export interface INewsItem {
  id: number;
  title: string[];
  date: string;
  cover: string;
  content: string[];
  images: string[];
}
