// import Head from 'next/head'

import Posts from "../components/Posts";
import { PostProps } from "../components/Posts";

export default function Home({ posts = [] }: PostProps): JSX.Element {
  return (
    <div className="bg-smoke grid grid-cols-1 min-h-screen">
      <Posts posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}
