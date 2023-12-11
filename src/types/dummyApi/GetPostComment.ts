export interface GetPostComment {
  data: Comment[];
  total: number;
  page: number;
  limit: number;
}

export interface Comment {
  id: string;
  message: string;
  owner: Owner;
  post: string;
  publishDate: Date;
}

export interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
