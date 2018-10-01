export interface INewsCollection {
  newsItems: INewsItem[];
}

export interface INewsItem {
  title: string;
  date: string;
  cover: string;
  url: string;
}
