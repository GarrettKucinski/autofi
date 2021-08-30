import Post from "./Post";

export type PostType = {
  title: string
  body: string
  id: number
  userId: number
}

export type PostProps = {
  posts: PostType[]
}

export default function Posts ({ posts }: PostProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-2xl m-auto">
      {posts?.map(post => <Post key={post.id} {...post} />)}
    </div>
  )
}
