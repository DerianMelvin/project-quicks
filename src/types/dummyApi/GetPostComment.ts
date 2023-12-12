export type GetPostComment = {
  data: Comment[];
  total: number;
  page: number;
  limit: number;
}

export type Comment = {
  id: string;
  message: string;
  owner: Owner;
  post: string;
  publishDate: Date;
}

export type Owner = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
