export interface IBlog {
    _id: string;
  title: string;
  slug: string;
  content: string;
  tags?: string[];
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBlogPayload {
  title: string;
  content: string;
  tags?: string[];
  thumbnail: string;
}
