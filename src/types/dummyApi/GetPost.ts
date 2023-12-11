export type GetPost = {
  data: Post[];
  total: number;
  page: number;
  limit: number;
};

export type Post = {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: Date;
  owner: Owner;
};

export type Owner = {
  id: string;
  title: Title;
  firstName: string;
  lastName: string;
  picture: string;
};

export enum Title {
  MS = "ms",
  Miss = "miss",
  Mr = "mr",
  Mrs = "mrs",
}
