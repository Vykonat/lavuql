declare interface IComment {
  __typename: string;
  id: number;
  commentable_type: string;
  commentable_id: number;
  content: string;
  user: IUserRelationship;
  replies: ICommentRelationship;
  created_at: number;
  updated_at: number;
}

declare type ICommentInput = Pick<
  IComment,
  'id' | 'commentable_id' | 'commentable_type' | 'content'
>;

declare type ICommentRelationship = Pick<
  IComment,
  'id' | 'content' | 'created_at' | 'updated_at' | 'user'
>;
