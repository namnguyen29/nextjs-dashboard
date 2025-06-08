export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type CreatePost = Pick<Post, "body" | "title" | "userId">;
