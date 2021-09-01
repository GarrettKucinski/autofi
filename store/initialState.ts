import { CommentType } from '../pages/post/[id]';
import { PostType } from './../components/Posts';

type Store = {
  comments: CommentType[]
  posts: PostType[]
}

const initialState: Store = {
  comments: [],
  posts: []
};

export default initialState;
