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
    <div className="grid grid-cols-1 gap-4 max-w-4xl m-auto divide-y-2 divide-offWorld divide-opacity-20">
      {Object.values(posts)?.map(post => <Post key={post.id} {...post} />)}
    </div>
  )
}
