import { PostType } from "../../components/Posts";

type CommentType = {
  name: string
  body: string
  email: string
  postId: number
  id: number
};

type Props = {
  post: PostType,
  comments: CommentType[] 
}

export default function PostPage ({ post, comments }: Props): JSX.Element {
  return (
    <div className="bg-smoke grid grid-cols-1 min-h-screen">
      <h1>{post.title}</h1>

      <p>comments</p>
      {comments && comments.map(comment => <p key={comment.id}>{comment.body}</p>)}
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { id } }) {
  const BASE_API_URL = 'https://jsonplaceholder.typicode.com';
  const POST_BY_ID = `${BASE_API_URL}/posts/${id}`;

  const COMMENTS_BY_POST_ID = `${POST_BY_ID}/comments`;

  const postRes = await fetch(POST_BY_ID);
  const commentRes = await fetch(COMMENTS_BY_POST_ID);

  const post = await postRes.json();
  const comments = await commentRes.json();

  return {
    props: {
      post,
      comments
    }
  }
}
