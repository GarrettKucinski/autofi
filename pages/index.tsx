import Posts from "../components/Posts";
import { initializeStore } from "../store/store";

export default function Home({ initializeReduxState: { posts = [] } = {} }): JSX.Element {
  return <Posts posts={posts} />
}

export async function getServerSideProps() {
  const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const apiPosts = await postRes.json();

  const reduxStore = initializeStore({ posts: apiPosts });

  reduxStore.dispatch({ type: 'updatePosts', payload: apiPosts });

  return { props: { initializeReduxState: reduxStore.getState() } };
}
